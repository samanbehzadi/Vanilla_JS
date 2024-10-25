let modalBtn = document.querySelector('.modal-btn')
let modalOverlay = document.querySelector('.modal-overlay')
let closeModalBtn = document.querySelector('.close-btn')

modalBtn.addEventListener('click', ()=>{
  modalOverlay.classList.add('open-modal')
})

closeModalBtn.addEventListener('click', ()=>{
  modalOverlay.classList.remove('open-modal')
})