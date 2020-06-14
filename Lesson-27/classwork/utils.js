export function dateFormatter () {
    var now = this.date;
    var y = now.getFullYear();
    var m = now.getMonth() + 1;
    var d = now.getDate();
    var mm = m < 10 ? '0' + m : m;
    var dd = d < 10 ? '0' + d : d;
    return '' + y + '-' + mm + '-' + dd;
}

export function renderApp(data) {
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
        this.container.append(copyrightDiv);
    }
    
    this.container.append(title);
    this.container.append(imageDiv);
    this.container.append(paragraph);
}

export function addElement() {
    let element = document.createElement('div');
    if(this.date === undefined) {
        this.date = new Date();

    } else {
        this.date = new Date(this.date.setDate(this.date.getDate() - 1));
    }
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=' + this.dateFormatter())
    .then(response => {
        console.log(response);
        if(!response.ok) {
            throw new Error('could not find Apod')
        }
        return response.json()
    })
    .then(data => this.renderApp(data))
    .catch(err => console.log(err))

    element.innerText = this.dateFormatter();
    this.container.append(element);
}