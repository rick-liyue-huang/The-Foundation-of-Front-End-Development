
 //  encapsulate the function to simulate the jQuery get dom element methods

    function getClassName(classname) {
        if (document.getElementsByClassName) {
            return document.getElementsByClassName(classname);
        } else {

            var allNodes = document.getElementsByTagName("*");
            var i, arr = [];
            for (i = 0; i < allNodes.length; i++) {
                if (allNodes[i].className.indexOf(classname) != -1) {
                    arr[arr.length] = allNodes[i];
                }
            }
            return arr;
        }
    }
    
    function $(element) {
        var firstOne = element.charAt(0);
        var restOnes = element.slice(1);
        if (firstOne == '#') {
            return document.getElementById(restOnes);
        } else if (firstOne == '.') {
            return getClassName(restOnes);
        } else {
            return document.getElementsByTagName(element);
        }
    }
