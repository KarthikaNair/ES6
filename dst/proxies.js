'use strict';

var target = { name: 'somename',
    surname: 'XYZ' };

var handler = {
    get: function get(target, key) {

        return "Hidden";
        // return target[key]
    },
    set: function set(target, key, value) {

        if (value == 'Valid') {

            target[key] = value;
        } else {
            target[key] = "Controlled";
        }
    }
};
var proxy = new Proxy(target, handler);
console.log(proxy);
proxy.name = 'newname';
//wont set because name is not Valid. Therefore name set to controlled
console.log(target.name);
//proxy get always returns hidden
console.log(proxy.name);
//will set because name is Valid. 
proxy.name = 'Valid';
console.log(target.name);
console.log(proxy.name);

//revocable example

var _Proxy$revocable = Proxy.revocable(target, handler),
    proxy = _Proxy$revocable.proxy,
    revoke = _Proxy$revocable.revoke;

proxy.name = "Newname";
revoke();
//this throws
//proxy.name="Newname"