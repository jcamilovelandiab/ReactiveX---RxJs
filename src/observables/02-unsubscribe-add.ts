import { Observable, Observer } from "rxjs";

const observer: Observer<any> = {
  next: value => console.log('next: ', value),
  error: error => console.warn('error: ', error),
  complete: () => console.info('Completed')
}

const interval$ = new Observable<number>( subscriber => {
  // Create counter 1,2,3,4,5,...
  let counter = 0;
  const interval = setInterval( () => {
    // Every x seconds
    subscriber.next(++counter);
  }, 1000 );

  setTimeout( () => {
    subscriber.complete();
  }, 2500 );

  return () => {
    clearInterval( interval );
    console.log('Interval was destroyed!');
  };
});

const subscription1 = interval$.subscribe( observer );
const subscription2 = interval$.subscribe( observer );
const subscription3 = interval$.subscribe( observer );

subscription1
    .add( subscription2 )
    .add( subscription3 )

setTimeout( () => {
  // subscription1.unsubscribe();
  // subscription2.unsubscribe();
  // subscription3.unsubscribe();
  console.log('Timeout was completed');
}, 6000 );
