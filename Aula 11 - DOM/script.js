      /*         array.from(document.getElementsByTagName('button'))    
      let btn = document.getElementsByTagName('button')[0]  pega elementos HTML a partir do nome da tag. Retorna um array com elementos que tenham o nome dessa tag. Ele lê o código de cima pra baixo 

      btn.innerText= 'Mudei o texto' // muda o texto que está dentro da tag
      btn.onclick = function() {
          alert('Você clicou em mim')
      }

      btn.addEventListener('click', () => {
          alert('Você clicou em mim')
      })
        recebe dois parâmetros. O primeiro é o nome do evento que queremos ouvir. E o segundo é uma função que vai ser executada sempre que esse evento for ouvido.

      /* let ps = document.getElementsByTagName('p') 
        let diferente = document.getElementsByClassName('diferente')
        let paras = document.getElementsByName('para')*/
        
        let unico = document.getElementById('unico')
        console.log(unico)