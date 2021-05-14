["a", "b", "c"].includes("a");
// true;
["a", "b", "c"].includes("d");
// false;

// Dont have to use indexOf
arr.indexOf(x) >= 0;

[NaN].includes(NaN); // true
[NaN].indexOf(NaN);  // -1