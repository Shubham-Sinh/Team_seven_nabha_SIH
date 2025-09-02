const toggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

toggle.addEventListener("click", () => {
  mobileMenu.style.display =
    mobileMenu.style.display === "flex" ? "none" : "flex";
});

        document.addEventListener('DOMContentLoaded', function () {
            const ctx = document.getElementById('digitalDivideChart').getContext('2d');
            
            const data = {
                labels: ['Access to Modern Computers', 'Reliable Internet Access', 'Digital Literacy Rate', 'Teacher Digital Training'],
                datasets: [
                    {
                        label: 'Rural Nabha Schools',
                        data: [25, 15, 30, 20],
                        backgroundColor: '#E07A5F',
                        borderColor: '#E07A5F',
                        borderWidth: 1,
                        borderRadius: 5,
                    },
                    {
                        label: 'Urban Punjab Average',
                        data: [85, 90, 75, 80],
                        backgroundColor: '#81B29A',
                        borderColor: '#81B29A',
                        borderWidth: 1,
                        borderRadius: 5,
                    }
                ]
            };

            const options = {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            callback: function(value) {
                                return value + '%'
                            }
                        },
                        grid: {
                            display: true,
                            color: '#e0e0e0',
                            borderDash: [2, 4],
                        }
                    },
                    y: {
                        grid: {
                            display: false
                        },
                         ticks: {
                            autoSkip: false,
                            callback: function(value, index, values) {
                                const label = this.getLabelForValue(value);
                                return label.length > 16 ? label.match(/.{1,16}/g) : label;
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.x !== null) {
                                    label += context.parsed.x + '%';
                                }
                                return label;
                            }
                        }
                    }
                }
            };

            new Chart(ctx, {
                type: 'bar',
                data: data,
                options: options
            });

            const navLinks = document.querySelectorAll('.nav-link');
            const sections = document.querySelectorAll('section');

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.4
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if(entry.isIntersecting){
                        navLinks.forEach(link => {
                            link.classList.remove('active');
                            if(link.getAttribute('href').substring(1) === entry.target.id){
                                link.classList.add('active');
                            }
                        });
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });
        });