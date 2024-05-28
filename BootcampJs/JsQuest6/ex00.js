function my_string_index(haystack, needle) {
	for(let i = 0 ;  i < haystack.length ; i++ ) {
        if(haystack[i] === needle) {
          return i
        }
      }
  return -1;
};