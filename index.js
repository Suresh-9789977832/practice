//1. Convert the string to integer
// let a = ['10', '20', "30", "40", "50"]
// for (let i = 0; i < a.length; i++){
//     let data = parseInt(a[i])
//      let data = +(a[i])
//     let data = Number(a[i])
//     console.log(typeof(data))
// }

// 2. without using length how to find length
// var myarray = [11, 22, 33, 44, 55]
// count=0
// for (let i = 0; i < myarray.length; i++){
//     count++
// }
// console.log(count)

// 3.Foods variable holds the names of your top 10 favorite foods, starting with the best food. How can you find your fifth favorite food?
// let foods = ["idly", "poori", 'Biriyani', "sambar", "panipoori", "pongal", "coffee", "mango", 'orange',"apple"]
// console.log(foods[4])
// console.log(foods.length)

// 4.Starting from the existing friends variable below, change the element that is currently “Mari” to “Munnabai”.
// let friends = [
//     "Mari",
//     "MaryJane",
//     "CaptianAmerica",
//     "Munnabai",
//     "Jeff",
//     "AAK chandran"
// ];
// function dataHandling(input) {
//     for (let i = 0; i < input.length; i++){
//         if (input[i] === 'Mari') {
//             input[i]="Munnabai"
//         }
//         console.log(friends[i])
//     }
// }
// dataHandling(friends)

// 5.Starting from the friends variable below, Loop and Print the names till you meet CaptianAmerica.
// let friends = [
//         "Mari",
//         "MaryJane",
//         "CaptianAmerica",
//         "Munnabai",
//         "Jeff",
//         "AAK chandran"
//     ];
    
//     function dataHandling(input){
//     for (var i = 0; i < input.length; i++) {
//         if (input[i] == 'CaptianAmerica')
//             break
//         console.log(input[i])
//     }
//     }
//     dataHandling(friends)

// 6.Find the person is ur friend or not.
// const friends = [
//     "Mari",
//      "MaryJane",
//      "CaptianAmerica",
//      "Munnabai",
//      "Jeff",
//      "AAK chandran"
// ];
// function dataHandling(input, name){
// for (var i = 0; i < input.length; i++) {
//     if (input[i] === name) {
//             return true
//         }
//     }
//     return false
// }
// let found = dataHandling(friends,"Jeff");
// console.log(found);


// 6.We have two lists of friends below. Use array methods to combine them into one alphabetically-sorted list.
// var friends1 = [
// "Mari",
// "MaryJane",
// "CaptianAmerica",
// "Munnabai",
// "Jeff",
// "AAK chandran"
// ];
// var friends2 = [
// "Gabbar",
// "Rajinikanth",
// "Mass",
// "Spiderman",
// "Jeff",
// "ET"
// ];
// function dataHandling(input1,input2) {
//     let data = [...friends1, ...friends2]
//     let sort= data.sort()
//     console.log(sort)
// }
// dataHandling(friends1,friends2);

// 7.Find the average in the array below.
// Make sure you add only the numbers and do avg.
// const friendsInfo = [6, 12, 'Mari', 1, true, 'Munnabai', '200', 'CaptianAmerica', 8, 10];
// function dataHandling(info) {
//     const data = info.filter((value) => typeof (value) === 'number')

//     const add = data.reduce((acc, curr) => acc + curr)
//     const finaldata = add / data.length;
//     console.log(finaldata)
// }

// dataHandling(friendsInfo)

// 8.

// var input = [
//     ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//     ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//     ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//     ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
//   ];
  
//   function dataHandling(input) {
//     for (var i = 0; i < input.length; i++) {
//       console.log("Nomor ID:", input[i][0]);
//       console.log("Nama Lengkap:", input[i][1]);
//       console.log("TTL:", input[i][2] + ", " + input[i][3]);
//       console.log("Hobi:", input[i][4]);
//       console.log(""); // Add an empty line for better readability
//     }
//   }
  
//   dataHandling(input);
// 9.How would you represent the following data using a combination of object literals and arrays? (You can describe a strategy without typing or writing out the whole thing.)

// let fname=10.5;
// fname = "Guvi";
// lname = "geek"
// let name = fname + lname;
// alert( `hello ${name}` );

  
// let admin=9, fname=10.5;
// fname = "Guvi";
// lname = "geek"
// admin = fname+lname;
// alert(admin); // "Guvi geek"

// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(Number(a) + Number(b));


