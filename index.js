let circleButton = document.querySelector(".circle-button")
let services = document.querySelector("#services")
circleButton.addEventListener("click", () => {
  services.scrollIntoView({behavior: "smooth"})
})
