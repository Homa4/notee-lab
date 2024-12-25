const { EventEmitter }= require("events");

class MyClass extends EventEmitter {};

const myEmitter = new MyClass();

myEmitter.on("event_1", (message) => {
    console.log(message)
})

myEmitter.on("event_2", (message) => {
    console.log(message)
})

myEmitter.emit("event_1", "first event");

myEmitter.emit("event_2", "second event");


