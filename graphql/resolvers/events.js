const Event = require("../../models/event");
const User = require("../../models/user");
const { dateToString } = require("../../helpers/date");
const { transformEvent } = require("./merge");

module.exports = {
  events: async () => {
    try {
      const events = await Event.find();
      return events.map(event => {
        return transformEvent(event);
      });
    } catch (error) {
      throw error;
    }
  },

  createEvent: async args => {
    try {
      // create the event
      const event = new Event({
        title: args.eventInput.title,
        description: args.eventInput.description,
        price: +args.eventInput.price,
        date: dateToString(args.eventInput.date),
        creator: "5d83481aa317976b8840639b"
      });
      const result = await event.save();

      // add ability to get nested objects
      let createdEvent = transformEvent(result);

      // update the user createdEvents
      let userCreator = await User.findById("5d83481aa317976b8840639b");
      if (!userCreator) {
        throw new Error("User not Found");
      }
      userCreator.createdEvents.push(event);
      await userCreator.save();

      // return
      return createdEvent;
    } catch (error) {
      throw error;
    }
  }
};
