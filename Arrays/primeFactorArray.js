const num =210;
let flag=0;
for(let i =2; i<89; i++){
    if(num%i==0){
        for(let j=2; j<i; j++){
            if(i%j==0){
                flag=1;
            }
        }
        if(flag==0){
            console.log(i);
        }
        flag=0;
    }
}