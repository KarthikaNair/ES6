"use strict";

var _marked = [fibonacci].map(regeneratorRuntime.mark);

function fibonacci() {
    var a, b, _ref;

    return regeneratorRuntime.wrap(function fibonacci$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    a = 0;
                    b = 1;

                case 2:
                    if (!true) {
                        _context.next = 10;
                        break;
                    }

                    _context.next = 5;
                    return a;

                case 5:
                    _ref = [b, a + b];
                    a = _ref[0];
                    b = _ref[1];
                    _context.next = 2;
                    break;

                case 10:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var iter = fibonacci();
for (var i = 0; i < 10; i++) {
    console.log(iter.next().value);
}