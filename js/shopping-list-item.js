class Item {
    constructor(name, description) {
        this.name = name;
        this.description = description;
        this.isDone = false;

    }
    check() {
        this.isDone = true;
    }
    uncheck() {
        this.isDone = false;
    }
    render() {
        let box;
        let liStart = '<li>';
        let liEnd = '</li>';
        let sStart = '<span>';
        let sEnd = '</span>';

        let lItem = sStart + this.name + sEnd;
        lItem += sStart + this.description + sEnd;

        if (this.isDone === 'true') {
            liStart = '<li class="completed_true">';
        } else if (this.isDone === 'false') {
            liStart = '<li class="completed_false">';
        }
        return liStart + lItem + liEnd;

    }

}