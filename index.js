
const nav = document.querySelector("nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

/** When someone clicks Hamburger button
 * if nav is closed, open it
 * if nav is open, close it
 */

navToggle.addEventListener("click", () => {
  const visibility = nav.getAttribute("data-visible");
  const icon = navToggle.getAttribute("aria-expanded");
  visibility === "false" ? nav.setAttribute("data-visible", true) : nav.setAttribute("data-visible", false);
  icon === "false" ? navToggle.setAttribute("aria-expanded", true) : navToggle.setAttribute("aria-expanded", false);
})

