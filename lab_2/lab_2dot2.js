const arr = [1, 2, 3, 4, 5];

async function asyncMap(arr, action){
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr[i] = await action(arr[i])
    }   
    // console.log(newArr)
    return newArr
}

function action(element){
    return new Promise((response, reject) => {
        setTimeout(() => {
            response(element*2);
        }, 1000);
    })
}

const resultArr = asyncMap(arr, action)

console.log(resultArr)
