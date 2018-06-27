const form = document.querySelector('form#flickForm')
const f4rm = document.querySelector('form#flickFormer')

const changeName = function(ev) {
    
    ev.preventDefault()
    const f = ev.target


    const flickName = f.flickName.value
    const item = document.createElement('li')
    item.textContent = flickName

    const list = document.querySelector('#flicks')
    list.appendChild(item)
     
    f.reset ()
}

const changeMovie = function(ev) {
    ev.preventDefault()
    const f = ev.target

    const flickName = f.flickName.value
    const item = document.createElement('li')
    item.textContent = flickName

    const list = document.querySelector('#flicks2')
    list.appendChild(item)
    f.reset ()
}


form.addEventListener('submit', changeName)
f4rm.addEventListener('submit', changeMovie)