let monthsArray = ["دی","بهمن","اسفند","فروردین","اردیبهشت","خرداد","تیر","مرداد","شهریور","مهر","آبان","آذر"];
let daysArray = ['یکشنبه','دوشنبه','سه‌شنبه','چهارشنبه','پنج‌شنبه','آدینه','شنبه']
let giveaway = document.querySelector(".giveaway");
let items = document.querySelectorAll(".deadline-format h4"); // select h4's in deadline calsses
let deadline = document.querySelector('.deadline')

let temporaryDate = new Date()
let temporaryYear = temporaryDate.getFullYear()
let temporaryMonth = temporaryDate.getMonth()
let temporaryDay = temporaryDate.getDate()

// let futureDate = new Date(2025, 0, 25, 11, 0, 0);
let futureDate = new Date(temporaryYear, temporaryMonth, temporaryDay + 10, 11, 0, 0);



let year = futureDate.getFullYear();
let month = futureDate.getMonth();
let day = futureDate.getDate();
let hour = futureDate.getHours();
let minute = futureDate.getMinutes();
let weekDay = futureDate.getDay()

let discountMonth = monthsArray[month]
let discountDay = daysArray[weekDay]
console.log(discountDay)

// to Convert Gregorian Calendar to Khorshidi Calandar
if(day <= 21 && month <= 2) {
  year -= 622
} else {
  year -= 621
}


giveaway.textContent = `پایان این تخفیف تا ساعت ${hour}:${minute}0 روز ${discountDay} ${day}  ${discountMonth}  ${year}   است`

let futureTime = futureDate.getTime()

function remainigTime(){
  let today = new Date().getTime()
  let differenceTime = futureTime - today
  
  let oneDay = 24*60*60*1000
  let oneHour = 60*60*1000
  let oneMin = 60*1000

  let remainingDays = Math.floor(differenceTime / oneDay) 
  let remainingHours = Math.floor((differenceTime % oneDay) / oneHour) 
  let remainingMinutes = Math.floor((differenceTime % oneHour) / oneMin)
  let remainingSeconds = Math.floor((differenceTime % oneMin) / 1000)

  const arrayValues = [remainingDays, remainingHours, remainingMinutes, remainingSeconds]

  function format(item){
    if(item < 10){
      return `0${item}`
    } return item
  }
  
  items.forEach((item, index)=>{
    item.innerHTML = format(arrayValues[index])
  })

  if(differenceTime < 0){
    clearInterval(countDown)
    deadline.innerHTML = `<h4>زمان استفاده از این تخفیف به اتمام رسیده است</h4>`
  }
}
let countDown = setInterval(remainigTime, 1000)
remainigTime()