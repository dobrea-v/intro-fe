
fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => response.json())
    .then(data => renderApp(data))


function renderApp(data) {
    let body = document.body;
    let title = document.createElement('h1');
    title.innerText = data.title;

    let imageDiv = document.createElement('div');
    imageDiv.classList.add('image');

    if(data.media_type === 'video') {
        let iframe = document.createElement('iframe');
        iframe.setAttribute('src', data.url);
        iframe.setAttribute('width', '420');
        iframe.setAttribute('height', '300');
        imageDiv.append(iframe);

    } else {
        let image = document.createElement('img');
        image.setAttribute('src', data.url);
        imageDiv.append(image);
    }
    

    let paragraph = document.createElement('p');
    paragraph.innerText = data.explanation;

    if(data.copyright) {
        let copyrightDiv = document.createElement('div');
        copyrightDiv.classList.add('copyright');
    
        let copyrightSpan = document.createElement('span');
        copyrightSpan.innerHTML = '© ' + data.copyright;
        copyrightDiv.append(copyrightSpan);
        body.append(copyrightDiv);
    }
    
    body.append(title);
    body.append(imageDiv);
    body.append(paragraph);
}