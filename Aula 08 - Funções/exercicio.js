

function equacao(){
    let a = 1
    let b = -1
    let c = -12
    let delta = (b*b) - 4*a*c

    if (delta>0) {
   equacao1 = (-b + Math.sqrt(delta))/(2*a)
   equacao2 = (-b - Math.sqrt(delta))/(2*a)
   console.log(`Valor da primeira equação é ${equacao1}`)
   console.log(`Valor da segunda equação é ${equacao2}`)
   } else{
       if(delta ==0 ){
      raiz  = (-b + Math.sqrt(delta))/(2*a)
      console.log(`Valor da raiz ${raiz}`)
    } else {
        real = (-b)/(2*a)
        res1 = Math.sqrt(-delta)/(2*a)
        res2 = - Math.sqrt(-delta)/(2*a)
        console.log(`Valor da equação é ${res1} e ${res2}`)
        console.log(`Valor de bhaskara é ${real}`)
        
       }
    
}

}
   equacao()



