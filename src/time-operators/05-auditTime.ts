import { fromEvent } from "rxjs";
import { auditTime, tap, map } from 'rxjs/operators';

const click$ = fromEvent<MouseEvent>( document, 'click' );

click$
.pipe(
    map( ({x}) => x ),
    tap( value => console.log('tap:', value)),
    auditTime(4000)
)
.subscribe( console.log );