"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Tutorial Case

   Countdown Clock
   Author: Todd Nash 
   Date: October 2, 2025

*/

//Display current date & time
document.getElementById("dateNow").innerHTML = "m/d/y<br />h:m:s";

//Display the time left until New Years Eve Bash
document.getElementById('days').textContent ="dd";
document.getElementById('hrs').textContent ="hh";
document.getElementById('mins').textContent ="mm";
document.getElementById('secs').textContent ="ss";

//Store the current date & time
var currentDate = new Date();

//separate time and date components from Date() object
var dateStr = currentDate.toLocaleDateString();
var timeStr = currentDate.toLocaleTimeString();
document.getElementById("dateNow").innerHTML = dateStr + "<br />" + timeStr;

//Calculate the days left until January 1st (of next year)
var newYear = new Date("January 1, 2025")
var nextYear = currentDate.getFullYear() + 1;
newYear.setFullYear(nextYear);
var daysLeft = (newYear - currentDate)/(1000*60*60*24);

//Display the time left until New Years Eve Bash
document.getElementById("days").textContent = Math.floor(daysLeft);

//Calculate hours left in the current day
var hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;

//Calculate minutes left in the current day
var minsLeft = (hrsLeft - Math.foor(hrsLeft)) * 60;

//Calculate seconds left in the current minute
var secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;