document.addEventListener('DOMContentLoaded', () => {
    
    const container = document.querySelector('.container');
    const sections = document.querySelectorAll('.snap-section, .no-snap-section');
    const lastSection = sections[sections.length - 1];

    container.addEventListener('scroll', () => {
        
        const lastSectionTop = lastSection.offsetTop;
        const scrollPosition = container.scrollTop + container.clientHeight;

        if (scrollPosition >= lastSectionTop) {
            container.style.scrollSnapType = 'none';
        } else {
            container.style.scrollSnapType = 'y mandatory';
        }
    });
});