const array = [-3,-0,1,2,6,7,18,11,12,14,15];

/* O (n) */
const linearSearch = (arr, searchItem) => {
    for (let i = 0; i <= arr.length; i++) {
        if(arr[i] === searchItem) {
            return i;
        }
    }

    return null;
}
