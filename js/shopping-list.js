class List {
    constructor() {
        this.items = [];
    }
    addItem(obj) {
        if (obj instanceof Item) {
            this.items.push(obj);
        } else {
            throw error;
        }
    }
    removeItem(obj) {
        if (obj instanceof Item) {
            if (this.items.indexOf(obj) >= 0) {
                this.items.splice(this.items.indexOf(obj), 1);
            } else {
                throw error;
            }
        }
        if (obj === undefined) {
            this.items.pop();
        }
    }

    render() {
        let start = '<ul>';
        let end = '</ul>';
        let sItem = '';

        this.items.forEach(i => {
            sItem.concat(i.render(i));
        });
        console.log(start + sItem + end)
        return start + sItem + end;

    }
}