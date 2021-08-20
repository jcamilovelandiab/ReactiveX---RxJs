import { range, of, from, fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// range(1, 10)
// .pipe(
//     filter( value => value % 2 === 1 )
// )
// .subscribe( console.log )

// range(20, 30)
// .pipe(
//     filter( ( value, index ) => {
//         console.log('index', index);
//         return value % 2 === 1;
//     })
// )
// .subscribe( console.log )

const characters = [
    {
        type: 'hero',
        name: 'Batman'
    },
    {
        type: 'hero',
        name: 'Robin'
    },
    {
        type: 'villain',
        name: 'Joker'
    }
];

from(characters)
.pipe(
    filter( character => character.type === 'hero' )
).subscribe( console.log );

const keyup$ = fromEvent<KeyboardEvent>( document, 'keyup' )
    .pipe(
        map( event => event.code ),
        filter( key => key === 'Enter' )
    );

keyup$.subscribe( console.log );