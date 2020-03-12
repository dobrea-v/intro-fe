function processForm(e) {
    if (e.preventDefault) e.preventDefault();
    const a = Array.from(e.target.elements).map((element) => {
        if(element.tagName === 'BUTTON')  return;
        return `Field ${element.name}: ${element.value} \n`;
    })
    alert(a)
    return false;
}