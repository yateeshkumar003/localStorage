let saveButton = document.getElementById("saveButton");
let messageEle = document.getElementById("message");
saveButton.onclick = function() {
    let userEnteredText = messageEle.value;
    localStorage.setItem("message", userEnteredText);
};

let storedUserInputValue = localStorage.getItem("message");
if (storedUserInputValue === null) {
    messageEle.value = "";
} else {
    messageEle.value = storedUserInputValue;
}