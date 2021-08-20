import { range } from 'rxjs';
import { tap, map } from 'rxjs/operators';

const numbers$ = range(1, 5);

numbers$.pipe(
    tap( x => {
        console.log('before', x);
        return 100;
    }),
    map( value => value +10 ),
    tap({
        next: value => console.log('next:', value),
        complete: () => console.log('completed')
    })
)
.subscribe( value => console.log('subs', value) );