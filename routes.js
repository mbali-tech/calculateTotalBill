module.exports = () => {}


  

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
