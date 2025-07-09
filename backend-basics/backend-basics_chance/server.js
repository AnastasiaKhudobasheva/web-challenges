import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

// Chance is a class — which is like a blueprint for creating objects
// When you do new Chance(), you're creating a new instance (object) of that class
// So chance is now an object that has a bunch of methods you can call — like chance.name(), chance.age(), etc.
// npm package called chance — which is a JavaScript library for generating random (but realistic-looking) data
// It’s basically a huge menu of fake-but-plausible data — super useful for testing, mock APIs, or fun experimentsbig list of all available methods like:
// chance.city()
// chance.color()
// chance.animal()

export const server = createServer((request, response) => {
  // Generate random values:
  const name = chance.name();
  const age = chance.age();
  const profession = chance.profession();

  // Build the response string:
  const message = `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`;

  // Send response:
  response.end(message);
});

//We installed a library called Chance, which is like a fake data vending machine
// We created a chance object from it using new Chance(),
// and then we can press its buttons (.name(), .age(), .profession())
// to get random values to send back in our response!
