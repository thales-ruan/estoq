



function validarProduto(){

let codigo = document.getElementById('codigo').value;
let nome = document.getElementById('nome').value;
let marca = document.getElementById('marca').value;
let categoria = document.getElementById('categoria').value;
let quantidade = document.getElementById('quant').value;
let valor = document.getElementById('valor').value;




if(codigo == ''){
    alert('Código do produto em branco favor preenchelo')
}
else if(nome == ''){
    alert('Nome do produto em branco favor preenchelo')
}
else if(marca== ''){
    alert('Marca do produto em branco favor preenchelo')
}
else if(categoria == ''){
    alert('Categoria do produto em branco favor preenchelo')
}
else if(quantidade == ''){
    alert('Quantidade do produto em branco favor preenchelo')
}
else if(valor == ''){
    alert('Valor do produto em branco favor preenchelo')
}
else{
    cadastrarProduto(codigo,nome,marca,categoria,quantidade,valor)
}
}

function cadastrarProduto(cod,name,marcaa,catgoria,quantid,preco){
    let novoProduto = {codigo:cod, nome:name, marca:marcaa, categoria:catgoria, quantidade:quantid, valor:preco}
if(typeof(Storage) !== 'undefined'){
    let produtos = localStorage.getItem("produtos");
    if (produtos == null) produtos = [];
    else produtos = JSON.parse(produtos);
    produtos.push(novoProduto);
    localStorage.setItem("produtos",JSON.stringify(produtos))
    alert("Foi cadastrado" +quantidade+ "Unidades do produto" +nome+"!!!");
}

}


/*function listarEstoque() {
    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        document.write("<h1>Estoque:</h1>")
        if (produtos == null)
            document.write("<h3>Ainda não há nenhum item no estoque</h3>");
        else {
            produtos = JSON.parse(produtos);
            produtos.forEach(produto => {
                document.write("<tr>");
                document.write("<td><strong>Código do produto:</strong> "+produto.codigo+"</td>");
                document.write("<td><strong>Nome do produto:</strong> "+produto.nome+"</td>");
                document.write("<td><strong>Quantidade no estoque:</strong> "+produto.marca+"</td>");
                document.write("<td><strong>Categoria do produto:</strong> "+produto.categoria+"</td>");
                document.write("<td><strong>Quantidade do produto:</strong> "+produto.quantidade+"</td>");
                document.write("<td><strong>Valor no estoque:</strong> "+produto.valor+"</td>" );
                document.write("</tr>");
                
              
                
            });
        }
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
}
*/
function listarEstoque() {
    var itens = JSON.parse(localStorage.getItem('produtos'));
    var resultadoItens = document.getElementById('resultados');
    
    resultadoItens.innerHTML = ''; 
    for (var i = 0; i < itens.length; i++) { // loop para mostrar os resultados buscando dentro do array
        
        var codd =  itens[i].codigo;
        var naame = itens[i].nome;
        var marcaa = itens[i].marca;
        var cate = itens[i].categoria;
        var qtt = itens[i].quantidade;
        var valoor = itens[i].valor;
          
        resultadoItens.innerHTML += '\
            <tr>\
                <td style="word-wrap: break-word;">' + codd + '</td>\
                <td style="word-wrap: break-word;">' + naame + '</td>\
                <td style="word-wrap: break-word;">' + marcaa + '</td>\
                <td style="word-wrap: break-word;">' + cate + '</td>\
                <td style="word-wrap: break-word;">' + qtt + '</td>\
                <td style="word-wrap: break-word;">' + valoor + '</td>\
              \
            </tr>';

};
};




function apagar(){
let codigo = document.getElementById('codigo').value="";
let nome = document.getElementById('nome').value="";
let marca = document.getElementById('marca').value="";
let categoria = document.getElementById('categoria').value="";
let quantidade = document.getElementById('quant').value="";
let valor = document.getElementById('valor').value="";
}
