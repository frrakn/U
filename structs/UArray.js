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
	static shuffle(uarr){
		for(let i = 0; i < uarr.length; i++){
			let x = Math.floor(Math.random() * (uarr.length - i));
			UArray.swap(arr, i, i + x);
		}
	};
	static selectionSort(uarr, comparator){
		comparator = comparator || DEFAULT.COMPARATOR;
		for(let i = 0; i < uarr.length; i++){
			var min = i;
			for(let j = i + 1; j < uarr.length; j++){
				if(comparator(uarr[j], uarr[min]) === -1){
					min = j;
				}
			}
			if(min !== i){
				UArray.swap(uarr, i, min);
			}
		}
	};
	static insertionSort(uarr, comparator){
		comparator = comparator || DEFAULT.COMPARATOR;
		if(uarr.length > 2){
			for(let i = 1; i < uarr.length; i++){
				let temp = i;
				while(comparator(uarr[temp], uarr[temp - 1]) === -1){
					UArray.swap(uarr, temp - 1, temp);
					temp --;
				}
			}
		}
	};
};

var arr = new UArray(10);
for(let i = 0; i < arr.length; i++){
	arr[i] = i;
}
UArray.shuffle(arr);
console.log(arr);
UArray.selectionSort(arr);
console.log(arr);
UArray.shuffle(arr);
console.log(arr);
UArray.insertionSort(arr);
console.log(arr);
