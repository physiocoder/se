#!/usr/bin/env node

// Prime
// https://en.wikipedia.org/wiki/Prime_number

var getPrime = function (n) {
	var p = [];
	var tentative = 2;
	while(n>p.length) {
		if(primality(tentative, p)) { p.push(tentative); }
		tentative++;
	}
	return p;
}

var primality = function (num, arr) {
	var l=0;
	while(arr[l]<=Math.sqrt(num)) {
		if( num/arr[l] === Math.ceil(num/arr[l]) ) { return false; }
		l++;
	}

	return true;
};

var fmt = function(arr) {
	return arr.join(",");
};

var k = 100;
var fs = require('fs');
var fileout = '100prime.txt';
var out = fmt(getPrime(k));

fs.writeFileSync(fileout, out); 

// Print to console
console.log("firstkprime(" + k + ")");
console.log(out);

