
function destroyer(arr,number) {
  // Remove all the values
  var args = Array.from(arguments);           //cannot call this var arguments, includes our arguments
  for(var i = 0; i < arr.length; i++){        //iterates through the array
    for(var j = 1; j < args.length; j++) {    //iterates through our included arguments
      if (arr[i] === args[j]) {
        delete arr[i];                        //seeks and destroys
      }
    }
  }
  return arr.filter(function(x){              //filters out the empty spots in the array
     return Boolean(x);                       //keeping it named function rather than renaming skips defining it
});
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
