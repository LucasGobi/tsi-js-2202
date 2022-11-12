document.querySelector('button').addEventListener('click', mostraIpca);

function mostraIpca(evento){

  evento.preventDefault();

  const url = 'https://api.bcb.gov.br/dados/serie/bcdata.sgs.4448/dados?formato=json&dataInicial=20201101'

fetch(url).then(function(retorno){

    return retorno.text();

}).then(function(stringJson){

    console.log(stringJson);

    jsonParaMorris = {
                Element: 'ipca',
               

                resize: true,
                
                // Dados que preenchem o gráfico
                //Esse bloco é um objeto JSON
                data: [
                  { year: '2008', value: 20 },
                  { year: '2009', value: 10 },
                  { year: '2010', value: 5 },
                  { year: '2011', value: 5 },
                  { year: '2013', value: 30 },
                  { year: '2014', value: 50 }
                ],
                
                //O nome do atributo de registro de dados que contém valores de x
                xkey: 'year',
                
                // Uma lista de nomes de atributos de registro de dados que contêm valores y.
                ykeys: ['value'],
                
                // Rótulos para os índices -- serão exibidos quando você passar o mouse sobre o
                // gráfico.
                labels: ['Value']
    }

}).catch(function(){
    alert('API do Banco Central fora do ar');

});
}