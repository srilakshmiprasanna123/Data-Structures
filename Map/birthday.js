let personBirthmonth = new Map();
for(let person = 1; person<=50 ; person++)
{
    let birthmonth = (Math.floor(Math.random() * 100) % 12) + 1;
    personBirthmonth.set(person, birthmonth);
}
for(let month = 1; month <= 12; month++)
{
    let sameMonth = [...personBirthmonth.entries()].filter(([a,b]) => b == month).map(([c,d]) => c);
    console.log("People with birthday in month " + month);
    console.log(sameMonth);
}