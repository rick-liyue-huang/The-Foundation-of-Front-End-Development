
function getMin(arr) {
        // first define a predefined min element, this min element is an object.
        var min = {};
        // provide two properties of value and index.
        min.minIndex = 0;
        min.value = arr[min.minIndex];

//  at last, loop through the array, define if here has another element is less than predefined element, 
// if it has, update the min element, and return it.
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] < min.value) {
                min.value = arr[i];//新的最小值
                min.minIndex = i;//新的最小值的索引
            }
        }
        return min;
    }
