import { of } from 'rxjs';
import { ajax, AjaxError }  from 'rxjs/ajax';
import { catchError, map, pluck } from 'rxjs/operators';

// const url = 'https://api.github.com/usersXX?per_page=5';
const url = 'https://api.github.com/users?per_page=5';

// const fetchPromise = fetch( url )
//     .then( resp => resp.json() )
//     .then( data => console.log('data:', data) )
//     .catch( err => console.warn('Error in users', err) );


const errorHandler = ( response: Response ) => {
    if( !response.ok ){
        throw new Error( response.statusText );
    }
    return response;
}

// const fetchPromise = fetch( url )
//     .then( errorHandler )
//     .then( resp => resp.json() )
//     .then( data => console.log('data:', data) )
//     .catch( err => console.warn('Error in users', err) );

const ajaxErrorHandler = ( error: AjaxError ) => {
    console.warn('error:', error.message );
    return of([]);
};
ajax( url )
.pipe(
    // map( resp => resp.response )
    pluck('response'),
    catchError(ajaxErrorHandler)
)
.subscribe( users => console.log('users:', users) );