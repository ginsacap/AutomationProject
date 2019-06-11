var DataTpeSmaple = /** @class */ (function () {
    function DataTpeSmaple() {
        this.x = 10;
        this.name = 'sankar';
        this.lastName = 'Ginjupalli';
        this.list = ['Sankar', 'Ginjupalli'];
        this.list1 = [1, 2, 3];
        this.tup = ['Sankar', 505];
        var my_tup = ['sankar', 5];
        console.log(my_tup[0]);
        console.log(my_tup[1]);
        console.log("Number declared is:" + this.x);
        console.log("String declared is:" + this.name + this.lastName);
        console.log("First element os Array is:" + this.list[0]);
        for (var i = 0; i < this.list1.length; i++) {
            console.log("Array elements are:" + this.list1[i]);
        }
        for (this.j in this.list) {
            console.log(this.list[this.j]);
        }
        var result = this.x > 10 ? "Greater" : "Lesser";
        console.log(result);
        console.log(typeof this.x);
        var k = 1;
        var count;
        while (k <= 10) {
            console.log(k);
            if (k % 2 == 0) {
                console.log("printing.." + k);
                break;
            }
            k++;
        }
    }
    DataTpeSmaple.prototype.addNumbers = function () {
        var nums = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            nums[_i] = arguments[_i];
        }
        var i = 0;
        var sum = 0;
        for (i = 0; i < nums.length; i++) {
            sum = sum + nums[i];
        }
        console.log(sum);
    };
    return DataTpeSmaple;
}());
var dataTypes = new DataTpeSmaple();
dataTypes.addNumbers(2, 3, 4, 5);
