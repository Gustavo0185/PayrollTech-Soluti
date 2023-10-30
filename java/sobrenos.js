const quemSomos = document.getElementById('quem-somos');
const nossaMissao = document.getElementById('nossa-missao');
const conteudoExtra = document.getElementById('conteudo-extra');

quemSomos.addEventListener('click', function() {
    conteudoExtra.textContent = "Somos uma equipe dedicada na automação da folha de pagamento, proporcionando aos nossos clientes uma experiência sem complicações. Com funcionalidades abrangentes, incluindo cálculos de salários, deduções, benefícios e relatórios detalhados, nosso sistema é projetado para atender às necessidades específicas de cada cliente.";
    conteudoExtra.style.display = 'block';
});

nossaMissao.addEventListener('click', function() {
    conteudoExtra.textContent = "Nosso objetivo é simplificar e otimizar os processos de recursos humanos para empresas de todos os tamanhos. Ao oferecer um sistema seguro, intuitivo e altamente personalizável, capacitamos nossos clientes a focarem no que fazem de melhor, enquanto cuidamos dos detalhes complexos da folha de pagamento.";
    conteudoExtra.style.display = 'block';
});
