import { assert } from 'chai'
let items = [];

describe('Array Assert Methods', function () {

    describe('Built in methods', function () {
        beforeEach(function () {
            items.push('John');
            items.push('Jane');
        });

        afterEach(function () {
            items = [];
        });

        it('should return number of array items', function () {
            assert.lengthOf(items, 2);
        });

        it('should add a new value', function () {
            items.push('Joe');
            assert.lengthOf(items, 3);
        });

        it('should return the first item', function () {
            assert.equal(items.shift(), 'John');
        });

        it('should return the last item', function () {
            assert.equal(items.pop(), 'Jane');
        });

        it('should find a value in the array', function () {
            assert.isAbove(items.indexOf('John'), -1);
        });

        it('should not find a value in the array', function () {
            assert.isBelow(items.indexOf('Fake'), 0);
        });

        it('should map to new values', function () {
            var mappedItems = items.map(function (val) {
                return val + ' Doe';
            });

            mappedItems.forEach(function (val) {
                assert.isAbove(val.indexOf(' Doe'), -1);
            });
        });

        it('should filter to one value', function () {
            var filteredItems = items.filter(function (val) {
                return val === 'Jane';
            });

            assert.equal(filteredItems[0], 'Jane');
        });

        it('should reduce to one string', function () {
            var reduced = items.reduce(function (allNames, name) {
                return allNames + ', ' + name;
            });

            assert.equal(reduced, 'John, Jane');
        });
    });
});
