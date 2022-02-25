var employee = {
    id: 1,
    greet: function () {
        var _this = this;
        var self = this;
        setTimeout(function () { console.log(self.id, "inside simple function"); }, 3000);
        setTimeout(function () { console.log(_this.id, "in side ()={} function"); }, 3000);
    }
};
employee.greet(); //1-- after 3s
