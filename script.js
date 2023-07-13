console.log("Hey there!");

const test1Button = document.getElementById("test1Button");
const test2Button = document.getElementById("test2Button");

test1Button.addEventListener("click", logTheProb);
test2Button.addEventListener("click", line22BrokeMyHeart);

function logTheProb() {
  for (let i = 0; i < 10; i++) {
    if (i > 10) {
      test1Button.textContent = "It works!";
      // console.log here to see whats happening
    }
  }
}

function line22BrokeMyHeart() {
  const first = Tim;

  const last = "Smith";
  test2Button.textContent = first + " " + last;
}
