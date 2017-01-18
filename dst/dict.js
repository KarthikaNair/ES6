'use strict';

fruits = [{ id: 100, name: 'strawberry' }, { id: 101, name: 'grapefruit' }, { id: 102, name: 'plum' }];

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = fruits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var fruit = _step.value;

    var message = 'ID: ' + fruit.id + ' Name: ' + fruit.name;

    console.log(message);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

console.log('List total: ' + fruits.length);