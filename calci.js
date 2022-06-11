function strCalc() {
}

strCalc.prototype.add = function(str) {
    this.strNum =str
    const myArray = this.strNum.split(",");
    let Sum = 0;
    for(let i=0; i< myArray.length; i++) {
        Sum += Number(myArray[i])
    }
    this.value = Sum
    console.log(Sum)
}

module.exports = strCalc