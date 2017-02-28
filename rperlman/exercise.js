var exercise = {};

/* INSTRUCTIONS

Boston City Data - Start of our Data Science journey
In your code do not use any "for loops" - use Array Callback style

*/

/*
    first create an array of total earnings with overtime
    define function that obtains maximum numeric value from array
    use callback function to find maximum earnings
*/
var getEarnings = function(row){
    var earningsWOvertime = Number(row[18]);
    return earningsWOvertime;
};

var getBaseSalary = function(row){
    var baseSalary = Number(row[11]);
    return baseSalary;
};

var findMax = function(numArray){
    var maximum = Math.max.apply(null,numArray);
    return maximum;
};

exercise.maxEarnings = function() {
    var people = exercise.data.data;
    var earnings = people.map(getEarnings);
    //console.log(earnings);
    var currentMax = findMax(earnings);
    //var currentMax = earnings.reduce(findMax, 0);
    return currentMax;

};


var abovetarget = function(target, item){
    return item > 150000;
};

exercise.earningsAbove = function(target) {

    /* EX 2

    return the number of people with salaries above "target"
    use filter to create an array of salaries above "target"
    then return the length of the array

    */

    //var num_salaries_above = 0; // initialize number of salaries above target to zero
    var people = exercise.data.data; // get handle on data
    var earnings = people.map(getEarnings);
    var arraySalariesAbove = earnings.filter(abovetarget);
    console.log(arraySalariesAbove);
    var numSalariesAbove = arraySalariesAbove.length;

    return numSalariesAbove;
};

//expecting 1198

exercise.totalBasePayroll = function() {

    /* EX 3

    return the total payroll for Boston City as an integer
    use Map and Reduce to do this

    */
    var people = exercise.data.data;
    var payroll = people.map(getBaseSalary);
    var totalPayroll = payroll.reduce(function(previous, current){
        return previous + current;
    }, 0);

    return Math.floor(totalPayroll);

};

exercise.totalEarningsWithOvertime = function() {

    /* EX 4
    return the total Earnings with Overtime as an integer
    */

    var people = exercise.data.data;
    var earnings = people.map(getEarnings);
    var totalEarnings = earnings.reduce(function(previous, current){
        return previous + current;
    }, 0);

    return Math.floor(totalEarnings);
};

var getZipcodes = function(row){
    var zipcodes = row[19];
    return zipcodes;
};

var onlyUnique = function(value, index, self){
    return self.indexOf(value)=== index;
};


exercise.numberUniqueZipCodes = function() {

    /* EX 5
    return the unique number zipcodes as an integer
    */

    var people = exercise.data.data;
    var zipcodes = people.map(getZipcodes);
    var zipcodes = zipcodes.map(Number);
    var numUniqueZips= zipcodes.reduce(function(values, v) {
        if (!values.set[v]) {
            values.set[v] = 1;
            values.count++;
        };
        return values;
    }, { set: {}, count: 0 }).count;

    return numUniqueZips;
};