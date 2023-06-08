number1 = null;
number2 = null;
operand = null;
var maxNb = 9999999999;
var cpt = 0;
var op = 0;
var minusNb = 0;
var memDel = 0;
// var doubleOp = 0;

if(window.innerWidth < 450){
  document.getElementById("result").style.fontSize = "40px"
}
else{
  
}

function appendNb(number){
  if(window.innerWidth < 450){
    maxNb = 999999;
    appendNb_small(number);
  }
  else{
    maxNb = 9999999999;
    appendNb_big(number);
  }
}
if (window.innerWidth < 200) {
  redirectLink.click();
}


function appendNb_small(number) {
  if(document.getElementById("result").value.length < 8){
    var result = document.getElementById("result");
    result.value += number;
    var afc = document.getElementById("affichage");
    afc.value = "";
    // op = 0;
  }
}


function appendNb_big(number) {
  if(document.getElementById("result").value.length < 10){
    var result = document.getElementById("result");
    result.value += number;
    var afc = document.getElementById("affichage");
    afc.value = "";
    // op = 0;
  }
}

function appendDot(dot){
    if(cpt == 0 & document.getElementById("result").value != ""){
        document.getElementById("result").value += dot;
        // document.getElementById("affichage").value += dot;
        cpt = 1;
    }
}

function minus(){
    if(minusNb == 0 && document.getElementById("result").value === ""){
      document.getElementById("result").value = "-";
      // document.getElementById("affichage").value = "-";
      minusNb = 1;
    }
    else{
      if(minusNb == 0 ){
        var lastString = document.getElementById("result").value;
        document.getElementById("result").value ="-" + lastString;
        // document.getElementById("affichage").value ="-" + lastString;
        minusNb = 1;
      }
      else{
    }
  }
}

function setOperator(operator){
  if(document.getElementById("result").value == "-"){
    warning.textContent = "Please Enter A Valid Negative Number";
    setTimeout(function() {
    warning.textContent = "";
    }, 2500);
  }
  else{
      if(isNaN(parseFloat(document.getElementById("result").value)) && op == 0){
        warning.textContent = "Enter A Number First :) ";
        setTimeout(function() {
        warning.textContent = "";
        }, 2500);
      }
    else{
      if(op == 0){
          number1 = parseFloat(document.getElementById("result").value);
          operand = operator;
          document.getElementById("result").value = "";
          // document.getElementById("affichage").value += operator;
          minusNb = 0
          op = 1
          cpt = 0        
          // doubleOp = 1;
      }
      else{
        if(isNaN(parseFloat(document.getElementById("result").value)) && op == 1){
          operand = operator
          // var lastString = document.getElementById("affichage").value;
          // document.getElementById("affichage").value = lastString.slice(0, -1) + operator;
          document.getElementById("affichage").value = operator;

        }
        else{
          // warning.textContent = "Error";
          // setTimeout(function() {
          // warning.textContent = "";
          // }, 2500);

        }
        
      }

    }
  }
}


// function setOperator(operator){
//     if(document.getElementById("result").value == "-"){
//       warning.textContent = "Please Enter A Valid Negative Number";
//       setTimeout(function() {
//       warning.textContent = "";
//       }, 2500);
//     }
//     else{
//       if(isNaN(parseFloat(document.getElementById("result").value)) && op === 0){
//         warning.textContent = "Enter A Number First :) ";
//         setTimeout(function() {
//         warning.textContent = "";
//         }, 2500);
//       }
//       else{
//         if(doubleOp == 1 ){  
//           operand = operator;
//           switch (operand) {
//             case "+":
//               number1 += parseFloat(document.getElementById("result").value);
//               break;
//             case "-":
//               number1 -= parseFloat(document.getElementById("result").value);
//               break;
//             case "*":
//               number1 *= parseFloat(document.getElementById("result").value);
//               break;
//             case "/":
//               number1 /= parseFloat(document.getElementById("result").value);
//               break;
//           }

//           document.getElementById("result").value = "";
//           document.getElementById("affichage").value += operator;

