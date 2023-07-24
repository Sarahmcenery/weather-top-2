export const dashboardController = {
  async index(request, response) {
    const viewData = {
      title: "WeatherTop Dashboard",
    };
    console.log("dashboardrendering");
    response.render("dashboard-view", viewData);
  },
};
