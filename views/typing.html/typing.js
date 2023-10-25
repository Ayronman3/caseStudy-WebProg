// TO FIX:
// FIX THE CURRENT SPAN BLACK BACKGROUND
// MAKE THE PAGE NOT CLIKABLE
// CREATE A RESULT DIV

const vocabBox = ["Apple", "Banana", "Cherry", "Dog", "Elephant", "Feline", "Grape", "House", "Internet", "Jigsaw",
"Kite", "Lemon", "Mountain", "Notebook", "Octopus", "Penguin", "Quotation", "Rainbow", "Sunflower", "Table",
"Umbrella", "Volcano", "Watermelon", "Xylophone", "Yellow", "Zebra", "Butterfly", "Dancing", "Elephant", "Forest",
"Guitar", "Happy", "Island", "Jellyfish", "Kangaroo", "Lighthouse", "Mushroom", "Nectar", "Ocean", "Penguin",
"Quokka", "Rainbow", "Sunflower", "Tiger", "Unicorn", "Velvet", "Waterfall", "Xylophone", "Yoga", "Zucchini",
"Avocado", "Beach", "Computer", "Dolphin", "Elephant", "Flamingo", "Guitar", "Hiking", "Ice Cream", "Jaguar",
"Kangaroo", "Lighthouse", "Moonlight", "Nature", "Ocean", "Parrot", "Quilt", "Rainbow", "Strawberry", "Tree",
"Umbrella", "Violin", "Waterfall", "X-ray", "Yoga", "Zephyr", "Apple", "Banana", "Cherry", "Dog", "Elephant",
"Feline", "Grape", "House", "Internet", "Jigsaw", "Kite", "Lemon", "Mountain", "Notebook", "Octopus", "Penguin",
"Quotation", "Rainbow", "Sunflower", "Table", "Umbrella", "Volcano", "Watermelon", "Xylophone"];

let quoteText = word(vocabBox);
let userInput = document.getElementById("user-input");
let quoteContainer = document.getElementById("quote-container");
let countDown = 99999;
let wpm = 0;
let wordArr = quoteText.split("");
var charCount = 0;
let start = false;
let timer;
let customInput = "";
let currentChar = 0;
let cpm = 0;
console.log(wordArr);
//Spanning Text

for (var i = 0; i < wordArr.length; i++) {
  var spanChar = document.createElement("span");
  spanChar.textContent = wordArr[i];

  spanChar.className = "each-letter";

  quoteContainer.appendChild(spanChar);
}

//Input Validation
let children = quoteContainer.querySelectorAll("*");
children[0].className = "each-letter-current";

userInput.addEventListener("keydown", function (event) {
  let spanCount = 1;

  if (!start) {
    timer = setInterval(updateCounter, 1000);
    start = true;
  }

  if (event.key.length === 1) {
    customInput += event.key;
    charCount += 1;
    currentChar += 1;
  }

  if(event.key === 'Backspace'){
    if(charCount>0){
    customInput = customInput.slice(0, -1);
    console.log(customInput)
    charCount -= 1;
    currentChar -= 1;
    }
  }
  if(event.key ===" "){
    userInput.value = "";
  }
  // console.log("validate");


  // console.log("UserTyped Text: "+userTypedText);
  // console.log("char Count: " + charCount);
  // console.log(wordArr[charCount]);

  userInput.style.backgroundColor = "white";

  children.forEach(function (spanElement, index) {
    if (currentChar === index) {
      spanElement.className = "each-letter-current";
    } else {
      spanElement.className = "each-letter";
    }

    if (currentChar > index) {
      if (wordArr[index] === customInput[index]) {
        spanElement.className = "each-letter-correct";
      } else {
        spanElement.className = "each-letter-wrong";
      }
    }

    // currentChar+=1;
    // spanCount+=1;

    // if(spanCount === charCount){
    //   spanElement.className = "each-letter"
    //   spanElement.className="each-letter-correct";
    // }
  });

  // else {
  //   children.forEach(function (spanElement) {
  //     spanCount += 1;
  //     if (spanCount === charCount) {
  //       spanElement.className = "each-letter";
  //       spanElement.className = "each-letter-wrong";
  //     }
  //   });
  //   userInput.style.backgroundColor = "rgb(228, 123, 123)";
  // }

  //   if (event.key === " " && event.key === quoteText[charCount - 1]) {
  //     event.preventDefault();
  //     userInput.value = "";

  //     console.log("space is clicked");
  //   }
  // } else if (event.key.includes("Backspace")) {
  //   if (charCount > 0) {
  //     charCount -= 1;
  //     indicator(charCount);
  //     console.log("cahrcount at delete: " + charCount);
  //     spanCount = 0;
  //     //console.log("charcount: " +charCount);
  //   }

  // else if(userInput.value.length == 0){
  //     charCount = 0;
  //     eachLetter.forEach(function(spanElement){
  //       spanElement.className="each-letter";

  //     });
  //   }

  console.log("userChar: " + event.key);
});

