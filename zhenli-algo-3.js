function printAverage(x){
    sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum += x[i];
    }
    var avg = sum / x.length;
    return avg;
}
y = printAverage([1,2,3]);
console.log(y); 

y = printAverage([2,5,8]);
console.log(y); 




function returnOddArray(){
    var arr = [];
    var x = 1;
    while (x < 256) {
        arr.push(x);
        x++
    }
    return arr;
 }
 y = returnOddArray();
 console.log(y); 




function squareValue(x){
    for (var i = 0; i < x.length; i++) {
        x[i] *= x[i];
    }
    return x;
}
y = squareValue([1,2,3]);
console.log(y); 

y = squareValue([2,5,8]);
console.log(y); 