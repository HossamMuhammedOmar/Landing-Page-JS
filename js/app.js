// Global Variables

// Select navbarList 'ul' element by id
const navbarList = document.querySelector("#navbar__list");

// Select Navbar Icon
const navBarIcon = document.querySelector(".nav__toggle__button");

// Create new DocumentFragment to use it in when we create a list of sections to decrease the reflow and rebuild which increase the app performance
const fragmentList = document.createDocumentFragment();

/**
 * Define a variable to select all sections we have => it will return a (Node List),
 * And then Loop over them with the for of loop.
 * And then create 'li' for each section.
 * And then create a link 'a' for each list item, and do some steps with these links.
 **** 1 - Add the text to it (section name).
 **** 2 - Add css class to it.
 **** 3 - Add href value (section id).
 **** 4 - Make a smooth scroll to each section by call the smoothScroll function.
 * After that append link 'a' to the list item 'li'.
 * And then append these sections to a DocumentFragment,
 * Finally after the for loop, append sections to the navbarList element.
 */
const sections = document.querySelectorAll("section");

for (const section of sections) {
  const list = document.createElement("li");
  const link = document.createElement("a");
  // Set link text
  link.text = section.dataset.nav;

  // Add css class to each link element
  link.classList.add("menu__link");

  // Add href to each link element
  link.href = `#${section.getAttribute("id")}`;

  // Smooth scroll function
  smoothScroll(link, section);

  list.appendChild(link);
  fragmentList.appendChild(list);
}

// Append fragment (that is contain the list items) to the navbarList
navbarList.appendChild(fragmentList);

// Helper functions

// Smooth scroll function
function smoothScroll(link, target) {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  });
}

// Highlight Sections
window.addEventListener("scroll", () => {
  // iterate for each section to get the getBoundingClientRect() and know the current section
  for (const section of sections) {
    const topBounding = section.getBoundingClientRect().top;
    // get the link of the current section to make it highlighted also (by href value)
    const link = document.querySelector(`[href="#${section.id}"]`);

    const minSpace = 0;
    const maxSpace = 400;
    // check if the section is in the view board or not, and add a highlight class if true
    if (topBounding >= minSpace && topBounding <= maxSpace) {
      section.classList.add("your-active-class");
      link.classList.add("highlight__links");
    } else {
      section.classList.remove("your-active-class");
      link.classList.remove("highlight__links");
    }
  }
});

// Responsive navbar menu
navBarIcon.addEventListener("click", () => {
  navbarList.classList.toggle("active__menu");
  document.querySelectorAll(".nav__toggle__line").forEach((line) => {
    line.classList.toggle("active");
  });
});
