;(function (){
    'use strict';

    let employeeList = document.getElementById('employeeList');

    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.open('GEt', 'https://https://maksym-rakomin.github.io/ajax/data/employees.json');
    xhr.onreadystatechange = function () {

        if (xhr.readyState != 4) {
            return;
        } else if (xhr.status != 200) {
            console.log(xhr.status + ': ' + xhr.statusText)
        } else {
            let ul = document.createElement('ul');
            ul.classList.add('bulleted');
            
            for (let key of xhr.response) {

                let li = document.createElement('li');
                li.innerText = key.name;

                if (key.inoffice) {
                    li.classList.add('in');
                } else {
                    li.classList.add('out');
                }

                ul.append(li);
            }

            employeeList.append(ul);
        }
    }

    xhr.send();

})();