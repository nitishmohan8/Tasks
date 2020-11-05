let arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];

var cats = [
  {
    name: "Golden",
    age: 6,
  },
  {
    name: "Bobby",
    age: 3,
  },
  {
    name: "Brown",
    age: 8,
  },
];

const chunk = (arr, size) => {
  let result = new Array();
  let arr2;
  arr.forEach((element, index) => {
    if (index % size === 0) {
      arr2 = new Array();
    }
    arr2.push(element);
    if ((index + 1) % size === 0 || index + 1 === arr.length) {
      result.push(arr2);
    }
  });
  return result;
};

console.log("Chunk: " + chunk(arr, 3));


function func1(e) {
  return e % 2 == 0;
}



const filter = (arr, func) => {
  let result = new Array();
  arr.forEach((element) => {
    if (func1(element)) {
      result.push(element);
    }
  });
  return result;
};

console.log("Filter:" + filter(arr, func1));


const sum = (arr) => {
  let sum = 0;
  arr.forEach((element) => {
    sum += element;
  });
  return sum;
};

console.log("Sum:" + sum(arr));

const find = (arr, search) => {
  for (let element of arr) {
    if (element === search) {
      return search;
    }
  }
  return "Element Not Found.";
};

console.log("Find: " + find(arr, 100));

const reduce = (arr, func, start) => {
  let ret = func(start, arr[0]);
  for (let i = 1; i < arr.length; i++) {
    ret = func(ret, arr[i]);
  }
  return ret;
};

console.log(
  "Reduce1:" +
    reduce(
      arr,
      function (a, e) {
        return a + e;
      },
      0
    )
);
console.log(
  "Reduce2:" +
    reduce(
      cats,
      function (a, e) {
        return a + e.age;
      },
      0
    )
);