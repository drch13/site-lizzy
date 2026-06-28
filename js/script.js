/**
 * Script JavaScript pour le site Lizzy Tricot
 * Ajoute des fonctionnalités interactives et des animations
 */

// Attendre que le DOM soit chargé
window.addEventListener('DOMContentLoaded', function() {
    // Animation au défilement
    animateOnScroll();
    
    // Menu mobile (si nécessaire)
    setupMobileMenu();
    
    // Effet de survol sur les cartes produits
    setupProductCards();
    
    // Validation du formulaire de contact
    setupFormValidation();
});

/**
 * Animation des éléments au défilement
 */
function animateOnScroll() {
    const animatedElements = document.querySelectorAll('.carte-produit, .section-apropos, .hero');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

/**
 * Configuration du menu mobile
 */
function setupMobileMenu() {
    // Si on ajoute un bouton menu mobile plus tard
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const nav = document.querySelector('nav ul');
    
    if (mobileMenuButton && nav) {
        mobileMenuButton.addEventListener('click', function() {
            nav.classList.toggle('mobile-menu-open');
        });
    }
}

/**
 * Effets sur les cartes produits
 */
function setupProductCards() {
    const productCards = document.querySelectorAll('.carte-produit');
    
    productCards.forEach(card => {
        // Ajouter un effet de survol
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
}

/**
 * Validation et soumission du formulaire de contact
 */
function setupFormValidation() {
    const contactForm = document.getElementById('formulaire-contact');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {

            // Récupérer les champs
            const nom = document.getElementById('nom');
            const email = document.getElementById('email');
            const sujet = document.getElementById('sujet');
            const message = document.getElementById('message');

            // Réinitialiser les erreurs
            clearErrors();

            // Valider les champs
            let isValid = true;
            if (!nom.value.trim()) {
                showError(nom, 'Veuillez entrer votre nom');
                isValid = false;
            }
            if (!email.value.trim()) {
                showError(email, 'Veuillez entrer votre email');
                isValid = false;
            } else if (!isValidEmail(email.value.trim())) {
                showError(email, 'Veuillez entrer un email valide');
                isValid = false;
            }
            if (!sujet.value.trim()) {
                showError(sujet, 'Veuillez entrer un sujet');
                isValid = false;
            }
            if (!message.value.trim()) {
                showError(message, 'Veuillez entrer votre message');
                isValid = false;
            }

            if (!isValid) {
                e.preventDefault(); // Bloquer la soumission si invalide
            }
            // Si valide, laisser Formspree gérer la soumission
        });
    }
}

/**
 * Afficher une erreur pour un champ spécifique
 */
function showError(input, message) {
    const formGroup = input.closest('.groupe-formulaire');
    // Supprimer d'éventuelles erreurs existantes pour ce champ
    const existingError = formGroup.querySelector('.error-message');
    if (existingError) existingError.remove();

    const errorElement = document.createElement('p');
    errorElement.className = 'error-message';
    errorElement.textContent = message;
    errorElement.style.color = '#dc3545';
    errorElement.style.fontSize = '0.9rem';
    errorElement.style.marginTop = '5px';
    formGroup.appendChild(errorElement);

    input.style.borderColor = '#dc3545';
}

/**
 * Effacer toutes les erreurs de champ
 */
function clearErrors() {
    const errorMessages = document.querySelectorAll('.groupe-formulaire .error-message');
    errorMessages.forEach(msg => msg.remove());

    const inputs = document.querySelectorAll('.groupe-formulaire input, .groupe-formulaire textarea');
    inputs.forEach(input => {
        input.style.borderColor = '';
    });
}

/**
 * Afficher un message de succès global (sous le formulaire)
 */
function showSuccessMessage(message) {
    const form = document.getElementById('formulaire-contact');
    // Supprimer d'éventuels messages précédents
    const oldMessages = form.querySelectorAll('.form-message');
    oldMessages.forEach(msg => msg.remove());

    const successElement = document.createElement('div');
    successElement.className = 'form-message success-message';
    successElement.textContent = message;
    form.appendChild(successElement);

    // Supprimer le message après 5 secondes
    setTimeout(() => {
        successElement.remove();
    }, 5000);
}

/**
 * Afficher un message d'erreur global (sous le formulaire)
 */
function showErrorMessage(message) {
    const form = document.getElementById('formulaire-contact');
    // Supprimer d'éventuels messages précédents
    const oldMessages = form.querySelectorAll('.form-message');
    oldMessages.forEach(msg => msg.remove());

    const errorElement = document.createElement('div');
    errorElement.className = 'form-message error-message';
    errorElement.textContent = message;
    form.appendChild(errorElement);
}

/**
 * Valider un email
 */
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Fonctions utilitaires pour les classes
 */
function addClass(element, className) {
    if (element) element.classList.add(className);
}
function removeClass(element, className) {
    if (element) element.classList.remove(className);
}
function toggleClass(element, className) {
    if (element) element.classList.toggle(className);
}
