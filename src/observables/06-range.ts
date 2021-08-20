import { asyncScheduler, of, range } from "rxjs";

// const src$ = of(1,2,3,4,5);
// const src$ = range(1, 10);
// const src$ = range(5);
const src$ = range(1, 5, asyncScheduler);

console.log('Init');
src$.subscribe( value => console.log(value) );
console.log('End');