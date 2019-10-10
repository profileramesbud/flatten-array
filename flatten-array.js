// Write some code, that will flatten an array of arbitrarily nested arrays of integers into a flat array of integers. e.g. [[1,2,[3]],4] -> [1,2,3,4].

/* store all the array elements */
let flattenedArray = [];

/**
 * Returns an Array of elements
 * @param {Array} - array of elements(s)
 */
function flattenArray(unFlatArray) {
  /* iterate through all the element(s) in the unFlatArray */
  unFlatArray.forEach(arr => {
    /* check if the any of the element is an array */
    if (Array.isArray(arr)) {
      /* Call the unflattened array recursively */
      flattenArray(arr);
    } else {
      /* push the single element in to the final array */
      flattenedArray.push(arr);
    }
  });
  /* return flattenedArray that consist of individual array elements */
  return flattenedArray;
}
// flattenArray([[1, 2, [3], [5, [1, 2], 6]], 4]);
console.log("Flattened Array", flattenArray([[1, 2, [3], [5, [1, 2], 6]], 4]));

