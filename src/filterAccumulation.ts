import {from} from 'rxjs';
import {map, filter, scan, distinctUntilChanged, take} from 'rxjs/operators';

const nums = from([1,2,3,4,5,6,78,78,9,12,180]);

nums.pipe(
    map((num:any) => num * 2),
    distinctUntilChanged(),
    filter(x => x > 10),
    scan((acc, val) => acc + val, 0),
    take(5)
).subscribe(console.log);
