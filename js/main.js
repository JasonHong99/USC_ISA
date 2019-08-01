import { CountUp } from './../vendor/countUp/dist/countUp.js';

// window.onload = function() {
//   var countUp = new CountUp('attendees', 2500);
//   countUp.start();
//   var countUp2 = new CountUp('events', 28);
//   countUp2.start();
//   var countUp3 = new CountUp('members', 30);
//   countUp3.start();
// }
var countUp = new CountUp('attendees', 2500);
var countUp2 = new CountUp('events', 28);
var countUp3 = new CountUp('members', 30);

var waypoint = new Waypoint({
  element: document.getElementById('events'),
  handler: function() {
    console.log("wtf");
    countUp.start();
    countUp2.start();
    countUp3.start();
  },
  offset: '75%'
})
