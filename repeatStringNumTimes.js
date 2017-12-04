function repeatStringNumTimes(str, num) {
  // repeat after me
  if(num < 0) {
    str = "";
    return str;
  }
  str = str.repeat(num);
  return str;
}

repeatStringNumTimes("abc", 3);
