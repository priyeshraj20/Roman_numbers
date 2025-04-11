const inputNumber = document.getElementById("number");
const inputBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");


const inputValidation = (checkNo) => {
if(inputNumber.value === "")
{
  output.innerText="Please enter a valid number";
  output.style.display="block";
}
else if (checkNo < 0)
{
  output.innerText="Please enter a number greater than or equal to 1";
  output.style.display="block";
}
else if (checkNo >= 4000)
{
 output.innerText="Please enter a number less than or equal to 3999";
  output.style.display="block";
}
else {
  output.innerText=romanNumeral(checkNo);
}
};

const romanNumeral = (num) => 
  {
  const romanNumerals = [
    { value: 1000, numeral: 'M' },
    { value: 900, numeral: 'CM' },
    { value: 500, numeral: 'D' },
    { value: 400, numeral: 'CD' },
    { value: 100, numeral: 'C' },
    { value: 90, numeral: 'XC' },
    { value: 50, numeral: 'L' },
    { value: 40, numeral: 'XL' },
    { value: 10, numeral: 'X' },
    { value: 9, numeral: 'IX' },
    { value: 5, numeral: 'V' },
    { value: 4, numeral: 'IV' },
    { value: 1, numeral: 'I' }
  ];
  let result = '';
    for (let i = 0; i < romanNumerals.length; i++) {
      while (num >= romanNumerals[i].value) {
        result += romanNumerals[i].numeral;
        num -= romanNumerals[i].value;
      }
    }
    return result;

}

inputBtn.addEventListener("click",() => {
const inputInt = parseInt(inputNumber.value);
inputValidation(inputInt);
});


