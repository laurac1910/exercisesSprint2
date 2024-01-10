////////////////////// #1

const $button = document.querySelector(`button`);
const $color = document.getElementById(`color`);
$color.textContent = `gray`;

let colorIndex = 0;
const colors = ["lightblue", "red", "gray"];


$button.addEventListener("click", function () {
  $color.style.backgroundColor = colors[colorIndex];
  $color.textContent = colors[colorIndex];
  colorIndex = colorIndex + 1 === colors.length ? 0 : colorIndex + 1;
});

/////////////////////////// #2

// const $inputText = document.getElementById(`inputText`);

// $inputText.addEventListener(`input`, function () {
//   $color.textContent = $inputText.value;
// });

// $button.textContent = `RESET`;

// $button.addEventListener(`click`, function (e) {
//   ($inputText.value = " "), ($color.textContent = " ");
// });

/////////////////////// #3

const $weight = document.getElementById(`weight`);
const $height = document.getElementById(`height`);
const $calculateButton = document.getElementById(`calculateButton`);
const $results = document.getElementById(`results`);
$calculateButton.addEventListener(`click`, function () {
  const bmi = $weight.value / (($height.value / 100) * ($height.value / 100));
  $results.value = bmi.toFixed(2);
});

/////////////// #4

const $local = document.getElementById(`local`);
const $results1 = document.getElementById(`dollar`);
const $buttonForm1 = document.getElementById(`buttonForm1`);
const exchangeRate = 500;
$buttonForm1.addEventListener(`click`, () => {
  const usd = $local.value / exchangeRate;
  $results1.value = usd.toFixed(2);
});
const $reset1 = document.getElementById(`buttonForm2`);
$reset1.addEventListener(`click`, function (e) {
  ($local.value = " "), ($results1.value = " ");
});

//////////////////

const $dollar2 = document.getElementById(`dollar2`);
const $local2 = document.getElementById(`local2`);
const $buttonForm2 = document.getElementById(`buttonForm2`);
const exchangeRate2 = 500;

$buttonForm2.addEventListener(`click`, () => {
  const local = exchangeRate2 * $dollar2.value;
  $local2.value = local.toFixed(2);
});

const $reset2 = document.getElementById(`buttonForm3`);

$reset2.addEventListener(`click`, function (e) {
  ($dollar2.value = " "), ($local2.value = " ");
});
