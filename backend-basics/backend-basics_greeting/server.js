import { createServer } from "node:http";

// create the server and define how it responds to requests:

export const server = createServer((request, response) => {
  // respond with your greeting:

  response.end("Hello, Anastasia!");
});