document.addEventListener("keydown", function (event) {
  // Check if the Ctrl key (or Command key on Mac) is pressed
  const isCtrlPressed = event.ctrlKey || event.metaKey; // metaKey for Mac

  // Check if the "A" key is pressed
  if (isCtrlPressed && event.key === "a") {
    // Prevent the default behavior (text selection)
    event.preventDefault();
  }
});

let faqDiv = document.querySelectorAll(".faq-items");
let plus = document.querySelectorAll(".plus");
let minus = document.getElementsByClassName("minus");
let itemContent = document.querySelectorAll(".item-content");
faqDiv.forEach(function (button, index) {
  button.addEventListener("click", function (event) {
    console.log("div clicked");
    if (
      itemContent[index].style.display === "none" ||
      itemContent[index].style.display === ""
    ) {
      itemContent[index].style.display = "block";
      plus[index].innerHTML = "-";
    } else {
      itemContent[index].style.display = "none";
      plus[index].innerHTML = "+";
    }
  });
});

const updateCounter = () => {
  const countdownDisplay = document.getElementById("timer");
  const displayWpm = document.getElementById("wpm");
  const displayCpm = document.getElementById("cpm");
  const tapNew = document.getElementById("tap");
  countdownDisplay.textContent = countDown;
  countDown--;
  if (countDown < 0) {
    clearInterval(timer);
    overlay();
    wpm = charCount / 5 / (30 / 60);
    cpm = charCount/0.50;
    displayCpm.textContent = cpm;
    displayWpm.textContent = wpm;
    console.log(`This is your WPM:  ${wpm}`);
    console.log("this is cpm: " + cpm);
    tapNew.addEventListener("click",function(){
      location.reload();
    });
  }
};

const overlay = () => {
  const overlayDiv = document.getElementById("overlay");
  overlayDiv.style.display = "block";
  userInput.disabled = true;
};

let count = 0;
userInput.addEventListener("keydown", function (event) {
  children.forEach((character) => {
    if (charCount === count) {
      console.log("current charracter: " + character.textContent);
    }
    count += 1;
  });
});

const reset = () =>{
  wpm = 0;
  cpm = 0;
  charCount = 0;
  currentChar = 0; 
  start = false;
  countDown = 4;
  quoteText = word(vocabBox);
  wordArr = quoteText.split("");
  for (var i = 0; i < wordArr.length; i++) {
    var spanChar = document.createElement("span");
    spanChar.textContent = wordArr[i];
  
    spanChar.className = "each-letter";
  
    quoteContainer.appendChild(spanChar);
  }
  const overlayDiv = document.getElementById("overlay");
  overlayDiv.style.display = "none";
  userInput.disabled = false;
}
function word(vocab){
  let generatedWord = '';
  for(let i = 0; i < 20; i++){
    let index = Math.floor(Math.random() * vocab.length);
    generatedWord = generatedWord + vocab[index].toLowerCase() + " ";
  }
  return generatedWord;
}

