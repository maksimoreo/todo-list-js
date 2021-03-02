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

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function arrayToCamelCase(arr) {
    return [arr[0], ...arr.slice(1).map(str => capitalize(str))].join('');
}

export default { createElement, arrayToCamelCase };
