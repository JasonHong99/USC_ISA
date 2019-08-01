import { CountUp } from './../vendor/countUp/dist/countUp.js';


//counter animation
var countUp = new CountUp('attendees', 2500);
var countUp2 = new CountUp('events', 28);
var countUp3 = new CountUp('members', 30);
//way point trigger
var waypoint = new Waypoint({
  element: document.getElementById('events'),
  handler: function() {
    countUp.start();
    countUp2.start();
    countUp3.start();
  },
  offset: '75%'
})
