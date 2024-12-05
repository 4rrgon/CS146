let counter = 3;
const boxes = ['1', '2'];


function addAssignment(){

    return;
}


function rmAssignment(){

    return;
}





function calcgpa() {
    let gpaTotal = 0;
    let creditsTotal = 0;

    boxData = readboxes();

    for (let i = 0; i < boxData.weights.length; i++){
        gpaTotal = gpaTotal + (boxData.weights[i] * boxData.grades[i])
        creditsTotal = creditsTotal + Number(boxData.weights[i]);
    }
    gpaTotal = gpaTotal / creditsTotal;
    alert(gpaTotal.toFixed(2));
    return;
}

function rmBox(box) {

    return;
}



function readboxes() {
    const weights = [];
    const grades = [];

    for (let i = 0; i < boxes.length; i++) {
        inputData = readbox(boxes[i]);
        if (inputData.weight == "") {
            alert("Please enter a valid weight")
            break;
        } else {
            weights.push(inputData.weight);
        } 

        if (inputData.grade == "") {
            alert("Please enter a grade")
            break;
        } else {
            grades.push(inputData.grade);
        }
   
    }

    console.log(weights);
    console.log(grades);

    const boxData = {
        weights: weights,
        grades: grades

    }

    return boxData;
}



function readbox(box) {
    const divElement = document.getElementById(box);

    const courseInput = divElement.querySelector('input[type="text"]');
    const weightInput = divElement.querySelector('input[type="number"]');
    const gradeSelect = divElement.querySelector('select');

    const course = courseInput.value;
    const weight = weightInput.value;
    const grade = gradeSelect.value;

    const inputData = {
        course: course,
        weight: weight,
        grade: grade
    };

    return inputData;
}


function outputgpa(output) {
    inputData = readboxes();
    return;

}


function addDiv() {
    boxes.push(counter.toString());
    console.log(boxes)

    let div = document.createElement('div');
    div.id = counter;
    div.className = 'row';

    let inputCourse = document.createElement('input');
    inputCourse.type = 'text';
    inputCourse.placeholder = 'Course';

    let inputWeight = document.createElement('input');
    inputWeight.type = 'number';
    inputWeight.placeholder = 'Weight';

    let selectGrade = document.createElement('select');
    let options = [
        { value: '', text: 'Grade' },
        { value: '4.00', text: 'A' },
        { value: '3.67', text: 'A-' },
        { value: '3.33', text: 'B+' },
        { value: '3.00', text: 'B' },
        { value: '2.67', text: 'B-' },
        { value: '2.33', text: 'C+' },
        { value: '2.00', text: 'C' },
        { value: '1.67', text: 'C-' },
        { value: '1.33', text: 'D+' },
        { value: '1.00', text: 'D' },
        { value: '0.00', text: 'F' }
    ];

    options.forEach(option => {
        let optionElement = document.createElement('option');
        optionElement.value = option.value;
        optionElement.text = option.text;
        selectGrade.appendChild(optionElement);
    });

    div.appendChild(inputCourse);
    div.appendChild(inputWeight);
    div.appendChild(selectGrade);

    let details = document.createElement('details');
    let summary = document.createElement('summary');
    summary.textContent = 'Assignments (Optional)';
    details.appendChild(summary);

    let ul = document.createElement('ul');
    let li1 = document.createElement('li');
    let li2 = document.createElement('li');
    let li3 = document.createElement('li');

    let divAssignment1 = document.createElement('div');
    divAssignment1.className = 'row';
    let inputAssignment1 = document.createElement('input');
    inputAssignment1.type = 'text';
    inputAssignment1.placeholder = 'Assignment';
    let inputWeightAssignment1 = document.createElement('input');
    inputWeightAssignment1.type = 'number';
    inputWeightAssignment1.placeholder = 'Weight';
    let inputGradeAssignment1 = document.createElement('input');
    inputGradeAssignment1.type = 'number';
    inputGradeAssignment1.placeholder = 'Grade';
    divAssignment1.appendChild(inputAssignment1);
    divAssignment1.appendChild(inputWeightAssignment1);
    divAssignment1.appendChild(inputGradeAssignment1);
    li1.appendChild(divAssignment1);

    let divAssignment2 = document.createElement('div');
    divAssignment2.className = 'row';
    let inputAssignment2 = document.createElement('input');
    inputAssignment2.type = 'text';
    inputAssignment2.placeholder = 'Assignment';
    let inputWeightAssignment2 = document.createElement('input');
    inputWeightAssignment2.type = 'number';
    inputWeightAssignment2.placeholder = 'Weight';
    let inputGradeAssignment2 = document.createElement('input');
    inputGradeAssignment2.type = 'number';
    inputGradeAssignment2.placeholder = 'Grade';
    divAssignment2.appendChild(inputAssignment2);
    divAssignment2.appendChild(inputWeightAssignment2);
    divAssignment2.appendChild(inputGradeAssignment2);
    li2.appendChild(divAssignment2);

    let buttonAddAssignment = document.createElement('button');
    buttonAddAssignment.textContent = '+ Add Another Assignment';
    let buttonRemoveAssignment = document.createElement('button');
    buttonRemoveAssignment.textContent = '- Remove an Assignment';
    let buttonCalculateGrade = document.createElement('button');
    buttonCalculateGrade.textContent = 'Calculate Course Grade';
    li3.appendChild(buttonAddAssignment);
    li3.appendChild(buttonRemoveAssignment);
    li3.appendChild(buttonCalculateGrade);

    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    details.appendChild(ul);

    let beforeElement = document.getElementById('before');

    beforeElement.parentNode.insertBefore(div, beforeElement);
    beforeElement.parentNode.insertBefore(details, beforeElement);

    counter++;
}
