const forloopFib = (num) => {
  if (num === 1) {
    return [0];
  } else if (num === 0) {
    return [];
  }

  const res = [0, 1];
  while (res.length < num) {
    res.push(res[res.length - 2] + res[res.length - 1]);
  }
  return res;
};

console.log(forloopFib(15));

const recursiveFib = (num) => {
  if (num === 1) {
    return [0];
  } else if (num === 0) {
    return [];
  }
  return recursiveFibHelper([0, 1], num);
};
const recursiveFibHelper = (arr, num) => {
  if (arr.length === num) {
    return arr;
  }
  arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
  return recursiveFibHelper(arr, num);
};

console.log(recursiveFib(100));
