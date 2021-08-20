import { fromEvent, of } from "rxjs";
import { ajax } from "rxjs/ajax";
import { tap, map, mergeMap, pluck, catchError, switchMap, exhaustMap } from 'rxjs/operators';

// Helper
const httpRequestLogin = ( userPass ) => 
    ajax.post('https://reqres.in/api/login?delay=1', userPass)
    .pipe(
        pluck('response', 'token'),
        catchError( err => of('invalid token'))
    );

// Create a form
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPassword = document.createElement('input');
const submitBtn = document.createElement('button');

// Settings
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPassword.type = 'password';
inputPassword.placeholder = 'Password';
inputPassword.value = 'cityslicka';

submitBtn.innerHTML = 'Login';

form.append( inputEmail, inputPassword, submitBtn );
document.querySelector('body').append( form );

// Streams
const submitForm$ = fromEvent<Event>( form, 'submit' )
    .pipe(
        tap( event => event.preventDefault() ),
        map( event => ({
            email: event.target[0].value,
            password: event.target[1].value
        })),
        // mergeMap( httpRequestLogin )
        // switchMap( httpRequestLogin )
        exhaustMap( httpRequestLogin )
    );

submitForm$.subscribe( token => {
    console.log(token);
});