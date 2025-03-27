document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
            
           
            if (navLinks.classList.contains('active')) {
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    });
    
    
    const animatedText = document.querySelector('.animated-text');
    const originalText = animatedText.textContent;
    
    function animateText() {
        let i = 0;
        animatedText.textContent = '';
        
        function typeWriter() {
            if (i < originalText.length) {
                animatedText.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            } else {
              
                setTimeout(() => {
                    animatedText.style.opacity = '0';
                    setTimeout(() => {
                        animatedText.textContent = '';
                        animatedText.style.opacity = '1';
                        setTimeout(animateText, 1000);
                    }, 500);
                }, 2000);
            }
        }
        
        typeWriter();
    }
    
    animateText();
    
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        let floating = true;
        let position = 0;
        let direction = 1;
        
        function floatImage() {
            if (!floating) return;
            
            position += 0.5 * direction;

            if (position > 10) direction = -1;
            if (position < -10) direction = 1;
            
            profileImg.style.transform = `translateY(${position}px)`;
            requestAnimationFrame(floatImage);
        }
        
        floatImage();
        
        profileImg.addEventListener('mouseenter', () => {
            floating = false;
            profileImg.style.transform = 'translateY(0)';
        });
        
        profileImg.addEventListener('mouseleave', () => {
            floating = true;
            floatImage();
        });
    }

    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! I will get back to you soon.');
            this.reset();
        });
    }

window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    const circle1 = document.querySelector('.deco-circle-1');
    const circle2 = document.querySelector('.deco-circle-2');
    
    if (circle1 && circle2) {
        circle1.style.transform = `translate(${x * 20}px, ${y * 20}px)`;
        circle2.style.transform = `translate(${-x * 20}px, ${-y * 20}px)`;
    }
});


function animateText() {
    const colors = ['#5cd6d6', '#8a89c0', '#b8b8ff', '#89c0c0'];
    let i = 0;
    animatedText.textContent = '';
    animatedText.style.backgroundImage = 'none';
    
    function typeWriter() {
        if (i < originalText.length) {
            const span = document.createElement('span');
            span.textContent = originalText.charAt(i);
            span.style.color = colors[Math.floor(Math.random() * colors.length)];
            animatedText.appendChild(span);
            i++;
            setTimeout(typeWriter, 50);
        } else {
            setTimeout(() => {
                animatedText.style.opacity = '0';
                setTimeout(() => {
                    animatedText.textContent = '';
                    animatedText.style.opacity = '1';
                    setTimeout(animateText, 1000);
                }, 500);
            }, 2000);
        }
    }
    typeWriter();
}
});