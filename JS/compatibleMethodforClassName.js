
//19. the compatible method for className 
    function fn(str) {
        //determine if the browsers support the method
        if (document.getElementsByClassName) {
            return document.getElementsByClassName(str);
        } else {
            
            // get all tags
            var arr = [];
            var allNodes = document.getElementsByTagName("*");
            
            for (var i = 0; i < allNodes.length; i++) {
                
                // transfer the str to array by " ",
                var arrClassName = allNodes[i].className.split(" ");
                for (var j = 0; j < arrClassName.length; j++) {
                    if (arrClassName[j] == str) {
                        arr.push((allNodes[i]));
                    }
                }
            }
            return arr;
        }
    }
