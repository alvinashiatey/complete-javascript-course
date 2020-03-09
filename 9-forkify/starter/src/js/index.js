// Global app controller
import str from "./model/Search";
import { sum, mult, ID } from "./views/searchView";

console.log(str);
let s = sum(...ID);
let m = mult(...ID);
console.log(
  `the imported sum is ${s} and the multipled function returned ${m} and by addind them i get ${s +
    m}`
);

//console.log(add());
