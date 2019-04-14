import {merge, from, asyncScheduler} from 'rxjs';
import {tap}from 'rxjs/operators';

const nums = from([1,2], asyncScheduler);
const seconds = from([60,90,180,120], asyncScheduler);

const test = merge(
    nums.pipe(
        tap(val => console.log("NUMS:",val))
    ),
    seconds.pipe(
        tap(val => console.log("SECONDS:", val))
    )
);

test.subscribe(console.log)