const clickCount = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
let count = 0;

cookie.onclick = function () {
    count ++;
    clickCount.textContent = count;
    cookie.width = 180;
    setTimeout(() => {cookie.width = 200;}, 50);
}






