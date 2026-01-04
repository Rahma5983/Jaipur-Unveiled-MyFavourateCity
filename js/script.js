document.addEventListener('DOMContentLoaded', () => {
    // Get all flip cards
    const flipCards = document.querySelectorAll('.flip-card');

    flipCards.forEach(card => {
        // Add a click listener to each card
        card.addEventListener('click', () => {
            // Toggle the 'flipped' class on the card element
            card.classList.toggle('flipped');
        });
        
     card.addEventListener('keypress', (e) => {
            
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault(); 
                card.classList.toggle('flipped');
            }
        });
    });
});
