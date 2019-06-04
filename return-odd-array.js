function returnOddArray(){
    newArray = [];
    for (var i = 0; i < 256; i++) {
    if (i % 2 == 1){
    newArray.push(i);
    }
    }
    console.log(newArray);
    return newArray;
    }
    returnOddArray();

