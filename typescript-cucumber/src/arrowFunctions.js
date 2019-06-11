var ArrowFunctions = /** @class */ (function () {
    function ArrowFunctions() {
        this.sum = function (x, y) {
            return x + y;
        };
        this.print = function () {
            console.log("Print for anonymous function");
        };
        this.addSum = function (x, y) {
            return x + y;
        };
    }
    return ArrowFunctions;
}());
var af = new ArrowFunctions();
var z = af.sum(10, 20);
var a = af.addSum(15, 25);
af.print();
console.log(z);
console.log(a);
