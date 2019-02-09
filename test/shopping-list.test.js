const expect = chai.expect;
const assert = chai.assert;
// const listItem = expect('../js/shopping-list-item.js');
// const lList = expect('../js/shopping-list.js');

describe('Shopping List Item', () => {
    describe('Item is a class', () => {
        it('should be a function', () => {
            expect(Item).to.be.a('function');

        })
    })


    describe('should have a constructor method with passed-in arguments for name and description properties', () => {
        let candy = new Item('candy', 'lollipop');
        it('should have a name property', () => {
            expect(candy).to.have.property('name');
        })
        it('should have a description property', () => {
            expect(candy).to.have.property('description');
        })
        it('should have an isDone property', () => {
            expect(candy).to.have.property('isDone');

        })
    })

    describe('has method named check', () => {
        let candy = new Item('candy', 'lollipop');
        it('should be a function', () => {
            expect(candy.check).to.be.a("function");
        })
        it('should set isDone to true', () => {
            candy.check();
            expect(candy.isDone).to.be.true;
        })
    })

    describe('has method named uncheck', () => {
        let candy = new Item('candy', 'lollipop');
        it('should be a function', () => {
            expect(candy.uncheck).to.be.a('function');
        })
        it('should set isDone to false', () => {
            candy.uncheck();
            expect(candy.isDone).to.be.false;
        })
    })

    describe('has method named render', () => {
        let candy = new Item('candy', 'lollipop');
        console.log(candy)
        it('should be a function', () => {
            expect(candy.render).to.be.a('function');
        })
        it('should return a string', () => {
            expect(candy.render()).to.be.a('string');
        })
        it('should begin with a <li> tag', () => {
            expect(candy.render().slice(0, 3)).to.equal('<li');
        })
        it('should end with a </li> tag', () => {
            expect(candy.render().slice(-4)).to.equal('/li>')
        })
    })
})

describe('Shopping List', () => {
    describe('List is a class', () => {
        let shopping = new List();
        it('should be a function', () => {
            expect(List).to.be.a('function');
        })
        it('should have an items property', () => {
            expect(shopping).to.have.property('items');
        })
        it('should create an empty array', () => {
            expect(shopping.items).to.be.a('array');
        })
    })
    describe('has addItem method', () => {
        let shopping = new List();
        it('should be a function', () => {
            expect(shopping.addItem).to.be.a('function');
        })
        it('should add new instances of Items to the items array', () => {
            let candy = new Item('candy', 'chocolate');
            shopping.addItem(candy);
            expect(shopping.items[0]).to.deep.equal(candy);
        })
        it('should throw an error if new item is not an instance of Item', () => {
            expect(shopping.addItem.bind(shopping, 'chocolate')).to.throw();
        })
    })
    describe('has removeItem method', () => {
        let shopping = new List();
        it('should be a function', () => {
            expect(shopping.removeItem).to.be.a('function');
        })
        it('should remove a defined Item object from the items array', () => {
            let sandwich = new Item('sandwich', 'turkey');
            let candy = new Item('candy', 'chocolate');
            shopping.addItem(candy);
            shopping.addItem(sandwich);
            shopping.removeItem(sandwich);
            expect(shopping.items[1]).to.equal(undefined);
        })
        it('if an Item is not defined, should remove the last object from the items array', () => {
            let sandwich = new Item('sandwich', 'turkey');
            let candy = new Item('candy', 'chocolate');
            shopping.items.length = 0;
            shopping.addItem(sandwich);
            shopping.addItem(candy);
            shopping.removeItem();
            console.log(shopping.items)
            expect(shopping.items[1]).to.equal(undefined);

        })
        it('should throw an error if Item does not exist in the array', () => {
            let candy = new Item('candy', 'chocolate');
            shopping.addItem(candy);
            shopping.items.length = 0;
            expect(shopping.removeItem.bind(shopping, candy)).to.throw();
        })
    })
    describe('has render method', () => {
        let shopping = new List();
        it('should be a function', () => {
            expect(shopping.render).to.be.a('function');
        })
        it('should return a string', () => {
            expect(shopping.render()).to.be.a('string');
        })
        it('should start with a <ul> tag', () => {
            expect(shopping.render().slice(0, 3)).to.equal('<ul');
        })
        it('should end with a <ul> tag', () => {
            expect(shopping.render().slice(-5)).to.equal('</ul>');
        })
    })
})