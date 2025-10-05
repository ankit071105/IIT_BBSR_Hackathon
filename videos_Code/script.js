        let isDarkMode = localStorage.getItem('theme') === 'dark';
        const htmlElement = document.documentElement;

        // Function to update the theme
        function updateTheme(isDark) {
            if (isDark) {
                htmlElement.classList.add('dark');
                document.getElementById('moon-icon').classList.add('hidden');
                document.getElementById('sun-icon').classList.remove('hidden');
                localStorage.setItem('theme', 'dark');
            } else {
                htmlElement.classList.remove('dark');
                document.getElementById('moon-icon').classList.remove('hidden');
                document.getElementById('sun-icon').classList.add('hidden');
                localStorage.setItem('theme', 'light');
            }
        }

        // Apply initial theme
        updateTheme(isDarkMode);

        // Theme Toggle 
        document.getElementById('theme-toggle').addEventListener('click', () => {
            isDarkMode = !isDarkMode;
            updateTheme(isDarkMode);
        });


        // 1. PRE-LOADER & CONTENT REVEAL
      
        window.addEventListener('load', () => {
            const loaderOverlay = document.getElementById('loader-overlay');
            const mainContent = document.getElementById('main-content');

            setTimeout(() => {
                loaderOverlay.style.opacity = '0';
                loaderOverlay.style.visibility = 'hidden';
                mainContent.style.opacity = '1';
                setTimeout(() => loaderOverlay.remove(), 500);
            }, 1000); 
        });


        // 2. LIQUID SPOTLIGHT (Mouse Follow Effect) Bubble forming

        document.addEventListener('mousemove', (e) => {
            const spotlight = document.getElementById('liquid-spotlight');
            // Move the spotlight div to the cursor position
            spotlight.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        });


        // 3. MOBILE MENU TOGGLE

        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');

        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
        });


        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('open');
            });
        });


        // 4. PROGRESS BAR

        const progressBar = document.getElementById('progress-bar');

        window.addEventListener('scroll', () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
            
            progressBar.style.width = scrollPercent + '%';
        });


        // 5. BACK TO TOP BUTTON
        const backToTopButton = document.getElementById('back-to-top');

        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });


        // 6. COUNTER ANIMATION

        const counters = document.querySelectorAll('.counter');
        const speed = 200;

        function animateCounter(counter) {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(() => animateCounter(counter), 1);
            } else {
                counter.innerText = target;
            }
        }


        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        });

        counters.forEach(counter => {
            counterObserver.observe(counter);
        });


        // 7. PARALLAX SCROLL

        const parallaxBg = document.getElementById('parallax-section');
        const parallaxOverlay = document.getElementById('parallax-overlay');
        const parallaxSpeed = 0.4; 

        window.addEventListener('scroll', () => {
            const rect = parallaxBg.getBoundingClientRect();

            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                const offset = (window.innerHeight - rect.top) * parallaxSpeed;
                parallaxOverlay.style.transform = `translateY(${offset}px)`;
            }
        });

        // 8. TABBED FEATURES

        document.querySelectorAll('.feature-tab').forEach(button => {
            const delay = button.getAttribute('data-delay') || 0;
            button.style.transitionDelay = `${delay}ms`;

            button.addEventListener('click', (e) => {
                const tabName = e.currentTarget.getAttribute('data-tab');
                document.querySelectorAll('.feature-tab').forEach(btn => {
                    btn.classList.remove('active', 'bg-primary/20', 'text-primary');
                    btn.classList.add('text-main/70', 'hover:bg-card-bg');
                });
                e.currentTarget.classList.add('active', 'bg-primary/20', 'text-primary');
                e.currentTarget.classList.remove('text-main/70', 'hover:bg-card-bg');
                document.querySelectorAll('.feature-content').forEach(content => {
                    content.style.opacity = '0';
                    content.style.display = 'none';
                    setTimeout(() => {
                        if (content.id === `content-${tabName}`) {
                            content.style.display = 'flex'; 
                            setTimeout(() => content.style.opacity = '1', 50); 
                        }
                    }, 200);
                });
            });
        });

        document.querySelectorAll('.feature-tab').forEach(btn => {
             btn.classList.remove('text-main/70', 'hover:bg-card-bg');
             btn.classList.add('px-4', 'py-2', 'rounded-full', 'font-semibold', 'transition-all', 'duration-300', 'flex-1', 'flex', 'items-center', 'justify-center', 'whitespace-nowrap');
             if (!btn.classList.contains('active')) {
                btn.classList.add('text-main/70', 'hover:bg-card-bg');
             }
        });

        // 9. CUSTOMER LOGOS INTERACTION 

        const logoSection = document.getElementById('customer-logos');
        const ctaBtn = document.getElementById('customer-cta-btn');

        logoSection.parentNode.addEventListener('mouseenter', () => {
            logoSection.style.opacity = '0.3';
            ctaBtn.style.opacity = '1';
            ctaBtn.style.transform = 'translateY(0)';
        });

        logoSection.parentNode.addEventListener('mouseleave', () => {
            logoSection.style.opacity = '1';
            ctaBtn.style.opacity = '0';
            ctaBtn.style.transform = 'translateY(4px)';
        });


        // 10. SCROLL REVEAL

        const revealOptions = {
            threshold: 0.15 
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.getAttribute('data-delay') || 0;
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, revealOptions);

        document.querySelectorAll('.scroll-reveal').forEach(el => revealObserver.observe(el));

        // 11. VIDEO MODAL

        const videoModal = document.getElementById('video-modal');
        const playReelBtn = document.getElementById('play-reel-btn');
        const closeModalBtn = document.getElementById('close-modal-btn');

        const openModal = () => {
            videoModal.style.display = 'flex';
            setTimeout(() => {
                videoModal.style.opacity = '1';
            }, 10);
            document.body.style.overflow = 'hidden';
        };

        const closeModal = () => {
            videoModal.style.opacity = '0';
            setTimeout(() => {
                videoModal.style.display = 'none';
            }, 300);
            document.body.style.overflow = '';
        };

        playReelBtn.addEventListener('click', openModal);
        closeModalBtn.addEventListener('click', closeModal);
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                closeModal();
            }
        });


        // 12. INITIALIZE ICONS

        window.onload = () => {
            lucide.createIcons();
        };


        // 13. ANIMATION ENHANCEMENTS

        const cardStyle = document.createElement('style');
        cardStyle.innerHTML += `
            @keyframes pulse-card {
                0% { transform: translateY(0) rotate(0deg) scale(1); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15); }
                50% { transform: translateY(-8px) rotate(0.8deg) scale(1.01); box-shadow: 0 15px 40px rgba(0, 0, 0, 0.25); }
                100% { transform: translateY(0) rotate(0deg) scale(1); box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15); }
            }
            .floating-card {
                animation: pulse-card 12s ease-in-out infinite alternate;
            }
        `;
        document.head.appendChild(cardStyle);


        // 14. DARK MODE IMPROVEMENTS
 
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        if (!localStorage.getItem('theme')) {
            updateTheme(prefersDarkScheme.matches);
        }
        prefersDarkScheme.addEventListener('change', (e) => {
            if (!localStorage.getItem('theme')) {
                updateTheme(e.matches);
            }
        });
        const style = document.createElement('style');
        style.textContent = `
            * {
                transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease !important;
            }
        `;
        document.head.appendChild(style);
