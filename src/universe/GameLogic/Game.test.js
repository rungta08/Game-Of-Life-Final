import React from 'react';
import Game from "./Game";

describe('Game', () => {
    it('should give generation', () => {
        const game = Game([1,0,1,0],1,[]);

        expect(game).toEqual([[1,0,1,0]]);
    });
});
