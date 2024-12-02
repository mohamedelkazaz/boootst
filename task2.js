
/*q1*/  var arr1=[-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log(arr1);
var row = prompt('Entert how many patterns ? ')


/*q2*/var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function findMostFrequent(arr) {
  var frequency = {};  
  var maxCount = 0;    
  var mostFrequent;    

  
  for (var item of arr) {
   
    if (frequency[item]) {
      frequency[item]++;
    } else {
      frequency[item] = 1;
    }

 
    if (frequency[item] > maxCount) {
      maxCount = frequency[item];
      mostFrequent = item;
    }
  }

  return mostFrequent;
}

var result = findMostFrequent(arr1);
console.log(`Most frequent item: ${result}`);


//q4
var num1=prompt('Entert the first number ')
var num2=prompt('Entert the 2th number ')
var num3=prompt('Entert the 3th number ')
var num4=prompt('Entert the 4th number ')
var num5=prompt('Entert the 5th number ')

var largest=num1
if (num1<num2) {
  largest=num2;
}
if (num3 > largest) {
  largest=num3
}
if (num4>largest) {
  largest=num4
}
if (num5>largest) {
  largest=num5
}
alert("the largest number is"+largest)



//q5 
 function reverseNumber(num) {
  
  let reversed = num.toString().split('').reverse().join('');
 
  return parseInt(reversed, 10);
}
var x = 32243;
console.log(`Reversed number: ${reverseNumber(x)}`);


/*q6*/for (var index = 0; index < row; index++) {
    for (var j = 0; j < index; j++) {
        document.write("*");
    }
    document.write("<br>");
}

