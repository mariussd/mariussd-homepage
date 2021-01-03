import Vue from "vue";
import routes from "./routes";

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let data = {
  time: "You loaded the page on " + new Date().toLocaleString(),
  day: "It is " + days[new Date().getDay()] + " my dudes",
};

let app = new Vue({
  el: "#app",
  data: data,
});

let app5 = new Vue({
  el: "#app-5",
  data: {
    visible: true,
    imageVisible: false,
    message: "Rånk",
    counter: 0,
  },
  methods: {
    toggleMessage: function () {
      this.visible = !this.visible;
    },
    toggleImage: function () {
      this.imageVisible = !this.imageVisible;
    },
    incrementCounter: function () {
      this.counter = this.counter + 1;
    },
    decrementCounter: function () {
      this.counter = this.counter - 1;
    },
  },
});

let watchExampleVM = new Vue({
  el: "#watch-example",
  data: {
    math: "",
  },
  computed: {
    answer: function () {
      return isNaN(this.math) || this.math === ""
        ? "Only numbers please"
        : Math.pow(parseInt(this.math), 2);
    },
  },
});

let tmp = result;
let fefefffffef = result[1];

console.log("fheufuwdj", users);
console.log("Moss er best", tmp);
console.log("pølse i vaffel", JSON.parse(fefefffffef));
