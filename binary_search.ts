const sortList = [-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

/* O(log n) */
const binarySearch = (array, searchItem) => {
    let left = 0;
    let right = array.length - 1;

    while(left <= right) {
        const middle = Math.floor((left + right) / 2);

        if(array[middle] === searchItem) {
            return middle;
        }

        if(searchItem < array[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
    }

    return null;
}
