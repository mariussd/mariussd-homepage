import Vue from "vue";
import routes from "./routes";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    bolle: "Satan",
    time: "You loaded the page on " + new Date().toLocaleString(),
    day: "It is " + days[new Date().getDay()] + " my dudes"
  }
});

let app5 = new Vue({
  el: "#app-5",
  data: {
    visible: true,
    message: "Rånk",
    counter: 0
  },
  methods: {
    toggleMessage: function() {
      this.visible = !this.visible;
    },
    incrementCounter: function() {
      this.counter = this.counter + 1;
    },
    decrementCounter: function() {
      this.counter = this.counter - 1;
    }
  }
});
