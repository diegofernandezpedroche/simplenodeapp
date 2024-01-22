cons assert = require('assert');

describe('Basic Test', function () {
    it('return number of charachters', function () {
        assert.equal("Welcome".length, 7);
    });
    
    it('return first charachter', function () {
        assert.equal("Welcome".charAt(0), 'W');
    });
});