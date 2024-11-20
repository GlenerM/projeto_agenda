const form = document.getElementById('form-projeto');

linhaEmBranco = '' 

form.addEventListener('submit' , function (e){
    e.preventDefault();

    const nome = document.getElementById('nome')
    const numero = document.getElementById('tel')

    // linhaEmBranco = ''  

    let linha = '<tr>'
    linha += `<td>${nome.value}</td>`
    linha += `<td>${numero.value}</td>`
    linha += '</tr>'
    
    linhaEmBranco += linha

    const corpoTabela = document.querySelector('tbody')
    corpoTabela.innerHTML = linhaEmBranco

    nome.value = ''
    numero.value = ''
    
    console.log(form)
    
});
