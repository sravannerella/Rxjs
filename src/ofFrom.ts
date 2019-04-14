import {of, from } from 'rxjs';

const print = (msg:any) => (data:any) => {
    console.log(`${msg}: ${data}`);
}

// Of just Emits the values in a sequentail order
const test = of('test', 'string');
const nums = of([1,2,34,4,6]);

// from converts the array to an Observable
const hello = from('hello');
const helloArr = from([12,3,45,6,7,7]);


helloArr.subscribe(print("Hello Arr"));
hello.subscribe(print("HelloSubscriber"));

nums.subscribe(print("NumsSubscriber"));
test.subscribe(print("TestSubscriber"));
