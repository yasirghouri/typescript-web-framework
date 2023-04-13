import { User } from "./models/User";

const user = new User({ name: "new record", age: 0 });

user.events.on("change", () => {
  console.log("change #1");
});

user.events.trigger("change");

console.log("USER", user);
