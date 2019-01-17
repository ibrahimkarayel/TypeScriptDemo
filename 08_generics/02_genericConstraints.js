class GenericMongoRepository {
    constructor() {
        this._items = new Array();
    }
    findById(id) {
        return this._items.filter(item => item.id === id)[0];
    }
}
class MongoUser {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
//# sourceMappingURL=02_genericConstraints.js.map