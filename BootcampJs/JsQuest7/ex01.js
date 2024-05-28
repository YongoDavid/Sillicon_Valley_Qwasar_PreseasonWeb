my_count_on_it = (arr) => {
    let result = []
    for(let i = 0 ; i < arr.length ; i++){
        result.push(arr[i].length);
    }
    return result;
}