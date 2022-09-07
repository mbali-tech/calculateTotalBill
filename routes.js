module.exports = () => {}


  async function allocate(req, res, next) {
    try {
      let username = req.body.user;
      let planType = req.body.plans;
      await planData.allocateUser(username, planType);
      res.redirect("//user_plan");
    } catch (err) {}
      
}

  function pricePlans(req, res, next) {
    res.render("plans");
  }

  function usersWithPlans(req, res) {
    res.render("allocate");
  }
  //return
  return {
    Home,
    allocate,
    pricePlans,
    usersWithPlans,
  };
