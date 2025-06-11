console.clear();

const url = "https://swapi.py4e.com/api/people";

async function fetchData() {
  try {
    const response = await fetch(url); // 1. Ask for the data
    const data = await response.json(); // 2. Turn it into JavaScript data
    console.log("full data object:", data); // 3. Log the whole thing
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

fetchData();

async function fetchData2() {
  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("data.results:", data.results);

    // 4. Pick a character and log its details

    if (data.results.length > 0) {
      console.log("First character:", data.results[0]);
      console.log("His name:", data.results[0].name);
      console.log("His height:", data.results[0].height);

      // Find R2-D2 among the characters

      const r2d2 = data.results.find((person) => person.name === "R2-D2");

      console.log("R2-D2 eye color:", r2d2.eye_color);
    }
  } catch (error) {
    console.error("Fetch error:", error);
  }
}

fetchData2();
