console.clear();

const main = document.querySelector('[data-js="main"]');

// Part 1: Creating a Select Input

const languages = {
  DE: "German",
  EN: "English",
  ES: "Spanish",
  FR: "French",
  IT: "Italian",
  NL: "Dutch",
  PT: "Portuguese",
  RU: "Russian",
  ZH: "Chinese",
};

const select = document.createElement("select");
select.name = "languages";
main.append(select);

// --v-- write or modify code below this line --v--

for (const lang in languages) {
  console.log(languages[lang]);
  const option = document.createElement("option");
  option.textContent = lang;
  select.append(option);
}

// --^-- write or modify code above this line --^--

// Part 2: Creating a Navigation Bar

const nav = {
  home: { href: "/home", text: "Home" },
  about: { href: "/about", text: "About" },
  contact: { href: "/contact", text: "Contact" },
};

const navElement = document.createElement("nav");
const ul = document.createElement("ul");
main.append(navElement);
navElement.append(ul);

// --v-- write or modify code below this line --v--

for (const key in nav) {
  console.log(nav[key]);

  const href = nav[key].href;
  const text = nav[key].text;

  const li = document.createElement("li");
  const a = document.createElement("a");

  a.href = href;
  a.textContent = text;

  li.append(a);
  ul.append(li);
}

// --^-- write or modify code above this line --^--
