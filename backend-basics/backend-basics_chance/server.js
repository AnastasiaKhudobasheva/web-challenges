import { createServer } from "node:http";
import Chance from "chance";

const chance = new Chance();

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
