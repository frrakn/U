"use strict";

module.exports = {
	COMPARATOR: function(x, y){
		if(x > y){
			return 1;
		}
		else if(x < y){
			return -1;
		}
		else{
			return 0;
		}
	}
}
