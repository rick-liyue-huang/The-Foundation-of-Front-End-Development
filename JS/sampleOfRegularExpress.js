// show how to simply define the correct input by regular Expression

  var regQQ = /^[1-9]\d{4,10}$/; // can not star with 0, followed by 4-10 digits

  var regMobile = /^(13[0-9]|14[57]|15[0-9]|17[0-9]|18[0-9])\d{8}$/;

  var regEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  var regTel = /^0\d{2,3}-\d{7,8}$/;

  var regName = /^[\u4e00-\u9fa5]{2,}$/;

  function check(inp, regEx) {
        inp.onblur = function() {
            if (regEx.test(trim(this.value))) {
                this.nextSibling.innerHTML = 'right';
                this.nextNode().className = 'right';
            } else {
                this.nextSibling.innerHTML = 'wrong';
                this.nextSibling.className = 'wrong';
            }
        }
  }
// one compatible function for trim() method
  function trim(str) {
        return str.replace(/^\s+|\s+$/g, "");
  }
