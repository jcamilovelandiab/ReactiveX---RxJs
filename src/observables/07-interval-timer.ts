import { interval, timer } from "rxjs";

const observer = {
    next: val => console.log('next:',val),
    complete: () => console.log('Completed')
}

const interval$ = interval(1000);
// const timer$ = timer(2000);
// const timer$ = timer(0);
// const timer$ = timer(2000, 1000); // behaves like the interval operator
const date$ = new Date(); // now
date$.setSeconds(date$.getSeconds() + 5);
const timer$ = timer(date$);

console.log('Beginning$');
// interval$.subscribe( observer );
timer$.subscribe( observer );
console.log('Ending$');