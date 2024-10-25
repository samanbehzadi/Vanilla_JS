const reviews = [
  {id: 1,name: "John Doe",job: "Programmer",img: "./image/Untitled.jpg",text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime reiciendis ququos aliquid sit necessitatibus quo, illo officiis tempore non?",
  },
  {id: 2,name: "Tom Smith",job: "HI Designer",img: "./image/Untitled2.jpg",text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime reiciendis quam quos aliquid sit necessitatibus quo, illo officiis tempore non?",
  },
  {id: 3,name: "Tom Gomez",job: "Front-End Developwe",img: "./image/images.jpg",text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime reiciendis quam quos aliquid sit necessitatibus quo, illo officiis tempore non?",
  },
  {id: 4,name: "Lisa Lopez",job: "Photographer",img: "./image/Untitled2.jpg",text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime reiciendis quam quos aliquid sit necessitatibus quo, illo officiis tempore non?",
  },
];

let personImg = document.getElementById('person-img')
let authorName = document.getElementById('name') 
let job = document.getElementById('job')
let text = document.getElementById('review')

let prevBtn = document.querySelector('.prev-btn')
let nextBtn = document.querySelector('.next-btn')
let currentItem = 0

window.addEventListener('DOMContentLoaded', ()=>{
  showPerson(currentItem)
})

function showPerson(person){
  let item = reviews[person]
  personImg.src = item.img
  authorName.textContent = item.name
  job.textContent = item.job
  text.textContent = item.text
}

nextBtn.addEventListener('click', ()=>{
  currentItem += 1
  if(currentItem >= reviews.length){
    currentItem = 0
  }
  showPerson(currentItem)
})

prevBtn.addEventListener('click', ()=> {
  currentItem -= 1
  if (currentItem < 0){
    currentItem = reviews.length -1
  }
  showPerson(currentItem)
})