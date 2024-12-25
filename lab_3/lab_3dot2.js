// const arr = [1, 2, 3, undefined, 5];
// const arr = [];
const arr = [1, 2, 3, 4, 5];


const controller = new AbortController();

async function asyncMap(arr, action) {
    const signal = controller.signal;
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        try {
            newArr[i] = await action(arr[i], controller);
        } catch (error) {
            if (signal.aborted) {
                console.error("Operation aborted...");
                break;
            } 
        }
    }
    return newArr;
}

function action(element, controller) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (element === undefined){
                controller.abort();
                reject(new Error("Invalid element"));
            } else {
                resolve(element * 2);
            }
        }, 1000);
    });
}

const resultArr = asyncMap(arr, action);

resultArr.then((data) => {
    console.log("Result:", data);
}).catch((error) => {
    console.error("Unhandled error:", error.message);
});
