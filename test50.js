function test(x,y)
{
  return((x == 50 || y == 50) || (x+y == 50));
}
console.log(test(30,20));
console.log(test(50,0));
console.log(test(20,20));