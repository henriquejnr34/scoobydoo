document.addEventListener('DOMContentLoaded', () => {
    const envelope = document.getElementById('envelope');
    const instruction = document.querySelector('.instruction');
    const daphneSection = document.querySelector('.daphne-shrine');

    // Header Elements for text swapping
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero .subtitle');
    const rbLogo = document.querySelector('.rb-logo'); // Get logo
    const originalTitle = heroTitle.dataset.text;
    const originalSubtitle = heroSubtitle.textContent;

    let isOpen = false;
    let canClose = false;

    envelope.addEventListener('click', () => {
        if (!isOpen) {
            // OPEN ACTION
            openEnvelope();
        } else if (canClose) {
            // CLOSE ACTION
            closeEnvelope();
        }
    });

    function openEnvelope() {
        isOpen = true;
        envelope.classList.add('open');
        instruction.style.opacity = '0';
        instruction.textContent = '';

        // Hide Logo
        rbLogo.classList.add('hidden');

        // Trigger Daphne Mode
        document.body.classList.add('daphne-mode');

        // Reveal Daphne & Swap Text after delay
        setTimeout(() => {
            daphneSection.classList.add('reveal');

            // Swap Text when reveals
            heroTitle.textContent = "PARA DAFNY";
            heroTitle.dataset.text = "PARA DAFNY";
            heroSubtitle.textContent = "POR FAVOR NÃO ME DEMITE";
        }, 600);

        // Enable Closing after 3 seconds
        setTimeout(() => {
            canClose = true;
            instruction.textContent = 'Tap to Close';
            instruction.style.opacity = '0.5';
        }, 3000);
    }

    function closeEnvelope() {
        isOpen = false;
        canClose = false;

        envelope.classList.remove('open');
        instruction.textContent = 'Tap to Open';
        instruction.style.opacity = '1';

        // Revert Mode
        document.body.classList.remove('daphne-mode');
        daphneSection.classList.remove('reveal');
        rbLogo.classList.remove('hidden'); // Show logo

        // Revert Text
        // Reset to original Red Bull text (hardcoded or from storage if we saved it robustly)
        heroTitle.textContent = "VERSTAPPEN 2026";
        heroTitle.dataset.text = "RB22 STRATEGY";
        heroSubtitle.textContent = originalSubtitle;
    }
});
