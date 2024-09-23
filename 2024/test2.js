const p = new Promise((resolve, reject) => {
    // resolve(111); //调用resolve能将promise状态改成fulfilled
    reject("被rejected掉啦"); //调用resolve能将promise状态改成fulfilled
})
    .then((data) => {
        console.log(data);
    })
    .catch((reason) => {
        console.warn(reason);
    });

Promise.allSettled([p]).then((results) => {
    console.dir(results);
});