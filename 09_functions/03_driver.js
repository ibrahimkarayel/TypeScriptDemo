class DbLoader {
    loadDriverName(callback) {
        callback("Mongo");
    }
}
class DbController {
    constructor(dbLoader) {
        this.dbLoader = dbLoader;
    }
    get dName() {
        return this._dName;
    }
    loadDriver() {
        let _this = this;
        this.dbLoader.loadDriverName(function (loadedName) {
            _this._dName = loadedName;
        });
    }
}
function playWithDriver() {
    let ac = new DbController(new DbLoader());
    ac.loadDriver();
    console.log(ac.dName);
}
//# sourceMappingURL=03_driver.js.map