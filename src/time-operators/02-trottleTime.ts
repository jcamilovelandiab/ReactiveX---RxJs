import { asyncScheduler, fromEvent } from 'rxjs';
import { throttleTime, debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';

const click$ = fromEvent( document, 'click' );

// First example
click$
.pipe(
    throttleTime(3000)
)
//.subscribe( console.log );

// Second example
const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent( document, 'keyup' );

input$
.pipe(
    throttleTime(1000, asyncScheduler, {
        leading: true, //first element. If user types "Google". It will emit G
        trailing: true //last element. If user types "Google". It will emit Google
    }),
    pluck('target', 'value'),
    distinctUntilChanged()
)
.subscribe(console.log);