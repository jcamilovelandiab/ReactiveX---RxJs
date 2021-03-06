import { of } from 'rxjs';

// const obs$ = of(1, 2, 3, 4, 5, 6);
const obs$ = of<number>(...[1, 2, 3, 4, 5, 6]);
// const obs$ = of([1,2], {a:1, b:2}, function(){}, true, Promise.resolve(true));

console.log('Obs$ init');
obs$.subscribe(
  next => console.log('next:', next),
  null,
  () => console.log('The sequence is done!')
);
console.log('Obs$ end');