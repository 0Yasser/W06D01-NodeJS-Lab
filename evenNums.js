exports.myEvenNumbers = function (max){
    let arr=""
    for (let i = 0; i <= max; i++) {
        i%2==0?arr=arr.concat(' ',i):'';
    }
    return arr;
}

