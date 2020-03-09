'use strict';

const { deepStrictEqual } = require('assert');

const among = require('.');

const pangram = 'The [quick] [brown] {{fox}} $jumps$ over the [lazy] {{dog}}';

describe('#among', () => {
    it('should find every occurance of a string wrapped in curly brackets', () => {
        const find = among('{{', '}}');

        deepStrictEqual(['fox', 'dog'], find(pangram));
    });

    it('should find every occurance of a string wrapped in brackets', () => {
        const find = among('[', ']');

        deepStrictEqual(['quick', 'brown', 'lazy'], find(pangram));
    });

    it('should find every occurance of a string wrapped in dollar signs', () => {
        const find = among('$', '$');

        deepStrictEqual(['jumps'], find(pangram));
    });

    it('should find and preserved start/end tags for every occurance of a string wrapped in curly brackets', () => {
        const find = among('{{', '}}', true);

        deepStrictEqual(['{{fox}}', '{{dog}}'], find(pangram));
    });

    it('should return an empty array if nothing is found', () => {
        const find = among('[{', '}]');

        deepStrictEqual([], find(pangram));
    });
});
