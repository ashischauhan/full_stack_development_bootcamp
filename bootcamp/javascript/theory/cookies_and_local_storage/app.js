document.querySelector("#fullName").addEventListener("keyup", function (event) {
  const value = event.target.value;
  document.cookie = `fullName= ${value}`;
  document.querySelector("h1").innerHTML = `Hello ${value}`;
});

// Cookies

function getFullNameFromCookie() {
  const cookie = document.cookie;
  let fullName = "John";
  const cookieItems = cookie.split("; ");
  cookieItems.forEach((item) => {
    if (item.startsWith("fullName")) {
      fullName = item.split("=")[1];
    }
  });
  if (fullName) {
    document.querySelector("h1").innerHTML = "Hello " + fullName;
  }
}
getFullNameFromCookie();

function showPrice() {
  const cookie = document.cookie;
  const cookieItems = cookie.split("; ");
  let price = 200;
  cookieItems.forEach((item) => {
    if (item.startsWith("price")) {
      price = item.split("=")[1];
      price = parseInt(price) + (price * 10) / 100;
    }
  });
  document.cookie = "price=" + parseInt(price);
  document.querySelector(".price").innerHTML = price;
}

showPrice();

//local storage

localStorage.setItem("email", "info@skilluulabs.com.au");
const email = localStorage.getItem("email");
localStorage.setItem(
  "currentUser",
  JSON.stringify({
    firstName: "Alex",
    mobile: "33399393939",
  })
);

const currentUser = localStorage.getItem("currentUser");
const currentUserObject = JSON.parse(currentUser);
console.log(currentUserObject.firstName);
console.log(currentUserObject.lastName);
console.log(currentUserObject.email);

localStorage.removeItem("currentUser");
