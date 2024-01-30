"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart_1 = require("../service/Cart");
var Movie_1 = require("../domain/Movie");
var Boock_1 = require("../domain/Boock");
var MusicAlbum_1 = require("../domain/MusicAlbum");
var Phone_1 = require("../domain/Phone");
describe('testing Cart', function () {
    var cart;
    var movie = new Movie_1.default(11, 'Мстители', 120, 2012, 'США', 'Слоган', ['комедия', 'фантастика'], '130 мин.', true);
    var book = new Boock_1.default(22, 'Война и мир', 'Лев Толстой', 300, 900, true);
    var music = new MusicAlbum_1.default(30, 'Альбом', 'Автор', 200, true);
    var phone = new Phone_1.default(4, 'Айфон', 50000, false, 256);
    beforeEach(function () {
        cart = new Cart_1.default();
    });
    it('new card should be empty', function () {
        expect(cart.items.length).toBe(0);
    });
    it('should add unique element once', function () {
        cart.add(movie);
        cart.add(movie);
        expect(cart.items.length).toBe(1);
    });
    it('should add non-unique element twice', function () {
        cart.add(phone);
        cart.add(phone);
        expect(cart.items.length).toBe(2);
    });
    it('shoul get price without discount', function () {
        cart.add(movie);
        cart.add(book);
        cart.add(music);
        var result = cart.getPriceWithoutDiscount();
        expect(result).toBe(620);
    });
    it('should get price with discount', function () {
        cart.add(movie);
        cart.add(book);
        cart.add(music);
        var result = cart.getPriceWithDiscount(0.1);
        expect(result).toBe(558);
    });
    it('should remove', function () {
        cart.add(movie);
        cart.add(book);
        cart.add(music);
        cart.removeElement(11);
        expect(cart.items.length).toBe(2);
    });
    it('should reduce non-unique elements', function () {
        cart.add(phone);
        cart.add(phone);
        cart.reduceNonUniqueElements(4);
        expect(cart.items.length).toBe(1);
    });
});
//# sourceMappingURL=Cart.test.js.map