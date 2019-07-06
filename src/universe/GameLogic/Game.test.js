import React from 'react';
import Game from "./Game";

describe('Game', () => {
    it('should give generation', () => {
        const game = Game([1, 0, 1, 0], 1, []);

        expect(game).toEqual([[0, 0, 0, 0]]);
    });

    it('should give multiple generations', () => {
        const game = Game([1, 0, 1, 0], 3, []);

        expect(game.length).toEqual(3);
    });

    it('should create generation based on aliveRules', () => {
        const game = Game([1, 0, 1, 0], 1, ['101']);

        expect(game).toEqual([[0, 1, 0, 1]]);
    });
});
