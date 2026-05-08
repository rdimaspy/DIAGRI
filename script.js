// DIAGRI Company Website - JavaScript
// This file handles interactive behaviors for the website

// Configuration and Constants
const config = {
    scrollBehavior: 'smooth',
    transitionDuration: 300
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    initializeNavigation();
    
    // Initialize keyboard navigation
    initializeKeyboardNavigation();
    
    // Handle image loading errors
    handleImageErrors();
    
    console.log('DIAGRI website initialized successfully');
});

/**
 * Initialize smooth scrolling navigation
 */
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: config.scrollBehavior,
                    block: 'start'
                });
                
                // Set focus to the target section for screen readers
                targetSection.setAttribute('tabindex', '-1');
                targetSection.focus();
            } else {
                console.error(`Section not found: ${targetId}`);
            }
        });
    });
}

/**
 * Initialize keyboard navigation support
 * Ensures all interactive elements support Enter key activation
 */
function initializeKeyboardNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('keydown', function(e) {
            // Enter key (13) or Space key (32) should activate the link
            if (e.key === 'Enter' || e.keyCode === 13) {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // Ensure all links are keyboard accessible
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
        // Ensure links have proper tabindex (0 for focusable, -1 for programmatic focus only)
        if (!link.hasAttribute('tabindex')) {
            link.setAttribute('tabindex', '0');
        }
    });
}

/**
 * Handle image loading errors gracefully
 */
function handleImageErrors() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            this.style.display = 'none';
            console.warn(`Failed to load image: ${this.src}`);
        });
    });
}

/**
 * Utility function to scroll to a specific section
 * @param {string} sectionId - The ID of the section to scroll to
 */
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    
    if (section) {
        section.scrollIntoView({
            behavior: config.scrollBehavior,
            block: 'start'
        });
    } else {
        console.error(`Section not found: ${sectionId}`);
    }
}
