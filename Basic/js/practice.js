/*function foo(outer_arg) {

	function inner(inner_arg) {
		return outer_arg + inner_arg;
	}
	return inner;
}
var get_func_inner = foo(5);

console.log(get_func_inner(4));
console.log(get_func_inner(3));


// Outer function
function outer()
{
	function create_Closure(val)
	{
		return function()
		{
			return val;
		}
	}
	var arr = [];
	var i;
	for (i = 0; i < 4; i++)
	{
		arr[i] = create_Closure(i);
	}
	return arr;
}
var get_arr = outer();
console.log(get_arr[1]());
console.log(get_arr[1]());
console.log(get_arr[2]());
console.log(get_arr[3]()); */



// Explanation of closure
 /*function foo()
		 {
		 var b = 1;
		 function inner(){
                     return inner1;
				 
                     
                        function inner1(){
			 return b;
		 }
		 }			 return inner;
		 }
		 var get_func_inner = foo();	
               var get_func_inner1=get_func_inner()	

		 console.log(get_func_inner1());
		 console.log(get_func_inner1());
	     console.log(get_func_inner1()); */

         function init() {
            var name = 'Mozilla'; // name is a local variable created by init
            function displayName() { // displayName() is the inner function, a closure
              alert(name); // use variable declared in the parent function
            }
            displayName();
          }
          init();


