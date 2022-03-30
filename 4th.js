function check(num){
    return ((Math.abs(100 - num) <= 20) ||
       (Math.abs(400 - num) <= 20));
   
  }
  console.log(check(52));
  console.log(check(98));
  console.log(check(200));