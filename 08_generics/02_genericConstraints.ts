interface HaveId {
    id: number;
}

interface MongoRepository<T> {
    findById(id: number): T;
}

class GenericMongoRepository<T  extends HaveId> implements MongoRepository<T> {
    private _items = new Array<T>();

    findById(id: number): T {
        return this._items.filter(item => item.id === id)[0];
    }

}

class MongoUser {
    constructor(private readonly id: number, private name: string) {
    }
}