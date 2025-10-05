
        const video = document.getElementById('myVideo');
        const overlay = document.getElementById('video-overlay');
        const playPauseBtn = document.getElementById('play-pause');
        const playPauseIcon = playPauseBtn.querySelector('i');
        const progress = document.getElementById('progress');
        const currentTimeEl = document.getElementById('current-time');
        const durationEl = document.getElementById('duration');
        const muteUnmuteBtn = document.getElementById('mute-unmute');
        const muteUnmuteIcon = muteUnmuteBtn.querySelector('i');
        const fullscreenBtn = document.getElementById('fullscreen');
        

        function formatTime(seconds) {
            const mins = Math.floor(seconds / 60);
            const secs = Math.floor(seconds % 60);
            return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
        }

        function updateProgress() {
            const percent = (video.currentTime / video.duration) * 100;
            progress.style.width = `${percent}%`;
            currentTimeEl.textContent = formatTime(video.currentTime);
        }
        

        function togglePlayPause() {
            if (video.paused) {
                video.play();
                playPauseIcon.className = 'fas fa-pause text-xl';
                overlay.style.display = 'none';
            } else {
                video.pause();
                playPauseIcon.className = 'fas fa-play text-xl';
            }
        }
        

        function toggleMuteUnmute() {
            video.muted = !video.muted;
            muteUnmuteIcon.className = video.muted ? 'fas fa-volume-mute' : 'fas fa-volume-up';
        }
        

        function toggleFullscreen() {
            if (!document.fullscreenElement) {
                video.requestFullscreen().catch(err => {
                    console.log(`Error attempting to enable fullscreen: ${err.message}`);
                });
            } else {
                document.exitFullscreen();
            }
        }
        

        video.addEventListener('loadedmetadata', () => {
            durationEl.textContent = formatTime(video.duration);
        });
        

        video.addEventListener('timeupdate', updateProgress);
        

        video.addEventListener('click', togglePlayPause);
        

        overlay.addEventListener('click', togglePlayPause);
        

        playPauseBtn.addEventListener('click', togglePlayPause);
        

        muteUnmuteBtn.addEventListener('click', toggleMuteUnmute);

        fullscreenBtn.addEventListener('click', toggleFullscreen);


        progress.parentElement.addEventListener('click', (e) => {
            const rect = progress.parentElement.getBoundingClientRect();
            const percent = (e.clientX - rect.left) / rect.width;
            video.currentTime = percent * video.duration;
        });
        

        function checkScroll() {
            const elements = document.querySelectorAll('.scroll-animation');
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                
                if (elementTop < windowHeight - 100) {
                    element.classList.add('animate');
                }
            });
        }
        
        window.addEventListener('scroll', checkScroll);
        window.addEventListener('load', checkScroll);
