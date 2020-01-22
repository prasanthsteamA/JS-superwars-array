# Javascript Array

## Milestone #3: Use Array methods - filter, map and join instead of for loop.

1. In `initPlayers()`, loop through passed constant using map and  create JSON Objects, such that each player contain name, strength, image url and type.  
    * Use default `strength` as any number.  
    * `image` can be sequential i.e. "images/super-"+(i+1)+".png"  
    * `type` of player can alternating between hero and villain or your own logic
    ```javascript
    [
        {
            name:"Super Man",
            strength:100,
            img:"images/hero-1.png",
            type:"hero|villain"
        }
    ]
    ```
2. In `buildPlayers()`,Instead of using for loop, use chaining of Array methods - filter, map and join to loop through the created JSON objects and accumulate HTML 
template as below and return it.
 ```JS
<div class="player">
    <img src="${players[i].image}">
    <div class="name">${players[i].name}</div>
    <div class="strength">${players[i].strength}</div>
</div>
```