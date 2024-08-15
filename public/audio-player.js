document.addEventListener('DOMContentLoaded', function () {
    var audio = document.getElementById('background-music');
    var button = document.getElementById('play-audio');
    var icon = button.querySelector('i');
    var isPlaying = localStorage.getItem('audioPlaying') === 'true';

    if (audio) {
        if (isPlaying) {
            audio.play().catch(function (error) {
                console.log('Error playing audio:', error);
            });
            icon.classList.remove('fa-volume-mute');
            icon.classList.add('fa-volume-up');
        } else {
            icon.classList.remove('fa-volume-up');
            icon.classList.add('fa-volume-mute');
        }
    }

    button.addEventListener('click', function () {
        if (audio) {
            if (isPlaying) {
                audio.pause();
                icon.classList.remove('fa-volume-up');
                icon.classList.add('fa-volume-mute');
                localStorage.setItem('audioPlaying', 'false');
                isPlaying = false;
            } else {
                audio.play().catch(function (error) {
                    console.log('Error playing audio:', error);
                });
                icon.classList.remove('fa-volume-mute');
                icon.classList.add('fa-volume-up');
                localStorage.setItem('audioPlaying', 'true');
                isPlaying = true;
            }
        }
    });
});
