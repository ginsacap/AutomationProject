"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var cucumber_1 = require("cucumber");
cucumber_1.Given("a calculator", function () {
    this.calculator = {
        divide: function (n1, n2) {
            throw new Error("Not implemented");
        }
    };
});
cucumber_1.When("I divide {int} by {int}", function (n1, n2) {
    this.actual = this.Calculator.divide(n1, n2);
    throw new Error("Not implemented");
});
cucumber_1.Then("the result is {int}", function (expected) {
    chai_1.expect(this.actual).to.be.equal(expected);
    throw new Error("Not implemented");
});
