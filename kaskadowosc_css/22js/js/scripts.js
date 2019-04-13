//przyklad22
//var numbers = [1, 3, 4, 5];

//console.log(numbers[2]);
//console.log(numbers.length);

//var things = [{firstName: "Anna"}, 2, 2 + 8];

//var arrays = [[2, 3, 4], [4, 2, 1, ["Jan"]]];



//przyklad23
//var arr = [];

arr[0] = "Kasia";
arr[1] = "Tomek";

arr[12] = 40;

arr[arr.length] = "Piotrek";

arr.push("Monika");

arr.unshift("Patryk");

//console.log(arr.length);



//przyklad24

//var arr = ["Tomek", "Ania", "Jacek", "Mariusz"];

// console.log(arr.length);

// arr.length = 2;

// delete arr[2]; // usuniety ale jako neizdefiniowany

// var last = arr.pop(); //arr.pop() usuwa ostani element ale mozna stworzyc zmienna ktora ja wyswietla

// var first = arr.shift(); // usuwa pierwszy element tablicy i wyswietla w zmiennej

//var lastTwo = arr.splice(-2, 2, "Piotr", "Andrzej"); //pierwszy par. w () podaje od ktorego el. tabeli ma usuwac a drugi ile ma usunac
//- w nawiasie jako pier. zm. oznacza ktory el od konca



//przyklad 25
//var arr = [5, 8, 1, 2, 1, 33, 23, 18, 4],
//    arr2 = ["anita", "Tomek", "Ania", "Andrzej", "Mateusz", "Kasia"];

//console.log(arr);

//arr.sort(function(a, b) {

//    return a - b;

    // if(a < b) {
    //     return -1;
    // } else if(a > b) {
    //     return 1;
    // } else {
    //     return 0;
    // }

//});

//console.log(arr);

//console.log(arr2);

//arr2.sort(function(a, b) {

  //  console.log(a - b);

 //   if(a < b) {
 //       return -1;
 //   } else if(a > b) {
  //      return 1;
 //   } else {
 //       return 0;
//    }

//}); // segregacja tutaj a od b segreguje alfabetycznie
//DUZE LITERY sa wczesniej w alfabecie niz male



// przyklad 26
var numbers = [2, 3, 17, 32, 28, 9],
    text = "Wylosowane liczby to: ";

var arrLength = numbers.length;

// for(var i = 0; i < arrLength; i++) {

//     text += numbers[i];

//     if(i !== arrLength - 1) {
//         text += ", ";
//     }

// }

console.log(text);

var arr = [["Tomasz", "Kowalski", 23], ["Maria", "Nowak", 30], ["Jacek", "Zieliński", 38]];

for(var i = 0; i < arr.length; i++) {

    console.log("DANE");

    for(var j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }

    console.log("-------------");

}