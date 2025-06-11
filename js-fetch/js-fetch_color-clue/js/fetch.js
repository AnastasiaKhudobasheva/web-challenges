import { setColorToGuess, getRandomHexCode } from "./utils.js";

export async function fetchNewColor() {
  const hexCode = getRandomHexCode();
  const colorApiUrl = `https://www.thecolorapi.com/id?hex=${hexCode}`;

  try {
    // 1️⃣ Ask the Color API for info
    const response = await fetch(colorApiUrl);
    const data = await response.json();

    // 2️⃣ See what `data` looks like
    console.log("What data response looks like:", data);

    // 3️⃣ Get the color to guess
    const namedHex = data.name.closest_named_hex;
    const namedColor = data.name.value;

    console.log("Named Color Hex:", namedHex);
    console.log("Named Color Name:", namedColor);

    // 4️⃣ Tell the game what color to guess

    setColorToGuess(namedHex, namedColor);
  } catch (error) {
    console.error("Problem while fetching color data:", error);
  }
  /**
   * Hint 1:
   * Use the fetch API to get the hex value and the name of the closest
   * named color to the randomly generated `hexCode` from the color API.
   * These values can be found in `.name.closest_named_hex` and
   * `.name.value` properties of the response data respectively.
   *
   * Hint 2:
   * Call the `setColorToGuess` function to set the color to guess.
   * The function takes two arguments:
   *  - the hex code of the closest named color
   *  - and the name of the random color
   */
}

// 🧠 Why This Works
// await fetch(...) waits for the API response 🌐

// await response.json() turns raw data into a JavaScript object

// .name.closest_named_hex is the nearest hex code, while .name.value is the color name
// googlecloudcommunity.com
// +3
// thecolorapi.com
// +3
// thecolorapi.com
// +3

// setColorToGuess(...) tells the game both the actual hex color and its official name

// ✅ Summary: What You Just Did
// Asked the Color API about a random hex color

// Peeked at the reply to find important info

// Told the game which color to guess and its name

// Now every time fetchNewColor() runs, the browser will:

// Pick a random color

// Ask the Color API about it

// Set up a fresh color to guess for the game

// how the random color selection mechanism works in your game in simple, clear steps:

// 🎨 1. Generating a Random Hex Code
// Your getRandomHexCode() function (even if you don't see it yet) does this:

// It generates six random hexadecimal digits (0–9 or a–f).

// These six digits combine into a color code like "#3da5f7".

// Under the hood, one common approach is:

// js
// Copy
// Edit
// let hex = "#";
// const digits = "0123456789abcdef";
// while (hex.length < 7) {
//   const idx = Math.floor(Math.random() * 16);
//   hex += digits[idx];
// }
// return hex;
// This picks six random characters from digits to create a valid hex color.

// 🛰️ 2. Sending It to the Color API
// Once you have a random hex code:

// const url = `https://www.thecolorapi.com/id?hex=${hex}`;
// Every time you call fetchNewColor(), it:

// Generates a new hex value (like #a1b2c3).

// Builds the URL including that hex.

// Sends a fetch() request to the Color API using that URL.

// Receives data for this specific randomly generated color.

// From the response, it finds:
// .name.closest_named_hex
// .name.value
// It then calls setColorToGuess(...) so the game knows:
// Which named color to present (matched closely).
// What the actual hex is behind the scenes.

// 🎯 Why It Changes Every Time
// Because each call to:

// const hexCode = getRandomHexCode();
// creates a new random code, the API gets a fresh, unique hex each time — so every round of the game presents a new color and name.

// 🧩 Putting It All Together
// Generate a random hex code.

// Fetch Color API data for that hex.

// Extract the correct color name and actual hex.

// Tell the game which color to guess using setColorToGuess().

// Each call repeats this process with a new random hex — that's why the color changes every round!
