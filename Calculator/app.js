let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

let string = "";
let arr = Array.from(buttons);

// ✅ Define function at the top
function handleInput(value) {
    if (value === "AC") {
        string = "";
        input.value = string;
    } else if (value === "DEL") {
        string = string.slice(0, -1);
        input.value = string;
    } else if (value === "=" || value === "Enter") {
        try {
            string = eval(string).toString();
            input.value = string;
        } catch {
            input.value = "Error";
            string = "";
        }
    } else {
        string += value;
        input.value = string;
    }
}

// ✅ Button clicks
arr.forEach((button) => {
    button.addEventListener("click", (e) => {
        handleInput(e.target.innerText);
    });
});

// ✅ Keyboard input
document.addEventListener("keydown", function (e) {
    if ((/[0-9+\-*/.]/).test(e.key)) {
        handleInput(e.key);
    } else if (e.key === "Enter") {
        handleInput("Enter");
    } else if (e.key === "Backspace") {
        handleInput("DEL");
    } else if (e.key === "Escape") {
        handleInput("AC");
    }
});
