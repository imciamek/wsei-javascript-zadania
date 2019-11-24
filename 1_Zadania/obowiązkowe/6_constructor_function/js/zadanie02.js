var Calculator = function(){
    this.history =[];
};

Calculator.prototype.add = function(num1,num2) {
    const sum = num1 + num2;
    this.history.push("added " + num1 + " to " + num2 + " got " + sum);
    return sum;
}

Calculator.prototype.multiply = function(num1,num2) {
    const multiply = num1 * num2;
    this.history.push("multiplied " + num1 + " with " + num2 + " got " + multiply);
    return multiply;
}

Calculator.prototype.subtract = function(num1,num2) {
    const subtract = num1 - num2;
    this.history.push("subtracted " + num1 + " from " + num2 + " got " + subtract);
    return subtract;
}

Calculator.prototype.divide = function(num1,num2) {
    const divide = num1 / num2;
    this.history.push("divided " + num1 + " by " + num2 + " got " + divide);
    return divide;
}

Calculator.prototype.printOperations = function(){
    console.table(this.history);
}

Calculator.prototype.clearOperations = function(){
    this.history = [];
}

calculator = new Calculator();
calculator.add(2,2);
calculator.subtract(5,3);
calculator.multiply(3,5);
calculator.divide(10,2);
calculator.printOperations();
calculator.clearOperations();
calculator.printOperations();