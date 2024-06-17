// const arrangePermutations = (wordsString)=> {
    
//     const wordsArray = wordsString.split('\n')
//     .filter((item)=> item !== '');

//     const arrangedPermutationsArray = wordsArray.map((word, wIndex)=> {
//         const permutationsArray = wordsArray.map((potentialPermutation, permIndex)=> {
//             const wordChars = word.split('').sort().join();
//             const potentialPermutationChars = potentialPermutation.split('').sort().join();
            
//             if(wIndex === permIndex) return;
//             if(wordChars !== potentialPermutationChars) return;

//             wordsArray.splice(permIndex, 1);
            
//             return potentialPermutation;
//         });
//         if(permutationsArray.length < 1) return 


//         return word + ' ' + permutationsArray.join(' ');
//     });

//     return arrangedPermutationsArray.join('\n');
// };





// const arrangePermutations = (wordsString)=> {
    
//     const wordsArray = wordsString.split('\n')
//     .filter((item)=> item !== '');

//     const arrangedPermutationsArray = [];
    
//     wordsArray.forEach((word, wIndex)=> {
//         wordsArray.forEach((potentialPermutation, permIndex)=>{
//             

//         });
        
//       
//     });


   
// };
