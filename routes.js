module.exports = () => {}
async function Home(req, res, next) {
    try {res.render("index");
      } 
      catch (err) {
      next(err);
    }
  }
  async function allocate(req, res, next) {
    try {
      let username = req.body.user;
      let planType = req.body.plans;
      await planData.allocateUser(username, planType);
      res.redirect("/link_user");
    } catch (err) {
      next(err);
    }
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
