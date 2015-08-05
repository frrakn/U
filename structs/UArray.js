"use strict";

let DEFAULT = require("../default.js");

class UArray extends Array{
	static swap(uarr, from, to){
		let temp = uarr[from];
		uarr[from] = uarr[to];
		uarr[to] = temp;
	};
	static isSorted(uarr, comparator){
		let sorted = true;
		comparator = comparator || DEFAULT.COMPARATOR;
		if(uarr.length > 1){
			for(let i = 1; i < uarr.length && sorted; i++){
				sorted = comparator(uarr[i], uarr[i - 1]) !== -1;
			}
		}
		return sorted;
	};
};

var arr = new UArray(10);
for(let i = 0; i < arr.length; i++){
	arr[i] = i;
}

console.log(UArray.isSorted(arr));
UArray.swap(arr, 5, 6);
console.log(arr);
console.log(UArray.isSorted(arr));
