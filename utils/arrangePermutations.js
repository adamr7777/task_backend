
const arrangePermutations = (wordsString)=> {
    
    const wordsArray = wordsString.split('\n')
    .filter((item)=> item !== '');

    const arrangedPermutationsArray = wordsArray.map((word)=> {
        const permutationsArray = wordsArray.map((potentialPermutation, index)=> {
            const wordChars = word.split('').sort().join();
            const potentialPermutationChars = potentialPermutation.split('').sort().join();
        
            if(wordChars !== potentialPermutationChars) return;

            wordsArray.splice(index, 1);
            
            return potentialPermutation;
        });
        if(permutationsArray.length < 1) return /*revise */


        return word + ' ' + permutationsArray.join(' ');
    });

    return arrangedPermutationsArray.join('\n');
};


module.exports = arrangePermutations;