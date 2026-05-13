const produtoLoja = [
{id: 1, nome: "NoteBook", preco: 3000},
{id: 2, nome: "Teclado", preco:100},
{id: 3, nome: "Mouse", preco: 200}
];
let produtosCarrinho =[];

function renderizarProdutos(){
    const lista = document.getElementById("lista-produtos");
    lista.innerHTML ="";

    produtoLoja.forEach(p => {
        const div = document.createElement("div");
        div.className ="product";

        div.innerHTML = `
        <span>${p.nome} - R$ ${p.preco}<span>
        <button onclick="adicionarAoCarrinho(${p.id})">Adicionar</button>
        `;

        lista.appendChild(div);
    })
}  

renderizarProdutos();

function adicionarAoCarrinho(id){
    const produto = produtoLoja.find(prod => prod.id == id);

    const existente = produtosCarrinho.find(prod=> prod.id ==id);

    if (existente){
        //aumentar a quantidade
        existente.quantidade++;
    }
    else{
        //criar o produto no carrinho
        produtosCarrinho.push(
            {
                //meu novo produto no carrinho
                id: produto.id,
                nome: produto.nome,
                preco: produto.preco,
                quantidade: 1


            }
        );
    }
    renderizarCarrinho();   
}

function renderizarCarrinho(){
    const lista = document.getElementById("lista-carrinho");
    const total = document.getElementById("total");

    lista.innerHTML ="";

    let somaTotal = 0;

    produtosCarrinho.forEach(produto => {
        somaTotal = somaTotal + (produto.preco *produto.quantidade)
        const div = document.createElement("div");
        div.className ="cart-item"
        
        div.innerHTML=`
        <span>${produto.nome} (x${produto.quantidade}) - R$ ${produto.preco * produto.quantidade}</span>
        <div>
        <button onclick="mudarQuantidade(${produto.id},1 )">
        +
        </button>
        <button onclick="mudarQuantidade(${produto.id}, -1 )">
               -
        </button>
        <button onclick="removerProduto(${produto.id})">
        Remover
        </button>
        </div>
        `;
        lista.appendChild(div);
    });
    total.textContent = "Total: R$ " + somaTotal; 
}
function mudarQuantidade(id, valor){
    produtosCarrinho = produtosCarrinho.map(produto =>{
        if(id == produto.id){
            return{
                id: produto.id,
                nome: produto.nome,
                preco: produto.preco,
                quantidade: produto.quantidade + valor
            }
        }
        return produto;
    });
    renderizarCarrinho();
}
