// notice the condition of jumping the while loop

var loop = 3;
    var random = parseInt(Math.random()*10);
    
    while (loop > 0 && loop <= 3) {
        loop--;
        var userNum = prompt("please input number bwtween 0~10:");
        if (userNum == random) {
            loop = 4;
            alert('congratulation');
        } else {
            alert('opoos');
        }
    }
    alert('fail');
    
    // this function (mode) used to determine the login results.
