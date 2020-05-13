const containerEl = document.getElementById('container');
const resultEl = document.getElementById('result');


containerEl.addEventListener('click', getButtonInnerText);

function getButtonInnerText(event) {
    if(event.target === event.currentTarget) {
        return;
    }
    const innerText = event.target.innerText
    console.log(event.target)
    document.body.style.backgroundColor = event.target.dataset.buttonColor;
    resultEl.innerText = innerText;
    return innerText
}
