/* solution for reverse hash problem */
var hashFun = function(s){
	
	var h =7;
	var letters = "acdegilmnoprstuw";
	
	for(var i = 0; i < s.length; i++) {
		  h = (h * 37 + letters.indexOf(s[i]));
    }
	return h;
}
console.log("in hashFun() - "+ hashFun("leepadg"));

var hashReverse = function(hexaDeciNumber){
	var letters = "acdegilmnoprstuw";
	var returnString = [];
	var i = 0;
	while ( hexaDeciNumber > 37 ) {
      returnString[ i++ ] = hexaDeciNumber % 37;
      hexaDeciNumber = parseInt( hexaDeciNumber / 37 );
   }
   var result = "";
   for( var j = returnString.length - 1; j >= 0; j-- ){
   	result = result + letters[ returnString[j] ];
   }
   return result;
}
 console.log("in reverse hash() - "+ hashReverse(680131659347));
