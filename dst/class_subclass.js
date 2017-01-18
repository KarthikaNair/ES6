"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Car = function () {
    function Car(speed) {
        _classCallCheck(this, Car);

        this.speed = speed;
        Car.carsMade++;
    }

    _createClass(Car, [{
        key: "tell_speed",
        value: function tell_speed() {
            return this.speed;
        }
    }], [{
        key: "faster",
        value: function faster(car_one, car_two) {
            return car_one.speed > car_two.speed;
        }
    }]);

    return Car;
}();

var Benz = function (_Car) {
    _inherits(Benz, _Car);

    function Benz(speed) {
        _classCallCheck(this, Benz);

        return _possibleConstructorReturn(this, (Benz.__proto__ || Object.getPrototypeOf(Benz)).call(this, speed * 2));
    }

    _createClass(Benz, [{
        key: "zooms",
        value: function zooms() {
            this.speed = this.speed * 2;
        }
    }]);

    return Benz;
}(Car);

Car.carsMade = 0;
var Zen = new Car(20);
var B = new Benz(20);
console.log(Zen.tell_speed());
console.log(B.tell_speed());
B.zooms();
console.log(B.tell_speed());
console.log(Car.faster(B, Zen));
console.log(Car.carsMade);