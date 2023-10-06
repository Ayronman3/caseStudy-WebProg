// TO FIX:
// FIX THE CURRENT SPAN BLACK BACKGROUND
// MAKE THE PAGE NOT CLIKABLE
// CREATE A RESULT DIV


const quoteText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore nihil corporis tempora unde saepe minus fugit? Ab facere id molestiae.";
let userInput = document.getElementById("user-input");
let quoteContainer = document.getElementById("quote-container");
let countDown = 10;
let wpm = 0;
const wordArr = quoteText.split("");
var charCount = 0;
let start = false;
let timer;
console.log(wordArr); 
//Spanning Text
quoteContainer.inn
for(var i = 0; i < wordArr.length; i++){
  var spanChar = document.createElement("span");
  spanChar.textContent = wordArr[i];
  
  if(i === 0){
    spanChar.className = "each-letter-current";
  }
  else{
    spanChar.className = "each-letter";
  }
  
 
  
  quoteContainer.appendChild(spanChar);
}

//Input Validation
let eachLetter = document.querySelectorAll(".each-letter");
userInput.addEventListener("keydown", function (event) {
  let spanCount = 1;
  
  if(!start){
     timer = setInterval(updateCounter,1000);
    start = true;
  }
 
  if(event.key.length === 1){
    // console.log("validate");  
    charCount+=1;
    let currentChar = 0;
    // console.log("UserTyped Text: "+userTypedText);
    // console.log("char Count: " + charCount);
    // console.log(wordArr[charCount]);

    if (event.key===wordArr[charCount-1]) {
      userInput.style.backgroundColor = "white";
      eachLetter.forEach(function(spanElement){
        console.log("spancount: " + spanCount + " charCount: " + charCount);
        if(currentChar===charCount-1){
          console.log("hello!");
          spanElement.className+="-current";
        }
        currentChar+=1;
        spanCount+=1;
        if(spanCount === charCount){
          spanElement.className = "each-letter"
          spanElement.className+="-correct";      
        }
        
        
      });
      
    }
    else {
      eachLetter.forEach(function(spanElement){
        spanCount+=1;
        if(spanCount === charCount){
          spanElement.className = "each-letter"
          spanElement.className+="-wrong";
        }
        
      });
      userInput.style.backgroundColor = "rgb(228, 123, 123)";
    }
    if(event.key===" " && event.key===quoteText[charCount-1]){
      event.preventDefault();
      userInput.value = "";
      
      console.log("space is clicked");
      } 
  }
          
  else if(event.key.includes("Backspace")){
   
    if(charCount>0){
      charCount-=1;
      indicator(charCount);
      console.log("cahrcount at delete: " + charCount)
      spanCount = 0;
      //console.log("charcount: " +charCount);
      
    }
  }
  
  // else if(userInput.value.length == 0){
  //     charCount = 0;
  //     eachLetter.forEach(function(spanElement){
  //       spanElement.className="each-letter";
     
        
  //     });
  //   }
  
  console.log("userChar: " + event.key);
  }
  
);

document.addEventListener('keydown', function(event) {
  // Check if the Ctrl key (or Command key on Mac) is pressed
  const isCtrlPressed = event.ctrlKey || event.metaKey; // metaKey for Mac

  // Check if the "A" key is pressed
  if (isCtrlPressed && event.key === 'a') {
    // Prevent the default behavior (text selection)
    event.preventDefault();
  }
});

let faqDiv = document.querySelectorAll(".faq-items");
let plus = document.querySelectorAll(".plus");
let minus = document.getElementsByClassName("minus");
let itemContent = document.querySelectorAll(".item-content");
faqDiv.forEach(function(button,index){
  button.addEventListener('click', function(event) {
    console.log("div clicked");
    if (itemContent[index].style.display === "none" || itemContent[index].style.display === "") {
      itemContent[index].style.display = "block";
      plus[index].innerHTML = "-";
  } else {
      itemContent[index].style.display = "none";
      plus[index].innerHTML = "+";
  }
  });
});

const updateCounter = () =>{
  const countdownDisplay = document.getElementById("timer");
  countdownDisplay.textContent = countDown;
  countDown--;
  if(countDown < 0){
    clearInterval(timer);
    overlay();
    wpm = (charCount/5)/(30/60);
    console.log(`This is your WPM:  ${wpm}`);
    
  };
};

const overlay =  () => {
  const overlayDiv = document.getElementById("overlay");
  overlayDiv.style.display = "block";
  userInput.disabled = true;
}

let count = 0;
userInput.addEventListener("keydown", function(event){
  
  eachLetter.forEach((character)=>{
    if(charCount===count){
      console.log("current charracter: " + character.textContent);   
    }
    count+=1;
  });
  
});
