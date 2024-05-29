my_levenshtein = ( string1 , string2) => {
    if(string1.length !== string2.length){
        return -1;
    } 

    let difference = 0

    for(let i = 0 ; i < string1.length ; i++){
        if(string1[i] !== string2[i]){
            difference ++
        }
    }

    return difference
}
// console.log(my_levenshtein("David" , "Davis"));