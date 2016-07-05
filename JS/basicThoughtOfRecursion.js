// recursion of fn
var num = 1;
    fn();
    function fn() {
        document.writeln("hello world!" +num+ "<br>");
        num++;
        if (num < 10) { // the jump out condition
            setTimeout(fn, 1000);
        }
    }
