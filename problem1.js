<script>
let N =13;
let count=0;
for(i=2;i<N;i++){
  if(N%i===0){
     count++; 
     }
}if(count>0){
   console.log("False");
}else{
    console.log("True");
     }
