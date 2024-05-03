const inputText = document.getElementById("inputText");
const shiftValueInput = document.getElementById("shiftValue");
const encryptButton = document.getElementById("encryptButton");
const decryptButton = document.getElementById("decryptButton");
const outputText = document.getElementById("outputText");

function caesarCipher(text, shift, action) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (let i = 0; i < text.length; i++) {
    let char = text.charAt(i);
    let charCode = char.charCodeAt(0);

    // Check if character is a letter
    if (/[a-zA-Z]/.test(char)) {
      // Adjust shift value based on action (encrypt or decrypt)
      shift = action === "encrypt" ? shift % 26 : - (shift % 26);

      // Handle wrapping around the alphabet
      charCode += shift;
      if (charCode < alphabet.indexOf("a")) {
        charCode = alphabet.length - 1 + (charCode - alphabet.indexOf("a"));
      } else if (charCode > alphabet.indexOf("z")) {
        charCode = (charCode - alphabet.indexOf("a")) % 26;
      }
    }
    result += String.fromCharCode(charCode);
  }

  return result;
}

encryptButton.addEventListener("click", function() {
  const text = inputText.value;
  const shift = parseInt(shiftValueInput.value);
  const encryptedText = caesarCipher(text, shift, "encrypt");
  outputText.value = encryptedText;
});

decryptButton.addEventListener("click", function() {
  const text = inputText.value;
  const shift = parseInt(shiftValueInput.value);
  const decryptedText = caesarCipher(text, shift, "decrypt");
  outputText.value = decryptedText;
});
