// Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

// Sticky menu background
window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
        document.querySelector("#navbar").style.opacity = 0.9;
    } else {
        document.querySelector("#navbar").style.opacity = 1;
    }
});

/*Esta é uma função jQuery que atribui um evento de clique aos elementos selecionados com os seletores "#navbar a" e ".btn". Quando o evento de clique é disparado, a função é executada.

$("#navbar a, .btn").on("click", function (event) {: aqui, estamos selecionando todos os elementos que correspondem ao seletor "#navbar a" e ".btn" e atribuindo um evento de clique a eles. O argumento "event" representa o objeto de evento que é gerado pelo navegador quando o clique ocorre.

if (this.hash !== "") {: aqui, estamos verificando se o atributo hash do elemento que gerou o evento de clique não é uma string vazia.

event.preventDefault();: aqui, estamos chamando o método preventDefault no objeto de evento para evitar que a ação padrão do navegador (redirecionamento para a URL especificada no atributo hash) seja executada.

const hash = this.hash;: aqui, estamos armazenando o valor do atributo hash do elemento que gerou o evento de clique na variável "hash".

$("html, body").animate(: aqui, estamos selecionando os elementos "html" e "body" e chamando o método animate. O método animate permite animar propriedades CSS de elementos selecionados, neste caso, a propriedade "scrollTop".

{: aqui, estamos definindo o objeto que especifica as propriedades CSS que serão animadas.

scrollTop: $(hash).offset().top - 100: aqui, estamos animando a propriedade "scrollTop" para que a posição de rolagem da página seja definida como a posição do topo do elemento que corresponde ao seletor armazenado em "hash" menos 100 pixels.

}, 800: aqui, estamos especificando o tempo da animação em milissegundos (800 milissegundos, ou 0,8 segundos).

);: fecha a chamada de método animate.

});: fecha a função associada ao evento de clique.*/