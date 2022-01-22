// Global Variables

// Select navbarList 'ul' element by id
const navbarList = document.querySelector("#navbar__list");

// Create new DocumentFragment to use it in when we create a list of sections to decrease the reflow and rebuild which increase the app performance
const fragmentList = document.createDocumentFragment();

/**
 * Define a variable to select all sections we have it will return a (Node List),
 * And then Loop over them with the for of loop,
 * And then create li for each section, and append a link to each li,
 * And then append these sections to a DocumentFragment,
 * Finally after the for loop, append sections to the navbarList element.
 */
const sections = document.querySelectorAll("section");
for (let section of sections) {
  let list = document.createElement("li");
  let link = document.createElement("a");
  link.text = section.dataset.nav;
  link.classList.add("menu__link");
  list.appendChild(link);
  fragmentList.appendChild(list);
  console.log(fragmentList);
}

// Append fragment that is contain the list item to the navbarList
navbarList.appendChild(fragmentList);
