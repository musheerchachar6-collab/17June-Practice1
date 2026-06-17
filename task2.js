let num1 = prompt("Enter Number");
num1 = Number(num1);
let oper = prompt("Enter Arthimatic Operator");
let num2 = prompt("Enter Number");
num2 = Number(num2);

switch (oper) {
    case "+":
      console.log("Addition is ", num1 + num2);
      break;
    case "-":
      console.log("Subtraction is ", num1 - num2);
      break;
    case "*":
      console.log(" Multiplication is ", num1 * num2);
      break;
    case "/":
      console.log(" Division is ", num1 / num2);
      break;
    case "%":
      console.log("Remiander is ", num1 % num2);
      break;
    default:
       console.log("Invaild")
}
