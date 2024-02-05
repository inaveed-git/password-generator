// Selecting elements from HTML
let showpass = document.querySelector("#showpass");
let lengthInput = document.querySelector("#length");
let UpperCase = document.querySelector("#UpperCase");
let LowerCase = document.querySelector("#LowerCase");
let numbers = document.querySelector("#numbers");
let Symbols = document.querySelector("#Symbols");

// Character sets
let UpperCaseSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let LowerCaseSet = "abcdefghijklmnopqrstuvwxyz";
let numbersSet = "0123456789";
let SymbolsSet = "!@#$%^&*()_+{}[]?/\|";

// Function to get a random character from a given set
const getRandomCharacter = (dataset) => {
  return dataset[Math.floor(Math.random() * dataset.length)];
}

// Function to generate a random password
const generateRandomPassword = () => {
  let password = "";

  if (UpperCase.checked) {
    password += getRandomCharacter(UpperCaseSet);
  }

  if (LowerCase.checked) {
    password += getRandomCharacter(LowerCaseSet);
  }

  if(numbers.checked){
    password += getRandomCharacter(numbersSet);
  }

  if(Symbols.checked){
    password += getRandomCharacter(SymbolsSet);
  }

  const availableSets = (
    (UpperCase.checked ? UpperCaseSet : "") +
    (LowerCase.checked ? LowerCaseSet : "") +
    (numbers.checked ? numbersSet : "") +
    (Symbols.checked ? SymbolsSet : "")
  );

  while (password.length < lengthInput.value) {
    password += getRandomCharacter(availableSets);
  }

  password = password.slice(0, lengthInput.value);

  // Display the generated password
  showpass.value = password;
}

// Event listener for the "Generate" button
let generatePass = document.querySelector(".generatePass");
generatePass.addEventListener("click", generateRandomPassword);
