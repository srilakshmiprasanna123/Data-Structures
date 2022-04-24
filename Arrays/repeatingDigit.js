let num=0;
let arr= new Array();
for(let i=1 ;i<=100 ; i++ ){
    let r =((i%10));
    let d = Math.floor(i/10); 
    if(r==d){
        arr.push(i);     
    }
}
console.log(arr);