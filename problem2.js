//string palindrome or not

let str = "madam";

 // do the rest of the code
 let newStr="";
    for(i=str.length-1;i>=0;i--){
        newStr+=str[i];
    }
  if(newStr==str){
      console.log('Yes')
  }else{
      console.log('No')
  }