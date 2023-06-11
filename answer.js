function getMiddle(s)
{
  let midChar = s.length/2
  return s.length%2 ? s.charAt(Math.round(midChar)-1) : s.substr(midChar-1,2)
}
