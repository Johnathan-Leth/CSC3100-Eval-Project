
// helps prevent constant reloading of the page when clicking links
function loadPage(page) {
    const currentPage = window.location.pathname.split('/').pop();
    if (currentPage === page) {
        return; 
    }

    $('#frmContainer').load(page, () => {
        history.pushState({ page: page }, '', page); // Update the URL
    });
}

function redirectToDashboard() {
    const role = sessionStorage.getItem('position')
    if (role === 'Student') {
        loadPage('dashboardstudent.html')
    } else if (role === 'Professor') {
        loadPage('dashboard.html')
    }
}

// Load login page by default
$(document).ready(() => {
    const currentPage = window.location.pathname.split('/').pop() || 'login.html' // Default to login.html
    loadPage(currentPage)
})

// Handle browser back/forward navigation
window.addEventListener('popstate', (event) => {
    const page = event.state?.page || 'login.html' // Default to login.html if no state
    loadPage(page)
})

// Event listeners for form navigation
$(document).on('click', '#lnkRegister', (event) => {
    event.preventDefault()
    loadPage('register.html')
    console.log('Register link clicked')
})
$(document).on('click', '#lnkRegisterProf', (event) => {
    event.preventDefault()
    loadPage('registerProf.html')
    console.log('Register Prof link clicked')
})
$(document).on('click', '#lnkLogin', (event) => {
    event.preventDefault()
    loadPage('login.html')
    console.log('Login link clicked')
})

// Default Registration logic
$(document).on('click', '#btnRegister', () => {
    // Variables
let email = ''
let password = ''
let passwordConfirm = ''
let firstName = ''
let lastName = ''
let position = ''
let accessCode = ''
const regemail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)*tntech\.edu$/

    let blnError = false
    let strMessage = ''
    email = $('#regEmail').val().trim()
    password = $('#regPassword').val()
    passwordConfirm = $('#regPasswordConfirm').val()
    firstName = $('#regFirstName').val().trim()
    lastName = $('#regLastName').val().trim()
    position = 'Student'

    // Checks for errors in the registration form
    if (!regemail.test(email)) {
        blnError = true
        strMessage += '<p class="mt-0 mb-0">Please enter a tech email</p>'
    }
    if (password != passwordConfirm) {
        blnError = true
        strMessage += '<p class="mt-0 mb-0">Passwords do not match</p>'
    }
    if (password.length < 8) {
        blnError = true
        strMessage += '<p class="mt-0 mb-0">Password must be at least 8 characters</p>'
    }
    if (firstName == '' || lastName == '') {
        blnError = true
        strMessage += '<p class="mt-0 mb-0">Please enter a first and last name</p>'
    }
    if (position == 'Select your position') {
        blnError = true
        strMessage += '<p class="mt-0 mb-0">Please select a position</p>'
    }

    console.log('Register button clicked')

    if (blnError) {
        Swal.fire({
            title: 'Oh no, you have an error!',
            html: strMessage,
            icon: 'error'
        })
    } else {
        Swal.fire({
            title: 'Success',
            text: 'You have successfully registered',
            icon: 'success'
        })
        // Temporary solution for storing user data. Will be replaced with a database
        sessionStorage.setItem('email', email)
        sessionStorage.setItem('password', password)
        sessionStorage.setItem('position', position)
        loadPage('login.html')
    }
})

