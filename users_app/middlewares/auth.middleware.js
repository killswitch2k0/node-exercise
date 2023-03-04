const userService = require("../services/users");


  async function verifyUser (req, res, next) {
    const userId = req.headers['user-id'];
    if (!userId) {
        res.status(401).end();
        return;
    }
    const user = await userService.getUserById(userId);
    if (user) {
        req.user = user;
        next();
    }else {
        res.status(401).end();
        return;
    }
    
  }

    async function verifyIfAdmin (req, res, next) {
    const userIsAdmin = req.headers['isAdmin'];
    if (userIsAdmin == false) {
        console.log("you don't have sufficient previlleges!")
        res.status(401).end();
        return;
    }else {
        const user = await userService.getUserById(userId);
        req.user = user;
        next();
        return;
    }
    
  }

  module.exports = {verifyUser, verifyIfAdmin};