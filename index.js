const form = document.querySelector('form#flickForm')


const handleSubmit= function(ev) {
    ev.preventDefault()
    const f = ev.target


    const flickName = f.flickName.value
    const flickSpan = document.createElement('span')
    flickSpan.textContent = flickName

const movieName = f.movieName.value
const chrisSpan = document.createElement('span')
chrisSpan.textContent = chrisName

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
    fi.flickName.focus()
}


form.addEventListener('submit', changeName)
f4rm.addEventListener('submit', changeMovie)