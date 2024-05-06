document.addEventListener("DOMContentLoaded", function(){

    const pizzaFlyweightFactory = (function() {
        const pizzas = {
            "Margherita": { Brotinho: 18.75, Padrão: 25.00, Grande: 31.25 },
            "Calabresa": { Brotinho: 21.00, Padrão: 28.00, Grande: 35.00 },
            "Frango com Catupiry": { Brotinho: 22.50, Padrão: 30.00, Grande: 37.50 },
            "Portuguesa": { Brotinho: 24.00, Padrão: 32.00, Grande: 40.00 },
            "Quatro Queijos": { Brotinho: 26.25, Padrão: 35.00, Grande: 43.75 }
        };

        return {
            getPizza: function(sabor) {
                return pizzas[sabor];
            }
        };
    })();

    function montarPizza(){

        let custo = 0;
        let extra = "";
        let opcionais = "";
        let descricao = "";

        let saborSelecionado = document.querySelector('input[name="sabor"]:checked');
        let sabor = saborSelecionado ? saborSelecionado.value : 'Sabor não selecionado';

        let tamanhoSelecionado = document.querySelector('input[name="tamanho"]:checked');
        let tamanho = tamanhoSelecionado ? tamanhoSelecionado.value : 'Tamanho não selecionado';

        if (sabor !== 'Sabor não selecionado' && tamanho !== 'Tamanho não selecionado') {
            let pizza = pizzaFlyweightFactory.getPizza(sabor);
            custo += pizza[tamanho];
        }

        let bordaSelecionada = document.querySelector('input[name="borda"]:checked');
        let borda = bordaSelecionada ? bordaSelecionada.value : 'Borda não selecionado';

        if (borda === "Recheio com Catupiry") {
            custo += 2.00;
        } else if (borda === "Recheio com Cheddar") {
            custo += 3.00;
        }

        let queijoExtraCheckbox = document.querySelector('input[name="extra-queijo"]:checked');
        if (queijoExtraCheckbox) {
            custo += 2.00;
            extra += "<br>   - Queijo";
        }

        let cheddarExtraCheckbox = document.querySelector('input[name="extra-cheddar"]:checked');
        if (cheddarExtraCheckbox) {
            custo += 5.00;
            extra += "<br>   - Cheddar";
        }

        let baconExtraCheckbox = document.querySelector('input[name="extra-bacon"]:checked');
        if (baconExtraCheckbox) {
            custo += 3.00;
            extra += "<br>   - Bacon";
        }

        let pepperoniExtraCheckbox = document.querySelector('input[name="extra-pepperoni"]:checked');
        if (pepperoniExtraCheckbox) {
            custo += 4.00;
            extra += "<br>   -  Pepperoni";
        }

        let oreganoOpcionalCheckbox = document.querySelector('input[name="opcionais-oregano"]:checked');
        if (oreganoOpcionalCheckbox) {
            opcionais += "<br>   - Oregano";
        }

        let azeitonaOpcionalCheckbox = document.querySelector('input[name="opcionais-azeitona"]:checked');
        if (azeitonaOpcionalCheckbox) {
            opcionais += "<br>   - Azeitona";
        }

        let azeiteOpcionalCheckbox = document.querySelector('input[name="opcionais-azeite"]:checked');
        if (azeiteOpcionalCheckbox) {
            opcionais += "<br>   - Azeite";
        }

        let pimentaOpcionalCheckbox = document.querySelector('input[name="opcionais-pimenta"]:checked');
        if (pimentaOpcionalCheckbox) {
            opcionais += "<br>   - Pimenta";
        }

        descricao += "   - " + sabor + "<br>   - " + tamanho + "<br>   - " + borda + extra + opcionais;
        
        let totalPedidoElement = document.getElementById("total-pedido");
        totalPedidoElement.textContent = "R$:" + custo.toFixed(2);

        let descricaoPedidoElement = document.getElementById("descricao-pedido");
        descricaoPedidoElement.innerHTML =  descricao;
    }

    const button = document.querySelector("button");
    button.addEventListener('click', montarPizza);
});
