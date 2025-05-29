let bmiForm = document.querySelector(".bmi-form");
bmiForm.addEventListener("submit", function (e) {
  //To prevent the default behavior of the form submission
  e.preventDefault();
  // e.target refers to the form element
  const form = e.target;

  // Access individual form elements using e.target
  const name = form.querySelector("#name").value;
  const weight = +form.querySelector("#weight").value;
  const height = +form.querySelector("#height").value;
  
  console.log(name,weight,height);

  //Write your logic here.
 let  heightInMetres=height/100;

 let bmi=(weight/heightInMetres ** 2).toFixed(2);
console.log("bmi",Number(bmi));

let result;
if(bmi<18.5)
{
    console.log("thin");
    result="thin";
}
else if(bmi>25)
{
    console.log("fat");
    result="fat";
}
else{
    console.log("normal");
    result="normal"
}
  //Logic ends

  //Uncomment below code after writing your logic
   form.querySelector("#result").textContent = `${name.toUpperCase()}, You are ${result}`;
});

//Below code is reset the form - will explain later
document.querySelector("#reset").addEventListener("click", function (e) {
  bmiForm.querySelector("#name").value = "";
  bmiForm.querySelector("#weight").value = "";
  bmiForm.querySelector("#height").value = "";
  bmiForm.querySelector("#result").textContent = "";
});