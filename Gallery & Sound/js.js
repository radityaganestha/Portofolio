let currentSound = 0;
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', ()=>{
        if(panel.classList.contains('active')){
            panel.classList.remove('active')
            if(currentSound){
                currentSound.pause();
                currentSound.currentTime = 0;
            }
        }
        else{
        removeActiveClasses()
        panel.classList.add('active')
        playSound(panel)
    }
    })
})

function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active')
    })
}

function playSound(panel){
    if(currentSound){
        currentSound.pause();
        currentSound.currentTime = 0;
    }

    const soundId = panel.getAttribute('soundg');
    const sound = document.getElementById(soundId);
    if(sound){
        sound.play();
        currentSound = sound;
    }
}