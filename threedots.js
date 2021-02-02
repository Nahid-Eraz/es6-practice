const ages = [12, 13, 14, 35];
const ages2 = [23, 54, 66, 45];
const ages3 = [12, 13, 14, 35];
const allAges = ages.concat(ages2).concat(ages3);

// const allAges2 = [...ages, ...ages2, 10000, ...ages3];
console ;allAges2 = [...ages, ...ages2, 10000, ...ages3];
// console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 250;
// const maximum = Math.max(business, minister, sochib);

const bigE = [150,480,4658];
const maximum = Math.max(...bigE);
console.log(maximum);