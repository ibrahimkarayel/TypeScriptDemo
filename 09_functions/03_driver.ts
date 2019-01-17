interface DCallback {
    (dName: string): void
}
class DbLoader {

    loadDriverName(callback: DCallback) {
        callback("Mongo");
    }
}

class DbController {
    private _dName: string;
    constructor(private dbLoader: DbLoader) {
    }

    get dName(): string {
        return this._dName;
    }

    loadDriver() {
        let _this= this;
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

