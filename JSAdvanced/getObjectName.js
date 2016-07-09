
function Person () {}
			
var p = new Person();

// 1, get the constructor function
var ctr = p.constructor;
// 2, transfer the function to string
var s = "" + ctr;		// 'function Person () {}'
// 3, get the string between 'function' and '('
// alert( s );

// 3.1 traditional string dealing method
/*
var start = s.replace("function", "|").indexOf( '|' );
if ( start != -1 ) {
	var end = s.replace("function", "|").indexOf('(');
	if ( end != -1 ) {
		var name = s.replace("function", "|").slice(start + 2, end);
		alert( "|" + name + "|" );
	}
}
*/
//  find start and end
// if (start != -1 && end != -1) ...

// string <string>.replace( <string>, <string> )
// number <string>.indexOf( <string> )
// string <string>.slice( startIndex, endIndex )


// update1,  use one variable to deal with the repeated string
// s = s.replace("function", "|");	// '| 名字() {}'
// update2, if nesting
/*
var start = s.indexOf( '|' );
if ( start != -1 ) {
	var end = s.indexOf('(');
	if ( end != -1 ) {
		var name = s.slice(start + 2, end);
		alert( "|" + name + "|" );
	}
}*/


/*
var start = s.indexOf( '|' );
var end = s.indexOf('(');
if ( start != -1 && end != -1 ) {
	var name = s.slice(start + 2, end);
	alert( "|" + name + "|" );				
}*/


// 3.2 by RegExp
// 'function Person () {}'
/*
var r = /function (.+)\(/;
var name = r.exec( s )[ 1 ];
alert( "|" + name + "|" );
*/

// 3.3 by 'name' property, 
alert ( ctr.name );	// IE 8 doesnot support


// at last get the compatible method to get the object name,

function getFnName( fn ) {				
	// test if it is function
	if ( typeof ( fn ) !== 'function' ) return;
	/*
	return fn.name ? 
			fn.name :
			/function (.+)\(/.exec( fn + '' )[ 1 ];
	*/
	return fn.name ||
			/function (.+)\(/.exec( fn + '' )[ 1 ];
}
