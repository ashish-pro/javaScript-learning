const p1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p1 success"), 3000);
    // setTimeout(() => reject("p1 fail"),3000);
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p2 success"), 1000);
    // setTimeout(() => reject("p2 fail"),1000);
});
const p3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("p3 success"), 1000);
    // setTimeout(() => reject("p3 fail"), 1000);
});

Promise.race([p1, p3, p2])
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.error(err);
    });
