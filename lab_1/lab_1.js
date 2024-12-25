const arr = [1, 2, 3, 4, 5];

function asyncMap(arr, action, printer, loop) {
    loop(arr, action, (error, newArr) => {
        printer(newArr);
    });
}

function loop(arr, action, callback) {
    const newArr = [];
    let completed = 0;
    let errorDetected = false;

    for (let i = 0; i < arr.length; i++) {

        action(arr[i], errorDetected, (error, result) => {
            
            if(errorDetected){
                return
            }

            newArr[i] = result; 
            completed++;

            if(error){
                callback(error)
                errorDetected = true
            }

            
            if (completed === arr.length) {
                callback(null, newArr); 
            }
        });
    }
}

function action(element, callback) {
        setTimeout(() => {
            callback(null, element * 2);
        }, 2000);
}

function printer(array) {
    console.log('Result:', array);
}

asyncMap(arr, action, printer, loop);
