let links = document.querySelector('.links')
let navToggle = document.querySelector(".nav-toggle")
console.log(links, navToggle);
navToggle.addEventListener('click', ()=>{
  links.classList.toggle('show-links')
})
