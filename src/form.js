import helper from "./helper";

class FormField {
    constructor(inputSelector, errorSelector) {
        this.input = document.querySelector(inputSelector);

        if (!this.input) {
            console.error(`Could not find input with ID: ${inputSelector}`);
        }

        this.error = document.querySelector(errorSelector);

        if (!this.error) {
            console.warn(`Could not find input error field with ID: ${errorSelector}`);
        }

        this.valid = true;

        this.input.oninput = () => this.validate();
        // this.input.onsubmit does not work?
    }

    set onValidate(callback) {
        this.validationCallback = callback;
    }

    validate() {
        if (this.validationCallback) {
            const returnValue = this.validationCallback(this.input);
            this.error.textContent = typeof returnValue === 'string' ? returnValue : '';
            this.valid = !returnValue;
        }
    }
}

const formMixin = {
    setFormFields(formName, fieldIds) {
        this.form = document.querySelector(`#${formName}-form`);
        this.fields = {};

        // Fields and Errors
        for (const fieldId of fieldIds) {
            const fieldFullId = `#input-${formName}-${fieldId}`;
            const fieldErrorId = fieldFullId + '-error';
            const propName = helper.arrayToCamelCase(fieldId.split('-'));

            this.fields[propName] = new FormField(fieldFullId, fieldErrorId);
        }

        // Submit
        this.submitButton = document.querySelector(`#button-${formName}-submit`);
        this.submitButton.onclick = () => {
            this.validateFields();
            if (this.isValid()) {
                this.onSubmit(this.fields);
            }
        }
    },

    clear() {
        for (const fieldName in this.fields) {
            this.fields[fieldName].input.value = '';
        }
    },

    fillObj(obj) {
        for (const fieldName in this.fields) {
            obj[fieldName] = this.fields[fieldName].input.value;
        }
    },

    fillFields(obj) {
        for (const fieldName in this.fields) {
            this.fields[fieldName].input.value = obj[fieldName];
        }
    },

    isValid() {
        for (const fieldName in this.fields) {
            if (!this.fields[fieldName].valid) {
                return false;
            }
        }

        return true;
    },

    validateFields() {
        for (const fieldName in this.fields) {
            this.fields[fieldName].validate();
        }
    },
}

export default { formMixin };
