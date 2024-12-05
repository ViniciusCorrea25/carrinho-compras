let totalGeral = 0;
limpar();

function adicionar(){
    //recuperar valores nome do produto, quantidade e valor
    let produto=document.getElementById('produto').value;
    let nomeProduto=produto.split('-')[0];
    let valorUnitario=produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    if (quantidade>0){ //condional usada para validar se foi digitada alguma quantidade antes de clicar em adicionar
        //calcular o preço, nosso subtotal
        let preco= quantidade*valorUnitario;
        let carrinho=document.getElementById('lista-produtos');
        //adicionar no carrinho

        carrinho.innerHTML=carrinho.innerHTML+`<section class="carrinho__produtos__produto">
            <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span> 
            </section> `;//Aqui estamos adicionando na parte da direita o produto escolhido visualmente falando
        totalGeral=totalGeral+preco;

        let campoTotal=document.getElementById('valor-total');
        campoTotal.textContent=`R$${totalGeral}`;
        document.getElementById('quantidade').value=0;
    }else{
        alert('digite uma quantidade para prosseguir');
    }
   
}

function limpar(){
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML='';
    document.getElementById('valor-total').textContent='R$0';
}