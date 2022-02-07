//Game

let player = {ability: 0, x:0};
let computer = {ability: 0, x:0};
let roundWinner='';

function play(obj, selection){
    if(selection === 'BULLET'){
        obj.ability++;
        obj.x=0;
    }
    if(selection === 'GUN'){
        obj.ability--;
        obj.x=1;
    }
    if(selection === 'DUEL'){
        obj.ability-=2;
        obj.x=2;
    }
    if(selection === 'CANNON'){
        obj.ability-=3;
        obj.x=3;
    }
    if(selection === 'SHIELD-1'){
        obj.x=-1;
    }
    if(selection === 'SHIELD-2'){
        obj.x=-2;
    }
    if(selection === 'SHIELD-3'){
        obj.x=-3;
    }
}
function decide(px, cx){
    if(px+cx===0) roundWinner='tie';
    else if(px>cx) roundWinner='won';
    else if(px<cx) roundWinner='lost';
}
function isGameOver(){
    return roundWinner === 'won' || roundWinner === 'lost';
}
function getRandomChoice(cobj, pobj){ 
    let n = 1 + cobj.ability + pobj.ability;
    let randomNumber = Math.floor(Math.random()*n);
    if(pobj.ability===0){
        if(cobj.ability===0){
            return 'BULLET';
        }
        else if(cobj.ability===1){
            switch(randomNumber){
                case 0:
                    return 'BULLET';
                case 1:
                    return 'GUN';
            }
        }
        else if(cobj.ability===2){
            switch(randomNumber){
                case 0:
                    return 'BULLET';
                case 1:
                    return 'GUN';
                case 2:
                    return 'DUEL';
            }
        }
        else if(cobj.ability===3){
            switch(randomNumber){
                case 0:
                    return 'CANNON';
                case 1:
                    return 'GUN';
                case 2:
                    return 'DUEL';
                case 3:
                    return 'CANNON';
            }
        }
    }
    else if(pobj.ability===1){
        if(cobj.ability===0){
            switch(randomNumber){
                case 0:
                    return 'BULLET';
                case 1:
                    return 'SHIELD-1';
            }
        }
        else if(cobj.ability===1){
            switch(randomNumber){
                case 0:
                    return 'BULLET';
                case 1:
                    return 'GUN';
                case 2:
                    return 'SHIELD-1';
            }
        }
        else if(cobj.ability===2){
            switch(randomNumber){
                case 0:
                    return 'BULLET';
                case 1:
                    return 'GUN';
                case 2:
                    return 'SHIELD-1';
                case 3:
                    return 'DUEL';
            }
        }
        else if(cobj.ability===3){
            switch(randomNumber){
                case 0:
                    return 'CANNON';
                case 1:
                    return 'GUN';
                case 2:
                    return 'DUEL';
                case 3:
                    return 'CANNON';
                case 4:
                    return 'SHIELD-1';
            }
        }
    }
    else if(pobj.ability===2){
        if(cobj.ability===0){
            switch(randomNumber){
                case 0:
                    return 'BULLET';
                case 1:
                    return 'SHIELD-1';
                case 2:
                    return 'SHIELD-2';
            }
        }
        else if(cobj.ability===1){
            switch(randomNumber){
                case 0:
                    return 'BULLET';
                case 1:
                    return 'GUN';
                case 2:
                    return 'SHIELD-1';
                case 3:
                    return 'SHIELD-2';
            }
        }
        else if(cobj.ability===2){
            switch(randomNumber){
                case 0:
                    return 'BULLET';
                case 1:
                    return 'GUN';
                case 2:
                    return 'SHIELD-1';
                case 3:
                    return 'DUEL';
                case 4:
                    return 'SHIELD-2';
            }
        }
        else if(cobj.ability===3){
            switch(randomNumber){
                case 0:
                    return 'CANNON';
                case 1:
                    return 'GUN';
                case 2:
                    return 'DUEL';
                case 3:
                    return 'CANNON';
                case 4:
                    return 'SHIELD-1';
                case 5:
                    return 'SHIELD-2';
            }
        }
    }
    else if(pobj.ability===3){
        if(cobj.ability===0){
            switch(randomNumber){
                case 0:
                    return 'BULLET';
                case 1:
                    return 'SHIELD-1';
                case 2:
                    return 'SHIELD-2';
                case 3:
                    return 'SHIELD-3';
            }
        }
        else if(cobj.ability===1){
            switch(randomNumber){
                case 0:
                    return 'BULLET';
                case 1:
                    return 'GUN';
                case 2:
                    return 'SHIELD-1';
                case 3:
                    return 'SHIELD-2';
                case 4:
                    return 'SHIELD-3';
            }
        }
        else if(cobj.ability===2){
            switch(randomNumber){
                case 0:
                    return 'BULLET';
                case 1:
                    return 'GUN';
                case 2:
                    return 'SHIELD-1';
                case 3:
                    return 'DUEL';
                case 4:
                    return 'SHIELD-2';
                case 5:
                    return 'SHIELD-3';
            }
        }
        else if(cobj.ability===3){
            switch(randomNumber){
                case 0:
                    return 'CANNON';
                case 1:
                    return 'GUN';
                case 2:
                    return 'DUEL';
                case 3:
                    return 'CANNON';
                case 4:
                    return 'SHIELD-1';
                case 5:
                    return 'SHIELD-2';
                case 6:
                    return 'SHIELD-3';
            }
        }
    }
}




