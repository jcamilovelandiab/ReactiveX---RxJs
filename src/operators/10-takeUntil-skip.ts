import { interval, fromEvent } from 'rxjs';
import { skip, takeUntil, tap } from "rxjs/operators";

const button = document.createElement('button');
button.innerHTML = 'Stop Timer';

document.querySelector('body').append( button );

const counter$ = interval(1000);
const clickBtn$ = fromEvent( button, 'click' )
.pipe(
    tap( () => console.log('tap before skip') ),
    skip(1),
    tap( () => console.log('tap after skip') ),
);

counter$
.pipe(
    takeUntil( clickBtn$ )
)
.subscribe({
    next: value => console.log('next:', value),
    complete: () => console.log('complete')
});
