const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
const initPlayers = (players) => {
    let detailedPlayers = '';
    let isHero=false;
     detailedPlayers=players.map((player,i)=>{
        isHero=!isHero;
        return{
           name:player,
           strength:getRandomStrength(),
            image:`./images/super-${i+1}.png`,
          type:isHero?"hero":"villain"
         
            };


    })
    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    return Math.ceil(Math.random() * 100);
}

// Build player template
const buildPlayers = (players, type) => {
    let fragment = '';

    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here

//     for (let i=0 ; i<players.length;i++){
//         if(players[i].type==type){
//         fragment+= `<div class="player">
//     <img src="${players[i].image}" alt="">
//     <div class="name">${players[i].name}</div>
//     <div class="strength">${players[i].strength}</div>
// </div>`
//         }
          
//     }

fragment=((players.filter((player)=>{return player.type==type})).map((filteredplayer,i)=>{return (
    `<div class="player">
    <img src="${filteredplayer.image}" alt="">
    <div class="name">${filteredplayer.name}</div>
    <div class="strength">${filteredplayer.strength}</div>
</div>`
)
}) ).join("")



    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}