/**
 * Created by rick on 7/3/17.
 */

function getElem(id) {
    return document.getElementById(id);
}

function getFirstNode(elem) {
    return elem.firstElementChild || elem.firstChild;
}

function getLastNode(elem) {
    return elem.lastElementChild || elem.lastChild;
}

function getPrevNode(elem) {
    return elem.previousElementSibling || elem.previousSibling;
}

function getElemIndex(elem, index) {
    return elem.parentNode.children[index];
}

function getAllSiblings(elem) {
    var newArr = [];
    var arr = elem.parentNode.children;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== elem) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
