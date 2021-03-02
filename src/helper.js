function createElement(tagName, parent, textContent, classList) {
    let element = document.createElement(tagName);

    if (parent) {
        parent.appendChild(element);
    }

    if (textContent) {
        element.textContent = textContent;
    }

    if (classList) {
        if (typeof classList === 'string') {
            // TODO: split classList string if it contains spaces
            element.classList.add(classList);
        } else {
            for (let className of classList) {
                element.classList.add(className);
            }
        }
    }

    return element;
}

export default { createElement };
