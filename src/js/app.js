const navButtons = document.querySelectorAll('.nav-button');
console.log(navButtons);

navButtons.forEach(navButton => {
  console.log(navButton);
  navButton.addEventListener("click", function() {
   
    const nav = navButton.nextElementSibling.childNodes[1];
    console.log(nav);
    nav.classList.toggle('active');
  });
});