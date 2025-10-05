        function createStars() {
            const spaceBg = document.getElementById('space-bg');
            const starCount = 150;
            
            for (let i = 0; i < starCount; i++) {
                const star = document.createElement('div');
                star.classList.add('star');
                
                // Random position
                const x = Math.random() * 100;
                const y = Math.random() * 100;
                
                // Random size
                const size = Math.random() * 3;
                
                // Random animation delay
                const delay = Math.random() * 5;
                
                star.style.left = `${x}%`;
                star.style.top = `${y}%`;
                star.style.width = `${size}px`;
                star.style.height = `${size}px`;
                star.style.animationDelay = `${delay}s`;
                
                spaceBg.appendChild(star);
            }
        }

        // Custom cursor
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
            
            setTimeout(() => {
                cursorFollower.style.left = e.clientX + 'px';
                cursorFollower.style.top = e.clientY + 'px';
            }, 100);
        });

        // Scroll animations
        function checkScroll() {
            const elements = document.querySelectorAll('.scroll-animation');
            
            elements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    element.classList.add('visible');
                }
            });
        }

        // Charts for CarbonTrack Pro
        function initializeCharts() {
            // Carbon Emissions Chart
            const carbonCtx = document.getElementById('carbonChart').getContext('2d');
            const carbonChart = new Chart(carbonCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                    datasets: [{
                        label: 'Carbon Emissions (tons)',
                        data: [120, 110, 105, 95, 90, 85],
                        borderColor: '#64ffda',
                        backgroundColor: 'rgba(100, 255, 218, 0.1)',
                        borderWidth: 2,
                        tension: 0.4,
                        fill: true
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                color: '#e6f1ff'
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(136, 146, 176, 0.2)'
                            },
                            ticks: {
                                color: '#8892b0'
                            }
                        },
                        x: {
                            grid: {
                                color: 'rgba(136, 146, 176, 0.2)'
                            },
                            ticks: {
                                color: '#8892b0'
                            }
                        }
                    }
                }
            });

            // Emission Sources Chart
            const sourcesCtx = document.getElementById('sourcesChart').getContext('2d');
            const sourcesChart = new Chart(sourcesCtx, {
                type: 'doughnut',
                data: {
                    labels: ['Transportation', 'Energy', 'Manufacturing', 'Agriculture', 'Waste'],
                    datasets: [{
                        data: [35, 25, 20, 15, 5],
                        backgroundColor: [
                            '#64ffda',
                            '#4fd1c5',
                            '#38b2ac',
                            '#319795',
                            '#2c7a7b'
                        ],
                        borderWidth: 0
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: {
                                color: '#e6f1ff',
                                padding: 15
                            }
                        }
                    }
                }
            });

            // Reduction Progress Chart
            const progressCtx = document.getElementById('progressChart').getContext('2d');
            const progressChart = new Chart(progressCtx, {
                type: 'bar',
                data: {
                    labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                    datasets: [{
                        label: 'Reduction Target',
                        data: [100, 75, 50, 25],
                        backgroundColor: 'rgba(100, 255, 218, 0.3)',
                        borderColor: '#64ffda',
                        borderWidth: 1
                    }, {
                        label: 'Actual Reduction',
                        data: [95, 70, 45, 20],
                        backgroundColor: 'rgba(230, 241, 255, 0.3)',
                        borderColor: '#e6f1ff',
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            labels: {
                                color: '#e6f1ff'
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: true,
                            grid: {
                                color: 'rgba(136, 146, 176, 0.2)'
                            },
                            ticks: {
                                color: '#8892b0'
                            }
                        },
                        x: {
                            grid: {
                                color: 'rgba(136, 146, 176, 0.2)'
                            },
                            ticks: {
                                color: '#8892b0'
                            }
                        }
                    }
                }
            });
        }

        // Initialize
        window.addEventListener('load', () => {
            createStars();
            checkScroll();
            initializeCharts();
        });

        window.addEventListener('scroll', checkScroll);
