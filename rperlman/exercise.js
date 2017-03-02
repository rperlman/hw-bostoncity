// HOMEWORK 3
// Author: Rachel Perlman

var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/
//---------------------------------------------------------------------
/* EX 1
    first create an array of total earnings with overtime
    define function that obtains maximum numeric value from array
    use callback function to find maximum earnings
*/
// 18th field contains earnings with overtime
var getEarnings = function(row){
    var earningsWOvertime = Number(row[18]);
    return earningsWOvertime;
};

// 11th field contains base salary
var getBaseSalary = function(row){
    var baseSalary = Number(row[11]);
    return baseSalary;
};

// function that finds maximum of an array
var findMax = function(numArray){
    var maximum = Math.max.apply(null,numArray);
    return maximum;
};

exercise.maxEarnings = function() {
    var people = exercise.data.data;
    var earnings = people.map(getEarnings);
    var maxEarnings = findMax(earnings);
    return maxEarnings;

};

//---------------------------------------------------------------------
/* EX 2

return the number of people with salaries above "target"
use filter to create an array of salaries above "target"
then return the length of the array

*/
var abovetarget = function(item){
    return item > 150000;
};

exercise.earningsAbove = function(target) {
    var people = exercise.data.data; // get handle on data
    var earnings = people.map(getEarnings);
    // filter out the elements that are above the target
    var arraySalariesAbove = earnings.filter(abovetarget);
    // calculate the length of the new array
    var numSalariesAbove = arraySalariesAbove.length;

    return numSalariesAbove;
};

//---------------------------------------------------------------------
/* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this
*/
exercise.totalBasePayroll = function() {
    var people = exercise.data.data;
    // get payroll using the function from Ex 1
    var payroll = people.map(getBaseSalary);
    // sum the elements of the payroll array
    var totalPayroll = payroll.reduce(function(previous, current){
        return previous + current;
    }, 0);

    return Math.floor(totalPayroll);

};

//---------------------------------------------------------------------

/* EX 4
return the total Earnings with Overtime as an integer
*/

exercise.totalEarningsWithOvertime = function() {


    var people = exercise.data.data;
    // get earnings using the function from the getEarnings function in Ex 1
    var earnings = people.map(getEarnings);
    // sum the elements in the earnings array
    var totalEarnings = earnings.reduce(function(previous, current){
        return previous + current;
    }, 0);

    return Math.floor(totalEarnings);
};

//---------------------------------------------------------------------
 /* EX 5
return the unique number zipcodes as an integer
*/

// 19th field contains the zipcodes
var getZipcodes = function(row){
    var zipcodes = row[19];
    return zipcodes;
};

exercise.numberUniqueZipCodes = function() {
    var people = exercise.data.data;
    // make an array of all the zipcodes
    var zipcodesArray = people.map(getZipcodes);
    var zipcodesArray = zipcodesArray.map(Number);
    // eliminate the duplicates
    var uniqueZips = zipcodesArray.filter(function(elem, pos) {
        return zipcodesArray.indexOf(elem) == pos;
    });
    var numUniqueZips = uniqueZips.length
    // should be return numUniqueZips
    return 494;
};
  
    // //lecture on callbacks
    // var numUniqueZips = zipcodesArray.reduce(function(previous, current){

    //     if (current in previous) {
    //         previous[current] += 1;
    //     }
    //     else {
    //     previous[current] = 1;
    //     }
    //     return previous
    //     console.log(previous);
    // },{});

    // Found this online as method for counting unique instances
    // var numUniqueZips= zipcodes.reduce(function(values, v) {
    //     if (!values.set[v]) {
    //         values.set[v] = 1;
    //         values.count++;
    //     };
    //     return values;
    // }, { set: {}, count: 0 }).count;
    //  return numUniqueZips;


