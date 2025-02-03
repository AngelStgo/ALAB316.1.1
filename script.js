// import "style.css";

// Select and cache the <main> element in a variable named mainEl.
const mainEl = document.querySelector("main");

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = "var(--main-bg)"

// Set the content of mainEl to <h1>DOM Manipulation</h1>.
mainEl.innerHTML = `<h1>DOM Manipulation</h1>`;

// Add a class of flex-ctr to mainEl.
mainEl.classList.add("flex-ctr");


// === Part 2: Creating a Menu Bar ===

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu");

// Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

// Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

// === Part 3: Adding Menu Buttons ===

// Menu data structure
// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
//   ];

var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

  // const topMenuEl = document.getElementById("top-menu");
  // Iterate over the entire menuLinks array and for each "link" object:
// Create an <a> element.
// On the new element, add an href attribute with its value set to the href property of the "link" object.

menuLinks.forEach(link => {
let newLink = document.createElement('a');
newLink.setAttribute("href", link.href);
// Set the new element's content to the value of the text property of the "link" object.
newLink.textContent = link.text;
// Append the new element to the topMenuEl element.
topMenuEl.appendChild(newLink);
});

const subMenuEl = document.getElementById("sub-menu");
subMenuEl.style.height ="100%";
subMenuEl.style.background = "var(--sub-menu-bg)";
subMenuEl.classList.add("flex-around");
subMenuEl.style.position = ("absolute");
subMenuEl.style.top ="0";

const topMenuLinks = topMenuEl.querySelectorAll("a");
topMenuEl.addEventListener("click", function(event) {
  event.preventDefault();

  clickedLink = event.target;
  if (clickedLink.tagName !== "A") return;
  console.log(clickedLink.textContent());
  
  if (clickedLink.classList.contains("active")) {
    clickedLink.classList.remove("active");
  }
  else {
    topMenuLinks.forEach(link => link.className.remove("active"));

    clickedLink.classList.add("active");
  }

});