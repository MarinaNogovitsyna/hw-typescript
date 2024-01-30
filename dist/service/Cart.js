"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Cart = /** @class */ (function () {
    function Cart() {
        this._items = [];
    }
    Cart.prototype.add = function (item) {
        if (!item.isUnique) {
            this._items.push(item);
        }
        else if (!this._items.find(function (el) { return el.id === item.id; })) {
            this._items.push(item);
        }
    };
    Object.defineProperty(Cart.prototype, "items", {
        get: function () {
            return __spreadArray([], this._items, true);
        },
        enumerable: false,
        configurable: true
    });
    Cart.prototype.getPriceWithoutDiscount = function () {
        return this._items.reduce(function (sum, current) { return sum + current.price; }, 0);
    };
    Cart.prototype.getPriceWithDiscount = function (discount) {
        return this._items.reduce(function (sum, current) { return sum + current.price; }, 0) * (1 - discount);
    };
    Cart.prototype.removeElement = function (id) {
        this._items = this._items.filter(function (el) { return el.id !== id; });
    };
    Cart.prototype.reduceNonUniqueElements = function (id) {
        var elementIndex = this._items.findIndex(function (el) { return el.id === id; });
        this._items.splice(elementIndex, 1);
    };
    return Cart;
}());
exports.default = Cart;
//# sourceMappingURL=Cart.js.map