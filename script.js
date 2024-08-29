document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-proximo');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const currentStep = document.querySelector('.passo.ativo');
            const nextStep = 'passo-' + this.getAttribute('data-proximo');

            // Remove a classe 'ativo' do passo atual
            currentStep.classList.remove('ativo');
            // Adiciona a classe 'ativo' ao próximo passo
            document.getElementById(nextStep).classList.add('ativo');
        });
    });
});
