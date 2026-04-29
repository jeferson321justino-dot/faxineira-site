// ========================================
// Script - Site de Faxina
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Menu Mobile Toggle
    // ========================================
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Alternar ícone
            const icon = menuToggle.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
    
    // ========================================
    // Fechar menu ao clicar em um link
    // ========================================
    const navLinksItems = document.querySelectorAll('.nav-links a');
    
    navLinksItems.forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
    
    // ========================================
    // Scroll Suave para links internos
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Ignorar links do WhatsApp
            if (href.startsWith('https://wa.me')) {
                return;
            }
            
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // ========================================
    // Animação de scroll (reveal)
    // ========================================
    const revealElements = document.querySelectorAll('.servico-card, .diferencial-item, .contato-item');
    
    const revealOnScroll = function() {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Aplicar estilos iniciais para animação
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Verificar elementos visíveis ao carregar
    
    // ========================================
    // Header fixo com transição
    // ========================================
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // ========================================
    // Botão WhatsApp - Efeito de clique
    // ========================================
    const whatsappButtons = document.querySelectorAll('.whatsapp-float, .btn-whatsapp, .btn-whatsapp-large');
    
    whatsappButtons.forEach(button => {
        button.addEventListener('click', function() {
            // O link já direciona para o WhatsApp
            // Este código pode ser usado para tracking analytics se necessário
            console.log('Usuário clicou no botão WhatsApp');
        });
    });
    
    // ========================================
    // Validação de links WhatsApp
    // ========================================
    const whatsappLinks = document.querySelectorAll('a[href^="https://wa.me"]');
    
    whatsappLinks.forEach(link => {
        // Verificar se o número foi configurado
        if (link.href.includes('SEUNUMERO')) {
            console.warn('Atenção: Configure o número do WhatsApp no arquivo HTML!');
        }
    });
    
    console.log('Site de Faxina carregado com sucesso!');
});