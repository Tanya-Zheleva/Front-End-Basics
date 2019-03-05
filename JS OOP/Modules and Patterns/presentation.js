class Presentation {
    constructor(title, homework) {
        this._title = title;
        this._homework = homework;
    }

    get title() {
        return this._title;
    }

    set title(title) {
        if (!/^(\w\s?){1,}$/g.test(title)) {
            throw 'Invlid course title';
        }

        this._title = title;
    }

    get homework() {
        return this._homework;
    }
}

module.exports = Presentation;