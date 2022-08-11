let musicBtn=document.getElementById('musicBtn')

const loop = new Tone.Loop(repeat, "8n").start(0);
let index=0

musicBtn.onclick=function(){
    if(musicBtn.innerHTML=="Play"){
        musicBtn.innerHTML="Stop"
        Tone.Transport.start();
    }
    else{
        musicBtn.innerHTML="Play"
        Tone.Transport.stop();
    }
}

function repeat(){
    const sound1 = new Tone.Player("Samples/clap-808.wav").toDestination();
    const sound1CurrNote="s1n"+((index%8)+1)
    if(document.getElementById(sound1CurrNote).checked){
        sound1.autostart=true;
    }

    const sound2=new Tone.Player("Samples/kick-808.wav").toDestination()
    const sound2CurrNote="s2n"+((index%8)+1)
    if(document.getElementById(sound2CurrNote).checked){
        sound2.autostart=true;
    }

    const sound3=new Tone.Player("Samples/kick-heavy.wav").toDestination()
    const sound3CurrNote="s3n"+((index%8)+1)
    if(document.getElementById(sound3CurrNote).checked){
        sound3.autostart=true;
    }

    const sound4=new Tone.Player("Samples/hihat-808.wav").toDestination()
    const sound4CurrNote="s4n"+((index%8)+1)
    if(document.getElementById(sound4CurrNote).checked){
        sound4.autostart=true;
    }

    index++
}

const beat=document.getElementById('beat')
beat.onclick=function(){
    for(let i=0;i<8;i++){
        let newCheck1=document.getElementById('s1n'+(i+1))
        if(i==1||i==3||i>6){
            newCheck1.checked=true
        }
        else{
            newCheck1.checked=false
        }

    }
    for(let i=0;i<8;i++){
        let newCheck2=document.getElementById('s2n'+(i+1))
        if(i==2){
            newCheck2.checked=true
        }
        else{
            newCheck2.checked=false
        }

    }
    for(let i=0;i<8;i++){
        let newCheck3=document.getElementById('s3n'+(i+1))
        if(i==0||i==4){
            newCheck3.checked=true
        }
        else{
            newCheck3.checked=false
        }

    }
    for(let i=0;i<8;i++){
        let newCheck4=document.getElementById('s4n'+(i+1))
        if(i==1||i==3||i>4){
            newCheck4.checked=true
        }
        else{
            newCheck4.checked=false
        }

    }
}