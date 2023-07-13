console.log("script.js");

const test1Button = document.getElementById("test1Button");
const test2Button = document.getElementById("test2Button");

test1Button.addEventListener("click", logTheProb);
test2Button.addEventListener("click", line22BrokeMyHeart);

function logTheProb() {
  console.log("func");
  for (let i = 0; i <= 10; i++) {
    console.log("if");
    console.log(i);
    if (i == 10) {
      // originally was  - if(i > 10)
      console.log("if");
      test1Button.textContent = "It works!";
    }
  }
}
// we console logged inside the function, saw it was working, inside the loop, saw it was working, so knew the issue was the if statement (specifically the condition)

function line22BrokeMyHeart() {
  const first = "Tim"; // originally was "Tim" without the quotes

  const last = "Smith";
  test2Button.textContent = first + " " + last;
}

const cat = "food something";
// we saw the console error said the error was on line 23, so we didn't waste time looking at where the magic was supposed to happen (line 26)
