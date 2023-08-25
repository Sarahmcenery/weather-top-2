import { v4 } from "uuid";
import { initStore } from "../utils/store-utils.js";
import { stationStore } from "./station-store.js";

const db = initStore("users");

export const userStore = {
  async getAllUsers() {
    await db.read();
    return db.data.users;
  },

  async addUser(user) {
    await db.read();
    user._id = v4();
    db.data.users.push(user);
    await db.write();
    return user;
  },

  async getUserById(id) {
    await db.read();
    return db.data.users.find((user) => user._id === id);
  },

  async getUserByEmail(email) {
    await db.read();
    return db.data.users.find((user) => user.email === email);
  },

  async getUserByFirstName(firstName) {
    await db.read();
    return db.data.users.find((user) => user.firstName === firstName);
  },

  async deleteUserById(id) {
    await db.read();
    const index = db.data.users.findIndex((user) => user._id === id);
    db.data.users.splice(index, 1);
    await db.write();
  },

  async deleteAll() {
    db.data.users = [];
    await db.write();
  },

  async update(userId, updatedUser) {
    const user = await this.getUserById(userId);
    user.firstname = updatedUser.firstname;
    user.lastname = updatedUser.lastname;
    user.email = updatedUser.email;
    user.password = updatedUser.password;
    db.data.users.push(user);
    await db.write();
  },
};
