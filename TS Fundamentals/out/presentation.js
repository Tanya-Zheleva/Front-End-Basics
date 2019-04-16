"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Presentation = /** @class */ (function () {
    function Presentation(title, homework) {
        this.title = title;
        this._homework = homework;
    }
    Object.defineProperty(Presentation.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            if (!/^(\w\s?){1,}$/g.test(value)) {
                throw 'Invlid presentation title';
            }
            this._title = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Presentation.prototype, "homework", {
        get: function () {
            return this._homework;
        },
        enumerable: true,
        configurable: true
    });
    return Presentation;
}());
exports.Presentation = Presentation;
//# sourceMappingURL=presentation.js.map