//UI
const shield3Btn = document.getElementById('de-3Btn');
const shield2Btn = document.getElementById('de-2Btn');
const shield1Btn = document.getElementById('de-1Btn');
const bulletBtn = document.getElementById('buBtn');
const gun3Btn = document.getElementById('gun-3Btn');
const gun2Btn = document.getElementById('gun-2Btn');
const gun1Btn = document.getElementById('gun-1Btn');
const cantUse = document.querySelector('.cantUse');

bulletBtn.addEventListener('click', ()=>handleClick("BULLET"))
gun1Btn.addEventListener('click', ()=>handleClick("GUN"))
shield1Btn.addEventListener('click', ()=>handleClick("SHIELD-1"))
gun2Btn.addEventListener('click', ()=>handleClick("DUEL"))
shield2Btn.addEventListener('click', ()=>handleClick("SHIELD-2"))
gun3Btn.addEventListener('click', ()=>handleClick("CANNON"))
shield3Btn.addEventListener('click', ()=>handleClick("SHIELD-3"))


const cantUse_shield3Btn = document.getElementById('de-3');
const cantUse_shield2Btn = document.getElementById('de-2');
const cantUse_shield1Btn = document.getElementById('de-1');
const cantUse_bulletBtn = document.getElementById('bu');
const cantUse_gun3Btn = document.getElementById('gun-3');
const cantUse_gun2Btn = document.getElementById('gun-2');
const cantUse_gun1Btn = document.getElementById('gun-1');


function handleClick(playerSelection){
    if(isGameOver()){
        return;
    }
    const computerSelection = getRandomChoice(computer, player);
    play(computer, computerSelection);
    document.getElementById("computerSign").src=`image/${computerSelection.toLowerCase()}.png`;
    document.getElementById("computerPrgh").textContent=`${computerSelection}`;
    
    play(player, playerSelection);
    document.getElementById("playerSign").src=`image/${playerSelection.toLowerCase()}.png`;
    document.getElementById("playerPrgh").textContent=`${playerSelection}`;


    if(player.x >0 || computer.x>0){
        decide(player.x, computer.x);
    }
    updateChoice(player.ability, computer.ability);
    if(isGameOver()){
        openEndModal();
        document.getElementById("msg").textContent=`You ${roundWinner}`
    }
}

function updateChoice(pability, cability){
    if(pability === 0){
        cantUse_gun1Btn.classList.add('active');
        cantUse_gun2Btn.classList.add('active');
        cantUse_gun3Btn.classList.add('active');
        cantUse_bulletBtn.classList.remove('active');

    }
    else if(pability === 1){
        cantUse_gun1Btn.classList.remove('active');
        cantUse_gun2Btn.classList.add('active');
        cantUse_gun3Btn.classList.add('active');
        cantUse_bulletBtn.classList.remove('active');

    }
    else if(pability === 2){
        cantUse_gun1Btn.classList.remove('active');
        cantUse_gun2Btn.classList.remove('active');
        cantUse_gun3Btn.classList.add('active');
        cantUse_bulletBtn.classList.remove('active');

    }
    else if(pability === 3){
        cantUse_gun1Btn.classList.remove('active');
        cantUse_gun2Btn.classList.remove('active');
        cantUse_gun3Btn.classList.remove('active');
        cantUse_bulletBtn.classList.add('active');
        
    }
    if(cability === 0){
        cantUse_shield1Btn.classList.add('active');
        cantUse_shield2Btn.classList.add('active');
        cantUse_shield3Btn.classList.add('active');
    }
    else if(cability === 1){
        cantUse_shield1Btn.classList.remove('active');
        cantUse_shield2Btn.classList.add('active');
        cantUse_shield3Btn.classList.add('active');
    }
    else if(cability === 2){
        cantUse_shield1Btn.classList.remove('active');
        cantUse_shield2Btn.classList.remove('active');
        cantUse_shield3Btn.classList.add('active');
    }
    else if(cability === 3){
        cantUse_shield1Btn.classList.remove('active');
        cantUse_shield2Btn.classList.remove('active');
        cantUse_shield3Btn.classList.remove('active');
    }
}

const endModal = document.getElementById("endModal");
const overlay = document.getElementById("overlay");
endModal.addEventListener('click', restartGame);
overlay.addEventListener('click', closeEndModal);

function openEndModal(){
    endModal.classList.add('active');
    overlay.classList.add('active');
}
function closeEndModal(){
    endModal.classList.remove('active');
    overlay.classList.remove('active');
}
function restartGame(){
    player = {ability: 0, x:0};
    computer = {ability: 0, x:0};
    roundWinner='';
    document.getElementById("playerPrgh").textContent=" ";
    document.getElementById("playerSign").src=" ";
    document.getElementById("computerPrgh").textContent=" ";
    document.getElementById("computerSign").src=" ";
    cantUse_gun1Btn.classList.add('active');
    cantUse_gun2Btn.classList.add('active');
    cantUse_gun3Btn.classList.add('active');
    cantUse_shield1Btn.classList.add('active');
    cantUse_shield2Btn.classList.add('active');
    cantUse_shield3Btn.classList.add('active');
    endModal.classList.remove('active');
    overlay.classList.remove('active');
    
}