var arr = [11, 22, 33, 44, 55, 66, 77, 88, 99, 100];
var cats = [
    {
        name: "Golden",
        age: 6
    },
    {
        name: "Bobby",
        age: 3
    },
    {
        name: "Brown",
        age: 8
    },
];
var chunk = function (arr, size) {
    var result = new Array();
    var arr2;
    arr.forEach(function (element, index) {
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
var filter = function (arr, func) {
    var result = new Array();
    arr.forEach(function (element) {
        if (func1(element)) {
            result.push(element);
        }
    });
    return result;
};
console.log("Filter:" + filter(arr, func1));
var sum = function (arr) {
    var sum = 0;
    arr.forEach(function (element) {
        sum += element;
    });
    return sum;
};
console.log("Sum:" + sum(arr));
var find = function (arr, search) {
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var element = arr_1[_i];
        if (element === search) {
            return search;
        }
    }
    return "Element Not Found.";
};
console.log("Find: " + find(arr, 100));
var reduce = function (arr, func, start) {
    var ret = func(start, arr[0]);
    for (var i = 1; i < arr.length; i++) {
        ret = func(ret, arr[i]);
    }
    return ret;
};
console.log("Reduce1:" +
    reduce(arr, function (a, e) {
        return a + e;
    }, 0));
console.log("Reduce2:" +
    reduce(cats, function (a, e) {
        return a + e.age;
    }, 0));
