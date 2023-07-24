export const indexController = {
  async index(request, response) {
    const viewData = {
      title: "WeatherTop",
    };
    console.log("indexrendering");
    response.render("index-view", viewData);
  },
};
