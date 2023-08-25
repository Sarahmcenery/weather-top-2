import { userStore } from "../models/user-store.js";

export const accountsController = {
  index(request, response) {
    const viewData = {
      title: "Login or Signup",
    };
    response.render("index", viewData);
  },

  login(request, response) {
    const viewData = {
      title: "Login to WeatherTop",
    };
    response.render("login-view", viewData);
  },

  logout(request, response) {
    response.cookie("station", "");
    response.redirect("/");
  },

  signup(request, response) {
    const viewData = {
      title: "Signup to WeatherTop",
    };
    response.render("signup-view", viewData);
  },

  async register(request, response) {
    const user = request.body;
    await userStore.addUser(user);
    console.log(`registering ${user.email}`);
    response.redirect("/login");
  },

  async authenticate(request, response) {
    const user = await userStore.getUserByEmail(request.body.email);
    const password = request.body.password;
    if (password === user.password) {
      response.cookie("station", user.email);
      console.log(`logging in ${user.email}`);
      response.redirect("/dashboard");
    } else {
      response.redirect("/login");
      console.log(`Authentication failed`);
    }
  },

  async update(request, response) {
    const userId = request.params.userid;
    const updatedUser = {
      firstname: request.user.firstname,
      lastname: request.user.lastname,
      email: request.user.email,
      password: request.user.password,
    };
    console.log(`Updating User ${userId} from user ${userId}`);
    const user = await userStore.getUserById(userId);
    await userStore.update(user, updatedUser);
    response.redirect("/user/" + userId);
  },

  async getLoggedInUser(request) {
    const userEmail = request.cookies.station;
    return await userStore.getUserByEmail(userEmail);
  },
};
