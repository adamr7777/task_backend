function getPermutations(input) {
    let permutations = [''];
    
    // Iterate over each character in the input string
    for (let char of input) {
        let newPermutations = [];
        // Iterate over existing permutations and insert current character at every position
        for (let permutation of permutations) {
            for (let i = 0; i <= permutation.length; i++) {
                let newPermutation = permutation.slice(0, i) + char + permutation.slice(i);
                newPermutations.push(newPermutation);
            }
        }
        permutations = newPermutations;
    }
    
    return permutations;
};


let outputString = '';

const wordsArray = req.body.text.split('\n')
    .filter((item)=> item !== '');

    wordsArray.forEach((word=> {

        let stringWithPermutaions = '';

        const permutationsArray = getPermutations(word);

        const wordPermutationArray = permutationsArray.filter((permutation)=> permutation === word);
        console.log(wordPermutationArray);


        wordPermutationArray.forEach((wordPermutation)=> {
            stringWithPermutaions = stringWithPermutaions + word + ' ' + wordPermutation;
        });

        outputString = outputString + ' ' + stringWithPermutaions; 
    }));

    // console.log(outputString);

// console.log(getPermutations(wordsArray[0]));