const OFFSET = 1;
const START = 0;
const ALIVE = 1;
const DEAD = 0;

const createGeneration = (generation, aliveRules) => {
    let newGeneration = [];
    for (let index = START; index < generation.length; index++) {
        let neighbour = findNeighbour(generation, index);
        if (aliveRules.includes(neighbour)) {
            newGeneration.push(ALIVE);
        } else {
            newGeneration.push(DEAD);
        }
    }
    return newGeneration;
};

const findNeighbour = (generation, index) => {
    let leftNeighbour = generation[(index-OFFSET%generation.length+generation.length)%generation.length];
    let rightNeighbour = generation[(index+OFFSET)%generation.length];

    return leftNeighbour.toString() + generation[index].toString() + rightNeighbour.toString();

};

const Game = (aliveCells, numberOfGenerations, aliveRules) => {
    let generations = [createGeneration(aliveCells, aliveRules)];

    for (let generation = START; generation < numberOfGenerations - OFFSET; generation++) {
        generations.push(createGeneration(generations[generations.length - OFFSET], aliveRules));
    }

    return generations;
};

export default Game;
