/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
    let sortedArr = []
    for (let i = 0; i < arr.length; i++) {
        sortedArr.push(arr[i])
    }
    sortedArr.sort((a, b) => fn(a) - fn(b))
    return sortedArr
};