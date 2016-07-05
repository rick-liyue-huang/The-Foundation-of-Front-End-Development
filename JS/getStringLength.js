
function getLengthOfString(str) {

//        need: get the the length of string
//        step:
//        1.get the every char from the string
//        2. determine if it is english letter or chinese letter
//        3. the chinese one will occupy two byte
//        4.return the length
        var len = 0;
        for (var i = 0; i < str.length; i++) {
            if (str.charCodeAt(i) > -1 && str.charCodeAt(i) < 128) {
                len++
            } else {
                len += 2;
            }
        }
        return len;

    }
    
    // here just provide a thought of how to determine the length of char, and get the whole length.
