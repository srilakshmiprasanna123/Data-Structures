let dice = new Map();
dice.set(1, 0);
dice.set(2, 0);
dice.set(3, 0);
dice.set(4, 0);
dice.set(5, 0);
dice.set(6, 0);

let max=0,min_value=10, min=0;
let roll, count=0;
while(count<10){
    roll=Math.floor(Math.random()*6+1);
    switch(roll){
        case 1: dice.set(1, dice.get(1)+1); if(10<= dice.get(1)){max=1;count=10}; break;
        case 2: dice.set(2, dice.get(2)+1); if(10<= dice.get(2)){max=2;count=10}; break;
        case 3: dice.set(3, dice.get(3)+1); if(10<= dice.get(3)){max=3;count=10}; break;
        case 4: dice.set(4, dice.get(4)+1); if(10<= dice.get(4)){max=4;count=10}; break;
        case 5: dice.set(5, dice.get(5)+1); if(10<= dice.get(5)){max=5;count=10}; break;
        case 6: dice.set(6, dice.get(6)+1); if(10<= dice.get(6)){max=6;count=10}; break;
    }

}
for(let i=1; i<7; i++){
    if(min_value>dice.get(i)){
        min=i;
        min_value=dice.get(i);
    }
}

console.log(max +" occurred "+count+" times (Max)");
console.log(min +" occurred  "+min_value+" times (Min)");