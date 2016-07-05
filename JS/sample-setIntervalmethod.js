// this is a sample of how to use setInterval to realize the image scroll, when mouseover method is used, here notice to 
// clear the interval before and after the methods.

<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        #box {
            width: 512px;
            height: 470px;
            border: 20px solid blue;
            margin: 200px auto;
            overflow: hidden;
            position: relative;
        }
        #goTop {
            position: absolute;
            top: 0;
            left: 0;
            width: 512px;
            height: 235px;
            cursor: pointer;
            /*background-color: pink;*/
        }
        #goBottom {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 512px;
            height: 235px;
            cursor: pointer;
            /*background-color: yellow;*/
        }
        img {
            position: absolute;
            top: 0;
            left: 0;
        }
    </style>
</head>
<body>

    <div id="box">
        <img src="images/mi.png" id="img"/>
        <span id="goTop"></span>
        <span id="goBottom"></span>
    </div>

    <script>
        //need：mouse put over goTop tag，image will scroll down, and mouse put over goBottom tag，image will scroll up.
        //steps：
        //1.get the event source and img
        //2.bind event
        //3.event code
            
        //1.
        var goTop = document.getElementById("goTop");
        var goBottom = document.getElementById("goBottom");
        var img = document.getElementById("img");

        // used for top value change.
        var num = 0;
        //define a public timer for setInterval method
        var timer = null;

        //2.
        goTop.onmouseover = function () {

            // very important!!! clear timer, ---- clear timer before use it.
            clearInterval(timer);

            timer = setInterval(function () {
                //3.
                //(1).the img top change
                if(num < 0){
                    num+=10;
                    img.style.top = num+"px";
                }else{
                    //get the termanal. 
                    clearInterval(timer);
                }
            },30);
        }

        //2.
        goBottom.onmouseover = function () {
            // very important!!! clear timer, ---- clear timer before use it.
            clearInterval(timer);

            timer = setInterval(function () {
                //3.书写事件驱动程序
                //(1).img的top值发生改变。
                if(num > -1000){
                    num-=10;
                    img.style.top = num+"px";
                }else{
                    //走到头儿了，别走了！
                    clearInterval(timer);
                }
            },30);
        }

        //when mouse leave, img will keep there.
        img.parentNode.onmouseout = function () {
          
            clearInterval(timer);
        }


    </script>




</body>
</html>
