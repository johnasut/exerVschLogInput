/*-----This code works, but creates a new <p> each time I click the button.-----*/

// var button = document.getElementById("button");

// function buttonClick() {
//     var textBox = document.getElementById("input");
//     console.log(textBox.value);
//     var textLog = document.createElement("p");
//     textLog.textContent = textBox.value;
//     document.body.append(textLog)
// };

// button.addEventListener("click", buttonClick)


/* This code creates a new <p> if it doesn't already exist, then changes the text inside*/

var button = document.getElementById("button");

function buttonClick() {
    var textBox = document.getElementById("input");
    console.log(textBox.value);
    var textLog = document.getElementById("content")
    if (textLog == null) {
        textLog = document.createElement("p");
        textLog.setAttribute("id", "content");
        document.body.append(textLog);
    };
    textLog.textContent = textBox.value;
};

button.addEventListener("click", buttonClick)