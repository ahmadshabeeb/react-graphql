const authResolver = require("./auth");
const evenstResolver = require("./events");
const bookingResolver = require("./booking");

const rootResolver = {
  ...authResolver,
  ...evenstResolver,
  ...bookingResolver
};

module.exports = rootResolver;
