const scriptURL = 'https://script.google.com/macros/s/AKfycbyBWRma5w8_0vuaPlAcLVNv9t9TmER-lH-vM4PQQkshNJNPGOM8gQMf9it_um38NV6_/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
            form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})