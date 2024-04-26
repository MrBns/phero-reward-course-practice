import { EventEmitter } from "node:events";

class MyBirthday extends EventEmitter {}

const myBirthday1 = new MyBirthday();

/// Creating New Event;

myBirthday1.on("birthday", (cp) => {
  console.log(cp);
});

myBirthday1.on("birthday", (cp) => {
  console.log("said later", cp);
});

myBirthday1.emit("birthday", "hello bangladesh, I love you");
