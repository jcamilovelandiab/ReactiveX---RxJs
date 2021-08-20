import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log('[ next ]: ', value),
  error: error => console.warn('[ error ] : ', error),
  complete: () => console.info('[ Completed ]')
}

// const obs$ = Observable.create();
const obs$: Observable<string> = new Observable<string>(subscribers => {

  subscribers.next('Hello');
  subscribers.next('World');

  // Force an error
  const a = undefined;
  a.name = 'Camilo';

  subscribers.complete();

  subscribers.next('Hello');
  subscribers.next('World');

});

obs$.subscribe( observer );
// obs$.subscribe(
//   value => console.log('next: ', value),
//   error => console.warn('error: ', error),
//   () => console.info('Completed')
// );