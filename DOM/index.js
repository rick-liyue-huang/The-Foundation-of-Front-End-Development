/* 
    A brief description of the DOM progamming based on the book of DOM Scripting, 

    Here I do not want to deep into the details of the JS and DOM grammer and syntax, and just copy out some useful functions.
*/

//---- 1. ------------------------------
// until HTML5 DOM, the very important methods of getClassName comes, and in order to satisfy the earlier edition, we should 
// define a function to realize this method.

function getElementsByClassName(node, classname) {
        
        if (node.getElementsByClassName) {
          // use the existing method
            return node.getElementsByClassName(classname);
        } else {
            var results = [];
            var i, elements = node.getElementsByTagName("*");
            for (i = 0; i < elements.length; i++) {
                if (elements[i].className.indexOf(classname) != -1) {
                  // push the satisfied element to array of elements.
                    results[results.length] = elements[i];
                }
            }
            return results;
        }
    }
    
    // we should notice that, the object from methods of getElementsByTagName() and getElementsByClassName() usually is array, 
    // and we will get a series of element objects, so we should always remember that we condsider the arrayname[0] syntax and sometimes 
    // works in the for(-in) loop.
    
    //----- 2.------------------------------------
    /* During our programming development, the following rules must be considered,
       Graceful degradation, ensuring the web page still work without JavaScript(JS);
       Unobstrusive JS, separating structure from behavior;
       Backward compatibility, ensuring the older browsers donot choke on the JS;
       Performance considerations, making sure that your JS is performing at its best.
    */
    
    /*
       For graceful degradation, we should limited use some syntax or method, such as javascript:pseudo-protocol,
       and inline handlers. This is very useful to deal with searchbot, which does not understand JS
       The other notice about graceful degradation is prograessive enhancement, which means that we separate
       structure with style. In practice, we can set the style in advance, and assign the setted style to elements. If the style is working, it will enhance the content performance, otherwise does not effect the content at all.
    */
    
    /*
       In order to realize the unobstrusive JS, we donot suggest strongly that put the method inline of element tag, 
       but use var to produce the variable, and then assign the methods, we can do that, getElementById(id).event = action.
       for example
     */
       var i, links = document.getElementsByTagName('a');
       for (i = 0; i < links.length; i++) {
          if (links[i].getAttribute('class') == 'popup') {
              links[i].onclick = function() {
                  popUp(this.getAttribute('href'));
                  return false;
              }
          }
       }
    /*
      a very important word "this" appearces here, this point to the "caller" (object) invoking the functioin (method).
      So, for the upon example, the "this" point to the links[i] element.
      by the way, "return false" means the web page does not forward to another. just keeping in the current one.
    */
    
    /*
      I believe that backword compatibility is the most important one in defining Frame. We must consider the browser compacility in common, when we define some function in frame.
      the common usage is that 
    */
    if (method) {
      statements
    }
    
  // or 
  if (!method) {
    return false;
  }
  
    /*
      Performance consideration means to keep the web running along smoothly, so we should minimize DOM access and markup,
      in other words, we usually determine whether the condition of statement execution is satisfied.
      such as,
    */
    var links = document.getElementsByTagName('a');
    if (links.length > 0) {
        for (var i = 0; i < links.length; i++) {
            // do something to each link.
        }
    }
    // here if links.length is not greater zero, we donot need to execute the following statements, 
    // so can save the runing time
    
    /*
        Assembling and placing scripts, by put more than one js docs in a single doc, and then refer this single one,
      Minification the js docs by remove off the spaces between statements and expressions. in actual practice we always 
      use the minificatioin one, such as "modernizr-custom.min-3.js".
    */
    
    
    //----- 3. ----------------------
    // Based on the upon explanation, we usually define the existence of some methods.
    // that are checkpoints,
    function prepareGallery() {
        if (!document.getElementsByTagName) return false;
        if (!document.getElementById) return false;
        if (!document.getElementById('imagegallery')) return false;
        var gallery = document.getElementById('imagegallery');
        var links = document.getElementsByTagName('a');
    }
    
    // ------ 4. ---------------------
    /* 
       As common rules, we like to put the script doc (.js) seperate from the structure doc (.html), 
       and then put the refference tag (<script src = "....">) directly above the </body> tag. 
       By doing this, the seb structure loading cannot affect the scripts execute.
       But sometimes,  we always include more than one function, we can define a new funcitoin to avoid the included functions disturb one another.
    */
    
    function addLoadEvent(func) {
        var oldLoad = window.onload;
        if (typeof window.onload != 'function') {
            window.onload = func;
        } else {
            window.onload = function () {
                oldLoad();
                func();
            }
        }
    }
    // this effective creates a queue of funcitons to be executed when the page loads. 
    
    // ----- 5. ------------
    /*
      An additional mention about DOM Core and HTML-DOM, 
      The DOM Core is such as, 
      getElementById, getElementsByTagName, getElementsByClassName, getAttribute, setAttribute.
      wherease, HTML-DOM is that
      element.key = element,  element.src = source, var source = whicpic.href.
      
      we strongly recommend to use the DOM Core one.
    */
    
    // ----------- 6. -------------
    
    // innerHTML is a very interesting method, and it is supported by many browsers. 
    // innerHTML can be used to read and write the HTML in an element.
    element.innerHTML = "<p>I am produced from <em>innerHTML</em> method</p>";
    
    
    // ---------- 7. --------------
    /*
      DOM methods used to create, remove, change and enqury the DOM tree.
      and we also can create some new methods by combine the existing methods
    */
    function insertAfter(newElement, targetElement) {
        var parent = targetElement.parentNode;
        if (parent.lastChild == targetElement) {
            parent.appendChild(newElement);
        } else {
            parent.insertBefore(newElement, targetElement.nextSibling);
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
