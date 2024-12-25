const arr = [1, 2, 3, 4, 5];

function asyncMap(arr, action, printer, loop) {
    loop(arr, action)
    .then(printer)
    .catch((error) => console.log(error));
}

function loop(arr, action) {
    const promises = arr.map(element => action(element))
    return Promise.all(promises)
}

function action(element) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(!element){
                reject('Error processing element')
            } else {
                resolve(element * 2);
            }
            console.log('ok')
        }, 2000);
    })
}

function printer(array) {
    console.log('Result:', array);
}

// asyncMap(arr, action, printer, loop);


function asyncAwaitMap(arr, action, poop){
    poop(arr, action)
    .then(printer)
    .catch(error => console.log(error))
}

async function poop(arr, action){
    const promises = await arr.map(async(element) => {await action(element)})
    return Promise.all(promises)
}

asyncAwaitMap(arr, action, poop)