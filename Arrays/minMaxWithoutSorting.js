let num;
let arr= new Array();
for(let i=0 ;i<=10 ; i++ ){
    num=0;
    while(num<100 || num>999){
        num=Math.floor(Math.random()*1000);
    }
    arr.push(num);
}

let max_pos =0;
let max = arr[max_pos];

for(let i=0 ; i<=10; i++){
    if(arr[max_pos]<arr[i]){
        max= arr[i];
        max_pos=i;
    }
}
arr[max_pos]=-1;
let max_pos2 =0;
max = arr[max_pos2];

for(let i=0 ; i<=10; i++){
    if(arr[max_pos2]<arr[i]){
        max= arr[i];
        max_pos2=i;
    }
}
console.log("2nd Max: "+max);

let mix_pos =0;
let mix = arr[mix_pos];

for(let i=0 ; i<=10; i++){
    if(arr[mix_pos]>arr[i]){
        mix= arr[i];
        mix_pos=i;
    }
}
arr[mix_pos]=10000;
let mix_pos2 =0;
mix = arr[mix_pos2];

for(let i=0 ; i<=10; i++){
    if(arr[mix_pos2]>arr[i]){
        mix= arr[i];
        mix_pos2=i;
    }
}
console.log("2nd Min: "+mix);