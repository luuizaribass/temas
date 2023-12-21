const trocarTema = document.getElementById('trocar-tema');
        const body = document.body;
        const labels = document.querySelectorAll('label');
        const secoesRoxo = document.querySelectorAll('.roxo-escuro');
        const paragrafos = document.querySelectorAll('.p-claro');
        const botaoIcone = document.querySelector('#trocar-tema i.fa-solid');
        const amarelos = document.querySelectorAll('.amarelo');

        let modoEscuro = false;

        trocarTema.addEventListener("click", () => {
            modoEscuro = !modoEscuro;

            if (modoEscuro) {
                body.classList.add("modo-escuro");
                labels.forEach(label => {
                    label.classList.add("texto-claro");
                });
                secoesRoxo.forEach(secao => {
                    secao.style.backgroundColor = '#37003f';
                });
                paragrafos.forEach(paragrafo => {
                    paragrafo.style.color = 'white';
                });
                amarelos.forEach(amarelo => {
                    amarelo.style.color = '#f1ff77';
                });
                botaoIcone.className = 'fa-solid fa-toggle-on';
                botaoIcone.style.color = '#ffffff';
            } else {
                body.classList.remove("modo-escuro");
                labels.forEach(label => {
                    label.classList.remove("texto-claro");
                });
                secoesRoxo.forEach(secao => {
                    secao.style.backgroundColor = '';
                });
                paragrafos.forEach(paragrafo => {
                    paragrafo.style.color = '';
                });
                amarelos.forEach(amarelo => {
                    amarelo.style.color = '';
                });
                botaoIcone.className = 'fa-solid fa-toggle-off';
                botaoIcone.style.color = '#FFF';
            }
        });