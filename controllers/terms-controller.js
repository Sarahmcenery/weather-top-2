export const termsController = {
  index(request, response) {
    const viewData = {
      title: "Terms and Conditions",
    };
    console.log("terms rendering");
    response.render("terms-view", viewData);
  },
};
