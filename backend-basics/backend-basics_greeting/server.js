import { createServer } from "node:http";

// // create the server and define how it responds to requests:

// export const server = createServer((request, response) => {
//   // respond with your greeting:

//   response.end("Hello, Anastasia!");
// });

export const server = createServer((request, response) => {
  if (request.url === "/") {
    response.end("Hello, Anastasia!");
  } else if (request.url === "/about") {
    response.end("This is your first backend server 🥳");
  } else {
    response.statusCode = 404;
    response.end("Page not found");
  }
});
