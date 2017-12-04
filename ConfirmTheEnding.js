function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  //target = str.substr(-1);
  var i = target.length;
  if (str.substr(-i) == target) {
    str = true;
      return str;
  }
  else if(str.substr(-i) != target) {
    str = false;
      return str;
  }
}

confirmEnding("Bastian", "n");
