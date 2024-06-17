


const arrangePermutations = (wordsString)=> {
    const wordsArray = wordsString.split('\n').filter((item)=> item !== '');

    const permutationsMap = new Map();

    wordsArray.forEach((word)=> {
        const wordCharsSorted = word.split('').sort().join('');
        
        if (permutationsMap.has(wordCharsSorted)) {
            permutationsMap.get(wordCharsSorted).push(word);
        } else {
            permutationsMap.set(wordCharsSorted, [word]);
        }
    });

    const arrangedPermutationsArray = [];

    permutationsMap.forEach((permutations) => {
        arrangedPermutationsArray.push(permutations.join(' '));
    });

    return arrangedPermutationsArray.join('\n');
};




module.exports = arrangePermutations;