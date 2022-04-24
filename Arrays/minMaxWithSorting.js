let num;
let arr= new Array();
for(let i=0 ;i<=10 ; i++ ){
    num=0;
    while(num<100 || num>999){
        num=Math.floor(Math.random()*1000);
    }
    arr.push(num);
}
let newArr= arr.sort((a,b)=>a-b);
console.log("2nd max: "+newArr[8]);
console.log("2nd min: "+newArr[1]);