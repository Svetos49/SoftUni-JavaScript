export function areFieldsValid(form, formData) {
    const inputs = form.querySelectorAll('input[type="text"],input[type="number"]');
    const [makeInput, modelInput, yearInput, descriptionInput, priceInput, imageInput] = inputs;
    
    formData.make.length < 4 ? makeInput.classList.add('is-invalid') : makeInput.classList.remove('is-invalid');
    formData.model.length < 4 ? modelInput.classList.add('is-invalid') : modelInput.classList.remove('is-invalid');
    Number(formData.year) <= 1950 || Number(formData.year) >= 2050 ? yearInput.classList.add('is-invalid') : yearInput.classList.remove('is-invalid');
    formData.description.length < 10 ? descriptionInput.classList.add('is-invalid') : descriptionInput.classList.remove('is-invalid');
    Number(formData.price) <= 0 ? priceInput.classList.add('is-invalid') : priceInput.classList.remove('is-invalid');
    !formData.img ? imageInput.classList.add('is-invalid') : imageInput.classList.remove('is-invalid');

    let isThereAnInvalidField = false;

    for (let input of inputs) {
        if (!input.classList.contains('is-invalid')) {
            input.classList.add('is-valid');
        } else {
            isThereAnInvalidField = true;
        }
    }

    return !isThereAnInvalidField;
}