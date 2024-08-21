
// =======Dropdown=========
//Seleção do Dropdown
const dropDowns = document.querySelectorAll('.dropdown');

dropDowns.forEach(dropDowns => {
    const select = dropDowns.querySelector('.select');
    const iconDrop = dropDowns.querySelector('.icon-drop');
    const iconStyle = dropDowns.querySelector('.icon-style');
    const menu = dropDowns.querySelector('.menu');
    const options = dropDowns.querySelectorAll('.menu li');
    const selected = dropDowns.querySelector('.selected');
    
    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        iconStyle.classList.toggle('icon-style-clicked');
        iconDrop.classList.toggle('icon-drop-rotate');
        menu.classList.toggle('menu-open');
});
    
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            iconDrop.classList.remove('icon-drop-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
                select.classList.remove('select-clicked');
                iconStyle.classList.remove('icon-style-clicked');
            });
            
            option.classList.add('active');
            
            //### Simulador 

            // Objeto com os valores dos estilos de Tatuagens
            const tattooStyles = {
                BlackWork: {
                    flash: "R$320 R$750",
                    fechamento: "R$830 R$1190"
                },
                Realismo: {
                    flash: "R$490 R$990",
                    fechamento: "R$990 R$1990"
                },   
                OldSchool: {
                    flash: "R$330 R$730",
                    fechamento: "R$850 R$1190"
                },
                FineLine: {
                    flash: "R$310 R$750",
                    fechamento: "R$840 R$1190"
                }
            };
            // Somando o valor 
            const selectedStyle = option.innerText.replace(' ', '');
            const style = tattooStyles[selectedStyle];
            
            // Selecionando os elementos
            const Button = document.querySelector('.btn-simular');
            const valorSimulation = document.querySelector('#valorSimulation');
            const checkboxFlash = document.getElementById('flashCheck');
            const checkboxFechamento = document.getElementById('fechamentoCheck');
            const nomeInput = document.getElementById('nome');

            // Função para animar dois números simultaneamente
            function animateNumbers(startValue1, finalValue1, startValue2, finalValue2, element, duration = 2000) {
                const increment1 = finalValue1 / (duration / 16);
                const increment2 = finalValue2 / (duration / 16);
                let currentValue1 = startValue1;
                let currentValue2 = startValue2;
                const startTime = performance.now();

                function updateNumbers(currentTime) {
                    const elapsedTime = currentTime - startTime;
                    currentValue1 = Math.min(finalValue1, startValue1 + increment1 * elapsedTime / 16);
                    currentValue2 = Math.min(finalValue2, startValue2 + increment2 * elapsedTime / 16);

                    element.innerText = `R$${Math.floor(currentValue1).toLocaleString()} R$${Math.floor(currentValue2).toLocaleString()}`;

                    if (currentValue1 < finalValue1 || currentValue2 < finalValue2) {
                        requestAnimationFrame(updateNumbers);
                    } else {
                        element.innerText = `R$${finalValue1.toLocaleString()} R$${finalValue2.toLocaleString()}`;
                    }
                }

                requestAnimationFrame(updateNumbers);

                // Adiciona uma animação de escala
                element.classList.add('animate');

                // Remove a animação de escala após 500ms
                setTimeout(() => {
                    element.classList.remove('animate');
                }, 500);
            }


                // Adiciona um evento de clique ao botão "Simular"
                Button.addEventListener('click', (event) => {
                    // Impede o comportamento padrão do botão (atualizar a página)
                    event.preventDefault();

                    // Verifica se o campo de nome está vazio
                    if (nomeInput.value.trim() === '') {
                    alert('Por favor, preencha o campo de nome e telefone antes de simular.');
                    return; // Impede que o código continue se o nome não estiver preenchido
                    }

                    let result1 = 0;
                    let result2 = 0;
                
                    if (checkboxFlash.checked) {
                        const [flash1, flash2] = style.flash.split(' ').map(v => parseInt(v.replace('R$', '').replace('.', '')));
                        result1 += flash1;
                        result2 += flash2;
                    }
                
                    if (checkboxFechamento.checked) {
                        const [fechamento1, fechamento2] = style.fechamento.split(' ').map(v => parseInt(v.replace('R$', '').replace('.', '')));
                        result1 += fechamento1;
                        result2 += fechamento2;
                    }
                
                // Atualiza a interface com o resultado
                 animateNumbers(0, result1, 0, result2, valorSimulation);
            
            });
        });
    });
});


// =======Mascara Telefone=========
var maskPhone = document.getElementById('telefone');

maskPhone.addEventListener("input", () => {
    
    // Remover os caracteres não numéricos usando a expressão regular /\D/g e limitar a 11 digitos.
    var limparValor = maskPhone.value.replace(/\D/g, "").substring(0,11);
    
    // Dividir a string em um array de caracteres individuais 
    var numerosArray = limparValor.split("");
    
    // Criar a variável para receber o numero formatado
    var numeroFormatado = "";

    // Acessa o IF quando a quantidade de números é maior do que zero
    if(numerosArray.length > 0) {
        numeroFormatado += `(${numerosArray.slice(0,2).join("")})`;
    }

    // Acessa o IF quando a quantidade de números é maior do que dois
    if(numerosArray.length > 2) {
        numeroFormatado += ` ${numerosArray.slice(2,7).join("")}`;
    }

    // Acessa o IF quando a quantidade de números é maior do que sete
    if(numerosArray.length > 7) {
        numeroFormatado += `-${numerosArray.slice(7,11).join("")}`;
    }

    // Enviar para o campo o número formatado
    maskPhone.value = numeroFormatado;
});

// ### Checkbox 

// Seleciona todos os checkboxes com a classe 'check-wapper'
const checkboxes = document.querySelectorAll('.check-wapper');

// Altera sobre todos os checkboxes para adicionar o ouvinte de eventos
checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', function() {
        // Desmarca todos os checkboxes
        checkboxes.forEach((cb) => {
            cb.checked = false;
        });
        // Marca apenas o checkbox que foi clicado
        this.checked = true;
    });
});