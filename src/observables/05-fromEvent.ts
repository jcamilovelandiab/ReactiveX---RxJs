import { fromEvent } from "rxjs";

/**
 * DOM Events
 */
const src1$ = fromEvent<MouseEvent>( document, 'click' );
const src2$ = fromEvent<KeyboardEvent>( document, 'keyup' );

const observer = {
  next: (val: any) => console.log('next', val)
};

src1$.subscribe( event => {
  console.log(event.x, event.y);
});
src2$.subscribe( event => {
  console.log(event.key);
});