function solve() {
    let buttonElement = document.querySelector('.admin-view .action button');

    let modules = {};

    buttonElement.addEventListener('click', (e) => {
        e.preventDefault();

        let lectureNameElement = document.querySelector('input[name="lecture-name"]');
        let lectureDateElement = document.querySelector('input[name="lecture-date"]');
        let lectureModuleElement = document.querySelector('select[name="lecture-module"]');

        if (!lectureNameElement.value || !lectureDateElement.value) {
            return;
        }

        if (lectureModuleElement == 'Select module') {
            return
        }

        if (!modules[lectureModuleElement.value]) {
           modules[lectureModuleElement.value] = [];
        }

        let currentLecture = {name: lectureNameElement.value, date: formData(lectureDateElement.value)};
        modules[lectureModuleElement.value].push(currentLecture);

        createTrainings(modules);
    });

    function createTrainings(lectures) {
        let lectureNameElement = document.querySelector('input[name="lecture-name"]');
        let lectureModuleElement = document.querySelector('select[name="lecture-module"]');
        let lectureDateElement = document.querySelector('input[name="lecture-date"]');

        for(const module in modules) {
            let moduleElement = createModul(module);
            let lectures = modules[module];
            lectures.sort((a,b) => a.date.localeCompare(b.date));
            console.log(lectures);
            // if(Object.hasOwnProperty.call(object, key)) {
            //     const element = object[key];
            // }
        }

       

        let lectureElement = createLecture(lectureNameElement.value, lectureDateElement.value);
        

        let modulesElement = document.querySelector('.modules');
        modulesElement.appendChild(moduleElement);
    }

    function createModul(name, lectureElement) {
        let divElement = document.createElement('div');
        divElement.classList.add('module');

        let headingElement = document.createElement('h3');
        headingElement.textContent = `${name.toUpperCase()}-MODULE`;

        let lectureListElement = document.createElement('ul');
        lectureListElement.appendChild(lectureElement);

        divElement.appendChild(headingElement);
        divElement.appendChild(lectureListElement);

        return divElement;
    }

    function createLecture(name, date) {
        let liElement = document.createElement('li');
        liElement.classList.add('flex');

        let courseHeadingElement = document.createElement('h4');
        courseHeadingElement.textContent = `${name} - ${formData(date)}`;

        let deleteButtonElement = document.createElement('button');
        deleteButtonElement.classList.add('red');
        deleteButtonElement.textContent = 'Del';

        liElement.appendChild(courseHeadingElement);
        liElement.appendChild(deleteButtonElement);

        return liElement;
    }

    function formData(dataInput) {
        let [date, time] = dataInput.split('T');
        date = date.replace(/-/g, '/');

        return `${date} - ${time}`;
    }


}