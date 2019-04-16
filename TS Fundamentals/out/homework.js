"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Homework = /** @class */ (function () {
    function Homework(content) {
        this.content = content;
    }
    Object.defineProperty(Homework.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Homework.prototype, "id", {
        get: function () {
            return this._content.length % 7;
        },
        enumerable: true,
        configurable: true
    });
    return Homework;
}());
exports.Homework = Homework;
//# sourceMappingURL=homework.js.map