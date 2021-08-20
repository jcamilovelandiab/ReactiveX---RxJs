import { fromEvent } from 'rxjs';
import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const click$ = fromEvent( document, 'click' );

// First example
click$
.pipe(
    debounceTime(3000)
)
//.subscribe( console.log );

// Second example
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent( document, 'keyup' );

input$
.pipe(
    debounceTime(1000),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe(console.log);