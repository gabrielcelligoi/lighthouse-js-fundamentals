const temperature = -3;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf")
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it")
} else {
  console.log("short sleeves are fine")
}

console.log("Now you're ready to go outside")

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a good idea.")
}