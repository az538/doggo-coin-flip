let haks = Math.floor(Math.random() * 101);
var element = document.querySelector("#coin");
const img = document.querySelector("img"); 

function ratMeat(){
    document.getElementById("coin").src = 'question coin.png';
   document.querySelector('#spinnerino').innerHTML = ('Flipping Coin')
    haks = Math.floor(Math.random() * 101);
    document.getElementById("coin").className = "spin";
    if(haks <= 50){
        window.setTimeout(function(){document.getElementById("coin").classList.remove("spin");
        
        document.getElementById("coin").classList.remove("mystyle");
        document.getElementById('para').innerHTML = ("heads")
        document.getElementById('spinnerino').innerHTML = ("")
        document.getElementById("coin").src = 'shiba heads.png';
        console.log(haks) ; }, 3000);
        

    }
    if(haks >= 50){
        setTimeout(function(){document.getElementById("coin").classList.remove("spin");

        
        console.log(document.getElementById("coin").classList)
        document.getElementById('para').innerHTML = ("tails")
        document.getElementById('spinnerino').innerHTML = ("")
        document.getElementById("coin").src = 'shiba token.png';
        console.log(haks)  }, 3000);
        
    }
}

