const txtInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultText = document.getElementById('result');
let enteredText = "";

/// Functions ///
const checkNulls = () => {
   return (enteredText === null || enteredText === "") ? true : false;
}

const cleanString = (inputString) => {
   //const regex = /[\s_,.]/g;
   const regex = /[^a-zA-Z0-9]/g; //removes all non-alphanumeric characters including _ or # or !
   return inputString.replace(regex, '');
}

const lowerString = (inputText) => {
   return inputText.toLowerCase();
}

const reverseString = (inputText) => {
   return inputText.split('').reverse().join('');
}

const compareString = (originalString, revString) => {
   return (originalString === revString);
}

const updateMessage = (palindrome) => {
   const message = palindrome ? "is a palindrome" : "is not a palindrome";
   resultText.style.display = "block";
   resultText.innerHTML = `<b>${enteredText}</b> ${message}`;
   txtInput.value = "";
}

/// Event Listeners ///
checkButton.addEventListener("click", () => {
   enteredText = txtInput.value;
   if (checkNulls()) {
      alert("Please input a value");
      return;
   };
   const cleanedString = cleanString(enteredText);
   const loweredString = lowerString(cleanedString);
   const reversedString = reverseString(loweredString);
   const palindrome = compareString(loweredString, reversedString);
   updateMessage(palindrome);
});
