//the amateur way without js DOM usage.

let span = document.querySelector(".click-span");
console.log(span.innerHTML);

let btn = document.querySelector(".click-button");
console.log(btn);
btn.addEventListener("click", () => {
    span.innerHTML = Number(span.innerHTML) + 1;
});