//           // if(op == 1){
//           //   var lastString = document.getElementById("affichage").value;
//           // document.getElementById("affichage").value = lastString.slice(0, -1) + operator;
//           // }
//           doubleOp = 1;
//           minusNb = 0
//           op = 1
//           cpt = 0
          
//       }
//     else{
//       if(op == 1){
//         operand = operator;
//         var lastString = document.getElementById("affichage").value;
//         document.getElementById("affichage").value = lastString.slice(0, -1) + operator;
//         doubleOp = 1;

//       }
      
//       else{
//         if(op == 0){
//           number1 = parseFloat(document.getElementById("result").value);
//           operand = operator;
//           document.getElementById("result").value = "";
//           document.getElementById("affichage").value += operator;
//           doubleOp = 1;
//           minusNb = 0
//           op = 1
//           cpt = 0
          
//         }
        
//         else{
//           warning.textContent = "Cannot add two operators consecutively!";
//           setTimeout(function() {
//           warning.textContent = "";
//           }, 2500);
//         }
//       }
//     }
//     }
//   }
// }

function testCalc(){
  number2 = parseFloat(document.getElementById("result").value);

  if(number2 == 0 && operand == '/'){
    warning.textContent = "This Is Impossible ";
    setTimeout(function() {
    warning.textContent = "";
    }, 2500);
    document.getElementById("result").value = "";
    document.getElementById("affichage").value = "";

        number1 = null;
        number2 = null;
        operand = null;
        minusNb = 0;
        op = 0;
        // doubleOp = 0;
  }
  else{
    calculate();
  }
  
}

function calculate(){
  if(document.getElementById("result").value == "-"){
    warning.textContent = "Please Enter A Valid Negative Number";
    setTimeout(function() {
    warning.textContent = "";
    }, 2500);
  }
  else{
    if(operand === null){
      warning.textContent = "You Didn't Make Any Operation !";
    setTimeout(function() {
    warning.textContent = "";
    }, 2500);
  
    }
    else{
    number2 = parseFloat(document.getElementById("result").value);
    if(isNaN(number2)){
      warning.textContent = "Insert A Second Number ";
      setTimeout(function() {
        warning.textContent = "";
      }, 2500);
    }
    else{
    switch (operand) {
        case "+":
          result = number1 + number2;
          break;
        case "-":
          result = number1 - number2;
          break;
        case "*":
          result = number1 * number2;
          result = result.toFixed(2);
          break;
        case "/":
          result = number1 / number2;
          result = result.toFixed(2);
          break;
        // default:
        //   result = "Invalid operator";
      }

      // maxNb = 9999999999
      if (result >= maxNb) {
        var exponent = Math.floor(Math.log10(result));
        var coefficient = result / Math.pow(10, exponent);
        document.getElementById("result").value = coefficient.toFixed(2) + "e+" + exponent;
        var afc = document.getElementById("affichage");
        afc.value = number1 + operand + number2;
        number1 = result;
        number2 = null;
        operand = null;
        minusNb = 0;
        // doubleOp = 0;
        op = 0;
        memDel = 1;
      }
      else{
      document.getElementById("result").value = result;
      var afc = document.getElementById("affichage");
        afc.value = number1 + operand + number2;
        number1 = result;
        number2 = null;
        operand = null;
        minusNb = 0;
        op = 0;
        // doubleOp = 0;
        memDel = 1;
      }
    }
  }
}
}

function clearNb(){
    document.getElementById("result").value = "";
    document.getElementById("affichage").value = "";
    number1 = null;
    number2 = null;
    operand = null;
    cpt = 0;
    minusNb = 0;
    op = 0;
    memDel = 0;
    // doubleOp = 0;
}

function deleteNb(){
    var last_result_String = document.getElementById("result").value;
    // var last_affichage_String = document.getElementById("affichage").value;
    var lastValResult = last_result_String.slice(-1);
    // var lastValAffichage = last_affichage_String.slice(-1);
    document.getElementById("result").value = last_result_String.slice(0, -1);
    // if(lastValAffichage != '+' && lastValAffichage != '-' && lastValAffichage != '*' && lastValAffichage != '/'){
    //   document.getElementById("affichage").value = last_affichage_String.slice(0, -1);
    // }
    if(lastValResult == '.'){
        cpt = 0;
    }
}