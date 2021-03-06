/** 
*   在Nodejs事件循环机制中，
        有任务两个队列：Macrotask队列和Microtask队列。 
        在一个事件循环里，这两个队列会分两步执行： 
            第一步会固定地执行一个（且仅一个）Macrotask任务， 
            第二步会执行整个Microtask队列中的所有任务。 并且，在执行Microtask队列任务的时候，也允许加入新的Microtask任务，
            直到所有Microtask任务全部执行完毕，才会结束循环。 
            Macrotasks一般包括: setTimeout, setInterval, setImmediate, I/O, UI rendering； 
            Microtasks一般包括: process.nextTick, Promises, Object.observe, MutationObserver。 
*/
setTimeout(function() {
    console.log(5);
}, 0);
setImmediate(function() {
    console.log(6);
});

new Promise(function(resolve) {
    console.log(1);
    resolve();
    console.log(2);
}).then(function() {
    console.log(4);
});
console.log('打酱油');
process.nextTick(function() {
    console.log(3);
});