// Mobile Navigation Toggle
        const hamburger = document.getElementById('hamburger');
        const navLinks = document.getElementById('navLinks');

        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu on link click
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // Interactive 3D Book Rotation Effect
        const scene = document.getElementById('scene');
        const book = document.getElementById('book');

        scene.addEventListener('mousemove', (e) => {
            const rect = scene.getBoundingClientRect();
            const x = e.clientX - rect.left - (rect.width / 2);
            const y = e.clientY - rect.top - (rect.height / 2);
            
            const rotateY = (x / (rect.width / 2)) * 45;
            const rotateX = -(y / (rect.height / 2)) * 45;

            book.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        scene.addEventListener('mouseleave', () => {
            book.style.transform = `rotateX(20deg) rotateY(-30deg)`;
        });

        // FAQ Accordion Toggle
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                faqItems.forEach(i => i.classList.remove('active'));
                if (!isActive) {
                    item.classList.add('active');
                }
            });
        });

        // Form Submit Handler
        function handleFormSubmit(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            alert(`Thank you, ${name}! Your enquiry has been received. Our team will contact you shortly.`);
            document.getElementById('orderForm').reset();
        }