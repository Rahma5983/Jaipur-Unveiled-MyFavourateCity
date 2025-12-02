document.addEventListener('DOMContentLoaded', () => {
    // Get all flip cards
    const flipCards = document.querySelectorAll('.flip-card');

    flipCards.forEach(card => {
        // Add a click listener to each card
        card.addEventListener('click', () => {
            // Toggle the 'flipped' class on the card element
            card.classList.toggle('flipped');
        });
        
        // Optional: Add accessibility features (keyboard interaction)
        card.addEventListener('keypress', (e) => {
            // Check if Enter (13) or Space (32) was pressed
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); // Prevent default scroll for spacebar
                card.classList.toggle('flipped');
            }
        });
    });
});