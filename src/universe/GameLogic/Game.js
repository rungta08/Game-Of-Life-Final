const createGeneration = (generation, aliveRules) => {
    let newGeneration = [];
    for(let index = 0;index < generation.length;index++){
        let leftneighbour = index-1 === -1? generation[generation.length-1] : generation[index-1];
        let rightneighbour = index+1 === generation.length? generation[0] : generation[index+1];

        let neighbour = leftneighbour.toString()+generation[index].toString()+rightneighbour.toString();

        if(aliveRules.includes(neighbour)){
            newGeneration.push(1);
        }
        else{
            newGeneration.push(0);
        }
    }

    return newGeneration;
}

const Game = (aliveCells, numberOfGenerations, aliveRules) => {
    let generations = [createGeneration(aliveCells,aliveRules)];

    for (let generation = 0;generation < numberOfGenerations-1;generation++){
        generations.push(createGeneration(generations[generations.length-1],aliveRules));
    }

    return generations;
};

export default Game;
