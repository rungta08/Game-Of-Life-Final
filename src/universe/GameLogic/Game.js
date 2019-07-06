const createGeneration = (generation, aliveRules) => {
    let newGeneration = [];
    for (let index = 0; index < generation.length; index++) {
        let neighbour = findNeighbour(generation, index);
        if (aliveRules.includes(neighbour)) {
            newGeneration.push(1);
        } else {
            newGeneration.push(0);
        }
    }
    return newGeneration;
};

const findNeighbour = (generation, index) => {
    let leftNeighbour = generation[(index-1%generation.length+generation.length)%generation.length];
    let rightNeighbour = generation[(index+1)%generation.length];

    return leftNeighbour.toString() + generation[index].toString() + rightNeighbour.toString();

};

const Game = (aliveCells, numberOfGenerations, aliveRules) => {
    let generations = [createGeneration(aliveCells, aliveRules)];

    for (let generation = 0; generation < numberOfGenerations - 1; generation++) {
        generations.push(createGeneration(generations[generations.length - 1], aliveRules));
    }

    return generations;
};

export default Game;
