const p = new Promise((resolve, reject) => {
    // resolve(111); //调用resolve能将promise状态改成fulfilled
    reject("被rejected掉啦"); //调用resolve能将promise状态改成fulfilled
});

//这里一定要分开执行，而不是使用链式执行，否则最后得到的状态使用的Fulfilled
p.then((data) => {
    console.log(data);
}).catch((reason) => {
    console.warn(reason);
});

Promise.allSettled([p]).then((results) => {
    console.dir(results);
});