let hideMixin = {
    setHideElement(element) {
        this.show = () => {
            if (element.classList.contains('hide')) {
                element.classList.remove('hide');
            }
        }

        this.hide = () => {
            if (!element.classList.contains('hide')) {
                element.classList.add('hide');
            }
        }

        this.toggleHide = () => {
            if (element.classList.contains('hide')) {
                element.classList.remove('hide');
            } else {
                element.classList.add('hide');
            }
        }
    }
};

export default { hideMixin };
