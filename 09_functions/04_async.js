var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function printDelayed(items) {
    return __awaiter(this, void 0, void 0, function* () {
        for (const item of items) {
            yield delay(500);
            console.log(item);
        }
    });
}
function delay(ms) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(resolve => {
            setTimeout(resolve, ms);
        });
    });
}
function playWithAsync() {
    printDelayed(['This', 'is', 'async', 'task', 'work']).then(() => {
        console.log();
        console.log('All Printed !');
    });
}
//# sourceMappingURL=04_async.js.map