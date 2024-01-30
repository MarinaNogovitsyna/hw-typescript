import Buyable from "../domain/Buyble";

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        if(!item.isUnique) {
            this._items.push(item);
        } else if (!this._items.find(el => el.id === item.id)) {
            this._items.push(item);
        }
    }

    get items():Buyable[] {
        return [...this._items]
    }

    getPriceWithoutDiscount(): number {
        return this._items.reduce((sum, current) => sum + current.price, 0)
    }

    getPriceWithDiscount(discount: number): number {
        return this._items.reduce((sum, current) => sum + current.price, 0) * (1 - discount);
    }

    removeElement(id: number): void {
        this._items = this._items.filter(el => el.id !== id);
    }

    reduceNonUniqueElements(id: number): void {
        const elementIndex = this._items.findIndex(el => el.id === id);
        this._items.splice(elementIndex, 1);
    }
}