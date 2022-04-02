//Send email
const sendMail = (name, email, message) => {
    email.js.send('portolio-gmail', 'myPortfolio', {
        from_name: name.value,
	    from_email: email.value,
		message: message.value,
    })
    .then(
        function(response) {
            console.log('SUCCESS', response)
        },
        function(error) {
            console.log('FAILED', error)
        }
    )
    contactForm.resete()
    return false // block from loading page
}

const name = document.getElementById('id_name')
const email = document.getElementById('id_email')
const message = document.getElementById('id_message')
const msg = document.getElementById('msg')
const sendAction = document.getElementById('sendMessageButton')

sendAction.addEventListener('click', (e) => {
	e.preventDefault()
	sendIt()
})

const sendIt = () => {
	const nameValue = name.value.trim()
	const emailValue = email.value.trim()
	const messageValue = message.value.trim()
	const mailFormat = /([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g

	if (nameValue === '' || emailValue === '' || messageValue === '') {
		msg.className = 'alert alert-danger'
		msg.innerHTML = 'Please fill in all Fields.'
		return false
	} else if (nameValue.length < 3) {
		msg.className = 'alert alert-danger'
		msg.innerHTML = 'Name must consist of at least three characters.'
		return false
	} else if (!emailValue.match(mailFormat)) {
		msg.className = 'alert alert-danger'
		msg.innerHTML = 'Incorrect email format'
		return false
	} else if (message.value.length < 10) {
		msg.className = 'alert alert-danger'
		msg.innerHTML = 'Message has to be at least 10 characters long.'
	} else {
		msg.className = 'alert alert-success'
		msg.innerHTML =
			'Thanks ' + nameValue + '!' + ' your message has been received.'
	}
	sendMail(name, email, message)
}