// Professor Registration logic
$(document).on('click', '#btnRegisterProf', () => {
    // Variables
let email = ''
let password = ''
let passwordConfirm = ''
let firstName = ''
let lastName = ''
let position = ''
let accessCode = ''
const regemail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)*tntech\.edu$/

    let blnError = false
    let strMessage = ''
    email = $('#regEmailProf').val().trim()
    password = $('#regPasswordProf').val()
    passwordConfirm = $('#regPasswordConfirmProf').val()
    firstName = $('#regFirstNameProf').val().trim()
    lastName = $('#regLastNameProf').val().trim()
    accessCode = $('#regAccessCode').val()
    position = 'Professor'
    
    // Checks for errors in the registration form
    if (!regemail.test(email)) {
            blnError = true
            strMessage += '<p class="mt-0 mb-0">Please enter a tech email</p>'
    } 
    if (password != passwordConfirm) {
        blnError = true
        strMessage += '<p class="mt-0 mb-0">Passwords do not match</p>'
    }
    if (password.length < 8) {
        blnError = true
        strMessage += '<p class="mt-0 mb-0">Password must be at least 8 characters</p>'
    }
    if (firstName == '' || lastName == '') {
        blnError = true
        strMessage += '<p class="mt-0 mb-0">Please enter a first and last name</p>'
    }
    if (accessCode != '102048' || accessCode.length != 6) { // Static access code is temporary
        blnError = true
        strMessage += '<p class="mt-0 mb-0">Incorrect code</p>'
    }

    console.log('Register button clicked')

    
    if (blnError) {
        Swal.fire({
            title: 'Oh no, you have an error!',
            html: strMessage,
            icon: 'error'
        })
    } else {
        Swal.fire({
            title: 'Success',
            text: 'You have successfully registered',
            icon: 'success'
        })
        // Temptorary solution for storing user data. Will be replaced with a database
        sessionStorage.setItem('email', email)
        sessionStorage.setItem('password', password)
        sessionStorage.setItem('position', position)
        loadPage('login.html')
    }
})

// Login logic
$(document).on('click', '#btnLogin', () => {
    // Variables
let email = ''
let password = ''
let passwordConfirm = ''
let firstName = ''
let lastName = ''
let position = ''
let accessCode = ''
const regemail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)*tntech\.edu$/

    email = $('#loginEmail').val().trim()
    password = $('#loginPassword').val()
    let blnError = false
    let strMessage = ''
    
    if (email == '' || password == '') {
        blnError = true
        strMessage += '<p class="mt-0 mb-0">Please enter an email and password</p>'
    } 
    if (!regemail.test(email)) {
        blnError = true
        strMessage += '<p class="mt-0 mb-0">Please enter a tech email</p>'
    }
    if (email != sessionStorage.getItem('email') && password != sessionStorage.getItem('password')) {
        blnError = true
        strMessage += '<p class="mt-0 mb-0">Invalid login</p>'
    }

    console.log('Login clicked')

    if (blnError) {
        Swal.fire({
            title: 'Oh no, you have an error!',
            html: strMessage,
            icon: 'error'
        })
    } else {
        Swal.fire({
            title: 'Success',
            text: 'You have successfully logged in',
            icon: 'success'
        })
        loadPage('dashboard.html')
    }
})

// Survey submission logic
$(document).on('click', '#btnSubmit', () => {
    let strEmailSelf = $('#txtEmailSelf').val().trim()
    let strScoreSelf = $('#selScoreSelf').val()
    let strDetailsSelf = $('#txtDetailsSelf').val()
    let strGradeSelf = $('#txtGradeSelf').val().trim()

    let blnError = false
    let strMessage = ''
    const regemail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)*tntech\.edu$/
    strEmailSelf = strEmailSelf.toLowerCase()

    // I feel like there should be an easier/shorter way to run all of these checks
    if (!regemail.test(strEmailSelf)) {
        blnError = true
        strMessage += '<p class="mt-0 mb-0">Email must be a tech email</p>'
    }

    if (strScoreSelf == 'Open this select menu') {
        blnError = true
        strMessage += '<p class="mt-0 mb-0">Please select a score</p>'
    }
    // Incomplete checks

    //SweetAlert for Dashboardful or failed registration
    if (blnError) {
        Swal.fire({
            title: 'Oh no, you have an error!',
            html: strMessage,
            icon: 'error'
        })
    } else {
        Swal.fire({
            title: 'Success!',
            text: 'You have successfully logged in',
            icon: 'success'
        }).then(() => {
            loadPage('dashboard.html')
        })
    }
})
