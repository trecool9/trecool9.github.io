let burger = document.getElementById("burger");
console.log(burger);
let navbarList = document.getElementById("navbarList");
console.log(navbarList);

burger.addEventListener('click', function () {
    burger.classList.toggle("active");
    navbarList.classList.toggle("nav--active");
});