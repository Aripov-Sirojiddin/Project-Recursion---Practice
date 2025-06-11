const mergeSort = (arr) => {
  switch (arr.length) {
    case 0:
    case 1:
      return arr;
    case 2:
      return (() => {
        const num1 = arr.shift();
        const num2 = arr.shift();
        if (num1 > num2) {
          arr.push(num2);
          arr.push(num1);
        } else {
          arr.push(num1);
          arr.push(num2);
        }
        return arr;
      })();
    default:
      return (() => {
        const firstHalf = mergeSort(arr.slice(0, Math.round(arr.length / 2)));
        const secondHalf = mergeSort(
          arr.slice(Math.round(arr.length / 2), arr.length)
        );

        const res = [];

        let num1 = firstHalf.shift();
        let num2 = secondHalf.shift();
        let lastNum = 0;

        while (firstHalf.length > 0 || secondHalf.length > 0) {
          if (num1 > num2) {
            res.push(num2);
            num2 = secondHalf.shift();
            lastNum = num2;
          } else {
            res.push(num1);
            num1 = firstHalf.shift();
            lastNum = num1;
          }
        }
        res.push(lastNum);
        return res;
      })();
  }
};


const len = 1000;
const arr = Array.from({ length:  len}, (_, i) => len - i);
console.log(arr);

console.log(mergeSort(arr));
