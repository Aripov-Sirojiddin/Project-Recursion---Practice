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

        let num1Ptr = 0;
        let num2Ptr = 0;

        while (firstHalf.length >= num1Ptr && secondHalf.length >= num2Ptr) {
          let num1 = firstHalf[num1Ptr];
          let num2 = secondHalf[num2Ptr];

          if (num1 > num2) {
            num2 === undefined ? undefined : res.push(num2);
            num2Ptr++;
          } else {
            num1 === undefined ? undefined : res.push(num1);
            num1Ptr++;
          }
        }
        return res;
      })();
  }
};

const len = 1000;
const arr = Array.from({ length: len }, (_, i) => len - i);
console.log(arr);

console.log(mergeSort(arr));
