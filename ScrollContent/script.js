const boxes = document.querySelectorAll('.box');
const audioButtons = document.querySelectorAll('.button');
let currentSound = null;

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes(){
    const triggerRight = window.innerWidth / 5 * 4; 

    boxes.forEach(box => {
        const boxLeft = box.getBoundingClientRect().left; // Mengambil posisi elemen dari kiri
        if (boxLeft < triggerRight) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    })
}


audioButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Mengambil elemen audio yang berada setelah tombol
        const audio = button.nextElementSibling;
        toggleSound(audio);
    });
});

function toggleSound(sound) {
    if (currentSound === sound && !sound.paused) {
        // Jika tombol yang sama diklik dan audio sedang diputar, pause dan reset
        sound.pause();
        sound.currentTime = 0;
        currentSound = null;
    } else {
        // Jika ada audio yang sedang diputar dan itu bukan audio saat ini, pause audio sebelumnya
        if (currentSound && !currentSound.paused) {
            currentSound.pause();
            currentSound.currentTime = 0;
        }
        // Memutar audio baru
        sound.play();
        currentSound = sound;
    }
}