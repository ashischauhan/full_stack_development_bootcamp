document.querySelectorAll(".drum").forEach(function (button) {
  button.addEventListener("click", function () {
    alert("Button clicked: " + this.innerHTML);
  });
});
