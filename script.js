//Binary Search

let array = [1,3,5,7,9,11,12,21,47,55,79] ;
const binarySearch = (array, target) => {
    let startIndex = 0;
    let endIndex = array.length - 1;
    while(startIndex <= endIndex) {
      let middleIndex = Math.floor((startIndex + endIndex) / 2);
      if(target === array[middleIndex]) {
        return console.log("Target is found at " + middleIndex);
      }
      if(target > array[middleIndex]) {
        console.log(" right side ")
        startIndex = middleIndex + 1;
      }
      if(target < array[middleIndex]) {
        console.log("left side ")
        endIndex = middleIndex - 1;
      }
      else {
        console.log("Not Found")
      }
    }
    
       return "Target value not found "; 
  }
  console.log(binarySearch(array,10))  ;
    //Bubble Sort

  let inputArr = [1,5,2,6,9,3,10,7,4,8]
  let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < len; i++) {
            if (inputArr[i] > inputArr[i + 1]) {
                let tmp = inputArr[i];
                inputArr[i] = inputArr[i + 1];
                inputArr[i + 1] = tmp;
                swapped = true;
            }
        }
    } while (swapped);
    return inputArr;
};
console.log(bubbleSort(inputArr)) ;
//Merge Sort 

let arr = [3,27,9,11,343,79,26,18,65] ;
function mergeSort(arr) {
if (arr.length <= 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(
    mergeSort(left), mergeSort(right)
  );
}
function merge (left, right) {
    let res = [], leftIndex = 0, rightIndex = 0;
  
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        res.push(left[leftIndex]);
        leftIndex++; 
      } else {
        res.push(right[rightIndex]);
        rightIndex++; 
      }
    }
    return res
            .concat(left.slice(leftIndex))
            .concat(right.slice(rightIndex));
  }
  console.log (mergeSort(arr)) ;