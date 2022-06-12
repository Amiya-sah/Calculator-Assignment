function strCalc() {
}

strCalc.prototype.add = function(str) {
    this.strNum =str
    if(this.strNum.includes("-")) {
        let tempS = this.strNum.replace(/(\r\n|\n|\r)/gm, ",")
        let negVal = ""
        for (var i = 0; i < tempS.length; i++) {
            if(tempS.charAt(i) == "-") {
                    negVal += tempS.slice(i, i+2)
            }
        } 
        throw new Error(`negatives numbers not allowed, passed ${negVal}...`);
    }
    let strNum1 = this.strNum.replace(/(\r\n|\n|\r)/gm, ",")
    const myArray = strNum1.split(",");
    let Sum = 0;
    for(let i=0; i< myArray.length; i++) {
        Sum += Number(myArray[i])
    }
    this.value = Sum
    console.log(Sum)
}

module.exports = strCalc