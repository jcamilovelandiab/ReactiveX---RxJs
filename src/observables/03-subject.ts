import { Observable, Observer, Subject } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.warn('error: ', error),
  complete: () => console.info('Completed')
}

const interval$ = new Observable<number>( subscriber => {
  const intervalId = setInterval( () => subscriber.next(Math.random()), 1000 );
  return () =>  {
    clearInterval( intervalId );
    console.log('Interval was destroyed');
  }
});

/**
 * 1. Casteo múltiple
 * 2. También es un Observer
 * 3. next, error y complete
 */
const subject$ = new Subject();
const intervalSubscription = interval$.subscribe( subject$ );

// const subs1 = subject$.subscribe( rnd => console.log('subs1', rnd) );
// const subs2 = subject$.subscribe( rnd => console.log('subs2', rnd) );
const subs1 = subject$.subscribe( observer );
const subs2 = subject$.subscribe( observer );

/**
 * Cuando la data es producida por el observable en sí mismo es considerado COLD OBSERVABLE.
 * Cuando es producida FUERA del observable es llamado HOT OBSERVABLE.
 */
setTimeout( () => {
  subject$.next(10);
  subject$.complete();
  intervalSubscription.unsubscribe();
}, 3500 );