var should = require('chai').should()
let items = [];

describe('Array Should Methods', function () {

    describe('Built in methods', function () {
        beforeEach(function () {
            items.push('John');
            items.push('Jane');
        });

        afterEach(function () {
            items = [];
        });

        it('should return number of array items', function () {
            items.should.have.length(2);
        });

        it('should add a new value', function () {
            items.push('Joe');
            items.should.have.length(3);
        });

        it('should return the first item', function () {
            items.shift().should.equal('John');
        });

        it('should return the last item', function () {
            items.pop().should.equal('Jane');
        });

        it('should find a value in the array', function () {
            items.indexOf('John').should.be.above(-1);
        });

        it('should not find a value in the array', function () {
            items.indexOf('Fake').should.not.be.above(-1);
        });

        it('should map to new values', function () {
            var mappedItems = items.map(function (val) {
                return val + ' Doe';
            });

            mappedItems.forEach(function (val) {
                val.indexOf(' Doe').should.be.above(-1);
            });
        });

        it('should filter to one value', function () {
            var filteredItems = items.filter(function (val) {
                return val === 'Jane';
            });

            filteredItems[0].should.equal('Jane');
        });

        it('should reduce to one string', function () {
            var reduced = items.reduce(function (allNames, name) {
                return allNames + ', ' + name;
            });

            reduced.should.equal('John, Jane');
        });
    });
});
