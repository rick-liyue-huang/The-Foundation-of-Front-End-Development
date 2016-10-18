

## setTimeout

setTimeout() is used to call a function or expression after the designated "ms",


```
setTimeout(function () {
	console.log("hello world");
});
```

The upon code will output "hello world" in console after 1s. setTimeout() only executes one time, which means that the console log only run one time after 1s, and then end the code forever.

setTimeout() will create a timer with a ID name, and the function clearTimeout() can cancel the delayed the responsive code by ID name.


```
var t = setTimeout(function () {
	alert("ok");
}, 1000);
clearTimeout(t);
```

## setInterval

setInterval() is similar as setTimeout(), but the latter one will execute the function repeated on every designated time.


```
var t = setInterval(function () {
	console.log("will be repeated");
}, 1000);
```

the upon code will output "will be repeated" each 1s, and also can cancel the setInterval() by the same ID name


```
clearInterval(t);
```

## The problem of timer

setTimeout and setInterval are both not precise, so we will use recursive function to modify it.


```
setTimeout(function() {
	// processing
	setTimeout(arguments.callee, interval);
}, interval);
```





