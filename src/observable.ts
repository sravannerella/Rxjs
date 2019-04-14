import {Observable} from 'rxjs';

const obs = Observable.create((observer:any) => {
    observer.next('A');
    observer.next('Sravan');
    observer.next('TEST');
    observer.next('PING');
    observer.complete();
});

obs.subscribe((data:any) => console.log("SUBSCRIBER:",data));