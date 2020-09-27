import * as workerFarm from 'worker-farm';
import { v4 as uuidv4 } from 'uuid';

const service = workerFarm(require.resolve('./worker'), ['execute']);


let counter = 0;
let timeout = 1000;

for (let i = 0; i < 10; i++) {
    console.log(`Iteration: ${i}`);

    const randomUuid = uuidv4();

    service.execute({ uuid: randomUuid, number: counter, timeout: timeout }, (err, output) => {
        console.log(output);
    });
    
    counter++;
    timeout = timeout + 1000;
}

setTimeout(() => {
    workerFarm.end(service);
}, 20000);


