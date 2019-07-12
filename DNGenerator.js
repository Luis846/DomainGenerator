let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];

var finalSentence = [];
for (let i = 0; i < pronoun.length; i++) {
        for(let x = 0; x < adj[i].length; x++) {
            for(let j = 0; j < noun[x].length; j++){
                finalSentence.push(finalSentence[i]+[x]+[j]);
            }
        }
    }
    console.log(finalSentence);

