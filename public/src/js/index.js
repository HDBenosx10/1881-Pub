// A simple script to fake auth in front-end 
// User : adm  Password: adm
const deniedStyle = () => {
    const inputsNodeList = document.querySelectorAll('.data')
    const inputsArray = [...inputsNodeList]
    document.querySelector('.alert').style.display = 'block'
    inputsArray.forEach( input => {
        input.classList.add('denied')
        input.classList.add('shake-horizontal')
        setTimeout(()=>{
            input.classList.remove('denied')
            input.classList.remove('shake-horizontal')

        },4000)
    })
}
const deniedAlert = () => {
    let width = 100
    const pg = () => {
        if (width <= 0 ){
            clearInterval(timer)
            document.querySelector('.alert').style.display = 'none'
            width = 100
        }else{
            document.querySelector('.progress-bar').style.width = width + "%"
            
            width--
        }
    }
    let timer = setInterval(pg,40)
    window.scrollTo(0,0)
}
const acessDenied = () => {
    deniedStyle()
    deniedAlert()
}

const fakeAuth = (login , password) => {
    const admLogin = 'adm'
    const admPassword = 'adm'

    admLogin === login &&
    admPassword === password ?
    console.log(document.location.pathname = '/public/src/views/home.html') :

    acessDenied()

}

const getUserData = () => {
    const login = document.querySelector("input[type = 'text']").value
    const password = document.querySelector("input[type = 'password']").value
    fakeAuth(login.toLowerCase(),password)

}

const loginButton = document.querySelector('#loginButton')


loginButton.addEventListener('click',getUserData)







