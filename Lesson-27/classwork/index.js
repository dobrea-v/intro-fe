function Apod(id){
    this.id = id;
    this.date = undefined;
    let body = document.body;
    this.container = document.createElement('div');
    this.container.setAttribute('id', this.id);
    this.addElement = function() {
        let element = document.createElement('div');
        if(this.date === undefined) {
            this.date = new Date()
        } else {
            this.date = new Date(this.date.setDate(this.date.getDate() - 1));
        }
        element.innerText = this.date;
        this.container.append(element);
    }
    this.addElement();
    body.append(this.container);
}

const apod = new Apod('apod');