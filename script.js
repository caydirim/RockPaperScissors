const move={
    rock:"Taş",
    paper:"Kağıt",
    scissors:"Makas"
};

const situation={
    win:"Kazandınız",
    lose:"Kaybettiniz",
    tie:"Berabere"
};

function play(userMove){
    const random = Math.random();
    let computerMove;

    if(random <1/3){
        computerMove="rock";
    }else if(random <2/3){
        computerMove="paper";
    }else{
        computerMove="scissors";
    }
}

let result;

if(userMove === computerMove){
    result=situation.tie;
}else if(
    (userMove===move.rock && computerMOve === move.scissors)||
    (userMove===move.paper && computerMove === move.rock)||
    (userMove===move.scissors && computerMove === move.paper)
){
    result=situation.win;
}else{
    result=situation.lose;
}

alert(`
Sizin Hamleniz: ${userMove}
Bilgisayarın Hamlesi: ${computerMove}
Sonuç: ${result}
`);