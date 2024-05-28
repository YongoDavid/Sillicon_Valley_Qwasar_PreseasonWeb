my_array_uniq = (arr) => {
    const newArrey = new Set(arr)
    const result = Array.from(newArrey)
    return result 
} 