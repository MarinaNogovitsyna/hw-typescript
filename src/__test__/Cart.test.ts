import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Boock from '../domain/Boock';
import MusicAlbum from '../domain/MusicAlbum';
import Phone from '../domain/Phone';

describe('testing Cart', () => {
    let cart;
    const movie = new Movie(11, 'Мстители', 120, 2012, 'США', 'Слоган', ['комедия', 'фантастика'], '130 мин.', true);
    const book = new Boock(22, 'Война и мир', 'Лев Толстой', 300, 900, true);
    const music = new MusicAlbum(30, 'Альбом', 'Автор', 200, true);
    const phone = new Phone(4, 'Айфон', 50000, false, 256);

    beforeEach(() => {
        cart = new Cart();
    })
    it('new card should be empty', () => { 
        expect(cart.items.length).toBe(0);
    });

    it('should add unique element once', () => {
        cart.add(movie);
        cart.add(movie);
        expect(cart.items.length).toBe(1);
    })

    it('should add non-unique element twice', () => {
        cart.add(phone);
        cart.add(phone);
        expect(cart.items.length).toBe(2);
    })

    it('shoul get price without discount', () => {
        cart.add(movie);
        cart.add(book);
        cart.add(music);

        const result = cart.getPriceWithoutDiscount();
        expect(result).toBe(620);
    })

    it('should get price with discount', () => {
        cart.add(movie);
        cart.add(book);
        cart.add(music);

        const result = cart.getPriceWithDiscount(0.1);
        expect(result).toBe(558);
    })

    it('should remove', () => {
        cart.add(movie);
        cart.add(book);
        cart.add(music);
        cart.removeElement(11);
        expect(cart.items.length).toBe(2);
    })

    it('should reduce non-unique elements', () => {
        cart.add(phone);
        cart.add(phone);
        cart.reduceNonUniqueElements(4);

        expect(cart.items.length).toBe(1);
    })
})



