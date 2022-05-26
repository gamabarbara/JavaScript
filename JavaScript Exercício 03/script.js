let lampOn = document.querySelector('.lampOn');
let lampOff = document.querySelector('.lampOff')
let btn = document.querySelector('#buttom')
let on = false 

btn.addEventListener('click', () => {
    on = !on;
    on ? lampOn.style.display = 'none' : lampOn.style.display = 'block'
    on ? lampOff.style.display = 'block' : lampOff.style.display = 'none'
})