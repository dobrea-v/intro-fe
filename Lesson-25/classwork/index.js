fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
.then(response => response.json())
.then(data => {
    let a = document.getElementById('copyright');
    a.innerText = data.copyright
})