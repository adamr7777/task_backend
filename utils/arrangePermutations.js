


const arrangePermutations = (wordsString)=> {

    // transforms the string with potential anagrams (received from the frontend) 
    //to an array where each index represent a word

    const wordsArray = wordsString.split('\n').filter((item)=> item !== '');
    

    //checks if a certain word is an angramam of subsequent words in the list and
    // populates the permutationsMap with anagrams tied up to the specific key
    
    const permutationsMap = new Map();

    wordsArray.forEach((word)=> {
        const wordCharsSorted = word.split('').sort().join('').trim();
        
        if (permutationsMap.has(wordCharsSorted)) {
            permutationsMap.get(wordCharsSorted).push(word);
        } else {
            permutationsMap.set(wordCharsSorted, [word]);
        }
    });


    //tranfers arranged anagrams from the map to an array, where each index represents a seperate line

    const arrangedPermutationsArray = [];

    permutationsMap.forEach((permutations) => {
        arrangedPermutationsArray.push(permutations.join(' '));
    });


    // transforms the array into a string where each row of permutations 
    //is on the new line and then returns it

    return arrangedPermutationsArray.join('\n');
};




module.exports = arrangePermutations;