import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';

const url = 'https://httpbin.orgXX/delay/1';
// const url = 'https://api.github.com/users?per_page=5';

const errorHandler = ( resp: AjaxError ) => {
    console.warn('error:', resp.message );
    return of({
        ok: false,
        users: []
    });
}

// const obs$ = ajax.getJSON( url )
//     .pipe(
//         catchError( errorHandler )
//     );

// const obs2$ = ajax( url )
//     .pipe(
//         catchError( errorHandler )
//     );

const obs$ = ajax.getJSON( url );
const obs2$ = ajax( url );

// obs$.subscribe( data => console.log('getJSON:', data) );
obs2$
.pipe(
    catchError(errorHandler)
)
.subscribe({
    next: value => console.log('next:', value),
    error: err => console.warn('error:', err),
    complete: () => console.log('complete')
});