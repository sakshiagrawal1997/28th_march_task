function newString(str){
    var text=str.substring(str.length-3,str.length)
    console.log(text)
    
    var new_string = text+str+text 
    console.log(new_string)
  }
  newString("sakshi")