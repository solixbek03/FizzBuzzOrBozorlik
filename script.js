let elForm = document.querySelector(".site-form");
let elNumber = document.querySelector(".enter-number");
let elResult = document.querySelector(".result");

elForm.addEventListener("submit", function(evt){
  evt.preventDefault();

  let elNumberVall = elNumber.value;


  if (elNumberVall <= 0){
    elResult.textContent = "0dan katta son kiriting";
  } else if(elNumberVall % 3 == 0 &&  elNumberVall % 5 == 0) {
    elResult.textContent = "FizzBuzz";
  } else if (elNumberVall % 3 == 0) {
    elResult.textContent = "Fizz";
  } else if(elNumberVall % 5 == 0) {
    elResult.textContent = "Buzz";
  } else {
    elResult.textContent = `Bu son 3 ga va 5 ga bo'linmaydi`;
  }
})

let elFormResurs = document.querySelector(".form-resurs");
let elResurs = document.querySelector(".enter-resurs");
let elList = document.querySelector(".list-resurs");

elFormResurs.addEventListener("submit", function(evt){
  evt.preventDefault();

  let list = [];
  let elResursValue = elResurs.value;
  elResurs.value = "";
  list.push(elResursValue);
  
  for (item of list) {
    let li = document.createElement("li");
    li.textContent = elResursValue;
    elList.appendChild(li);
  }
})