import { first, take, tap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

const click$ = fromEvent<MouseEvent>( document, 'click' );

click$
.pipe(
    // take(1)
    tap<MouseEvent>( event => console.log('tap', event) ),
    first<MouseEvent>( event => event.clientY >= 150 )
)
.subscribe({
    next: value => console.log('next:', value),
    complete: () => console.log('complete')
});
