const number = document.querySelector(".number");
const btn = document.querySelector(".generate");

const generateNumber = () => {
    const ramdNumber = Math.floor(Math.random() * 10 + 1);
    number.innerHTML = ramdNumber;
};

btn.addEventListener("click", generateNumber);

generateNumber();