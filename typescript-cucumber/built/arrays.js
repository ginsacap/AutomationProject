var ArraySample = /** @class */ (function () {
    function ArraySample() {
    }
    ArraySample.prototype.disp = function (arrayString) {
        var i;
        console.log("array length is:" + arrayString.length);
        for (i = 0; i < arrayString.length; i++) {
            console.log("Array Element  " + i + "--> is: " + arrayString[i]);
        }
    };
    return ArraySample;
}());
var arr = new ArraySample();
arr.disp(['Sankar', "Jhani"]);
arr.disp([1, 2, 3, 4]);
