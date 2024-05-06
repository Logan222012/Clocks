setInterval(()=>{
    const time = document.querySelector(".display #time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";

// Create an if statement that will check if hours is greater than
//12 and if true then change day_night to "PM" and set hours = hours -12

    if (hours > 12){
        day_night = "PM"; 
        hours = hours - 12;
    }
//Create 3 more if statemenets that will add a zero to the left of the number if the number only has one digit.
//do it for seconds, minutes and hours.

    if (seconds < 10){
       seconds = "0" + seconds;
    }

    if (minutes < 10){
       minutes = "0" + minutes;
    }

    if (hours < 10){
        hours = "0" + hours;
     }

    time.textContent = hours + ":" + minutes + ":" + seconds + " "+ day_night;
  });
