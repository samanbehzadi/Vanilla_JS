function showTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  var session = "AM";

  let day = date.getDay()
  let month = date.getMonth()
  let year = date.getFullYear()
  console.log('today is: ',year)
  

  if(hours == 0){
    hours = 12
  } else if (hours > 12){
    hours -= 12
    session = 'PM'
  }

  hours = (hours < 10) ? '0' + hours : hours
  minutes = (minutes < 10) ? '0' + minutes : minutes
  seconds = (seconds < 10) ? '0' + seconds : seconds

  let Time = hours + ':' + minutes + ':' + seconds + " " + session
  let Day = day + '/' + month + '/' + year

  document.getElementById('MyClockDisplay').innerHTML = Time
  document.getElementById('MyDayDisplay').innerHTML = Day
  // document.getElementById('MyClockDisplay').textContent = Time

}

setInterval(() => {
  showTime()
}, 1000);