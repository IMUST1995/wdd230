const list = document.querySelector('ul')
const input = document.querySelector('input')
const button = document.querySelector('button')

button.addEventListener('click', function(){
    while(input.value.length != 0){
    let item = input.value
    const li = document.createElement('li')
    const span = document.createElement('span')
    const listButton = document.createElement('button')

    span.textContent = item
    listButton.textContent = 'x'
    li.appendChild(span)
    li.appendChild(listButton)
    console.log(li)
    
    list.appendChild(li)
    input.value = ''

    listButton.addEventListener('click', () => {
        list.removeChild(li)
    })
    }
})