const boxes = [];
const assignments = [];
const gradeweights = ['0.00', '1.00', '1.33', '1.67', '2.00', '2.33', '2.67', '3.00', '3.33', '3.67', '4.00'];





addDiv();
addDiv();




function calcgpasilent() {
    let gpaTotal = 0;
    let creditsTotal = 0;

    boxData = readboxes();

    if (boxData == 1) {
        return 23878123;
    }

    for (let i = 0; i < boxData.weights.length; i++){
        gpaTotal = gpaTotal + (boxData.weights[i] * boxData.grades[i])
        creditsTotal = creditsTotal + Number(boxData.weights[i]);
    }
    gpaTotal = gpaTotal / creditsTotal;

    return gpaTotal;
}



function highlinput(box) {
    box.classList.add('highlight');

    setTimeout(function() {
        box.classList.remove('highlight');
    }, 1000);

}



function goalGpa() {
    counter2 = 0;

    note = ''

    gradearr = []

    let findgoal = document.getElementById("goalvalue");
    gpagoal = Number(findgoal.value);

    if (typeof gpagoal !== 'number' || isNaN(gpagoal)) {
        alert('Goal must be a number');
      }
    
      if (gpagoal < 0 || gpagoal > 4) {
        alert('Goal must be between 0 and 4');
    }

    for (let i = 0; i < boxes.length; i++) {
        let gradeSelect = document.getElementById(boxes[i].toString() + 'select');
        if (gradeSelect.value == "") {
            counter2++
            note = i
            gradearr.push('empty')
        } else {
            gradearr.push(gradeSelect.value)
        } if (counter2 > 1) {
            alert("Can only have 1 blank grade");
            return 1;
        }

    }


    let gradeBox = document.getElementById(boxes[note].toString() + 'select');
    





    for (let i = 0; i < gradeweights.length; i++) {
        gradeBox.value = gradeweights[i];
        totalGrade = Number(calcgpasilent())

        if (totalGrade == 23878123) {
            gradeBox.value = "";
            return 1;
        } else if (totalGrade >= gpagoal) {
            highlinput(gradeBox);
            return 0;

        }

    }


    alert("GPA not achiveable")
    gradeBox.value = "";
    return 1;



}


function reset() {
    return;
}



function mainerror(inputerror) {
    let spanerr = document.getElementById('calcspan');
    spanerr.textContent = inputerror;
    spanerr.className = '.error-span';

    setTimeout(function() {
        spanerr.className = '.error-span-hidden';
    }, 3000);
    
    return;
}



function nextNum(arr) {
    next = 1;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
        if (Number(arr[i]) != (i + 1)) {
            num = (i + 1);
            console.log(num);
            return num;
        }
        next = i + 2;


    }
    console.log(next);
    return next;
}





function addAssignment(idval) {
    let li1 = document.createElement('li');

    let divAssignment1 = document.createElement('div');
    divAssignment1.className = 'row';
    let inputAssignment1 = document.createElement('input');
    inputAssignment1.type = 'text';
    inputAssignment1.placeholder = 'Assignment';
    let inputWeightAssignment1 = document.createElement('input');
    inputWeightAssignment1.type = 'number';
    inputWeightAssignment1.placeholder = 'Weight (%)';
    let inputGradeAssignment1 = document.createElement('input');
    inputGradeAssignment1.type = 'number';
    inputGradeAssignment1.placeholder = 'Grade (%)';
    divAssignment1.appendChild(inputAssignment1);
    divAssignment1.appendChild(inputWeightAssignment1);
    divAssignment1.appendChild(inputGradeAssignment1);
    li1.appendChild(divAssignment1);

    console.log(idval + "add")
    let beforeElement = document.getElementById(idval.toString() + 'add');

    beforeElement.parentNode.insertBefore(li1, beforeElement);



    return;
}



function rmAssignment(id) {

    const addElement = document.getElementById(id.toString() + 'add');
    
    if (addElement) {
        const previousElement = addElement.previousElementSibling;
        
        if (previousElement && previousElement.tagName === 'LI') {
            const parentElement = addElement.parentElement;
            
            const liElements = parentElement.getElementsByTagName('li');
            if (liElements.length > 1) {
                previousElement.remove();
            } else {

            }
        }
    }
}



function rmFromarr(arr, num) {
    const index = arr.indexOf(num);
    if (index !== -1) {
        arr.splice(index, 1);
    }
    return arr;
}





function rmBox(box) {
    rmFromarr(boxes, box.match(/^\d+/)[0]);
    const divToRemove = document.getElementById(box.match(/^\d+/)[0]);
    const detailsTorm = document.getElementById(box.match(/^\d+/)[0].toString() + "details");

    divToRemove.remove();
    detailsTorm.remove();
    
    if (boxes.length < 1) {
        addDiv();

    }
    return;
}






function calcgpa() {
    let gpaTotal = 0;
    let creditsTotal = 0;

    boxData = readboxes();

    if (boxData == 1) {
        return;
    }

    for (let i = 0; i < boxData.weights.length; i++){
        gpaTotal = gpaTotal + (boxData.weights[i] * boxData.grades[i])
        creditsTotal = creditsTotal + Number(boxData.weights[i]);
    }
    gpaTotal = gpaTotal / creditsTotal;
    alert(gpaTotal.toFixed(2));
    return;
}




function readboxes() {
    const weights = [];
    const grades = [];

    for (let i = 0; i < boxes.length; i++) {
        inputData = readbox(boxes[i]);
        if (inputData.weight == "" && inputData.grade != "" || (inputData.grade  < 0)) {
            alert("Please enter a weight")
            return 1;
        } else {
            weights.push(inputData.weight);
        } 

        if (inputData.grade == "" && inputData.weight != "") {
            alert("Please enter a grade")
            return 1;
            
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



function readassignment(box) {
    const assignmentValues = [];
    const weightValues = [];
    const gradeValues = [];

    const addElement = document.getElementById(box.toString() + 'add');
    const listItems = addElement.parentNode.querySelectorAll('li');

    listItems.forEach((li) => {
        const inputs = li.querySelectorAll('input');
        const assignmentValue = inputs[0].value === '' ? 'empty' : inputs[0].value;
        const weightValue = inputs[1].value === '' ? 'empty' : inputs[1].value;
        const gradeValue = inputs[2].value === '' ? 'empty' : inputs[2].value;

        if ((weightValue != 'empty') && (gradeValue != 'empty')) {
            assignmentValues.push(assignmentValue);
            weightValues.push(weightValue);
            gradeValues.push(gradeValue);

        } if ((weightValue == 'empty') && (gradeValue != 'empty')) {
            alert("Weight error")
            return 'WeightError';
        } if ((weightValue != 'empty') && (gradeValue == 'empty')) {
            mainerror("Grade error")
            return 'GradeError';
        }


    });

    console.log(assignmentValues);
    console.log(weightValues);
    console.log(gradeValues);

    total = 0;

    for (let i = 0; i < weightValues.length; i++) {
        total = total + Number(weightValues[i]);
    }
    if (total != 100) {
        alert("Total Weight Must Equal 100%")
        return 'TotalWeighterror';
    }


    const assignmentData = {
        assignmentValues: assignmentValues,
        weightValues: weightValues,
        gradeValues: gradeValues

    }


    return assignmentData;

}



function calcGrade(box) {
    assignmentData = readassignment(box);

    totalGrade = 0;

    for (let i = 0; i < assignmentData.gradeValues.length; i++) {
        weightval = parseFloat(assignmentData.weightValues[i]) / 100;
        totalGrade = totalGrade + (weightval * assignmentData.gradeValues[i]);

    }
    console.log(totalGrade);

    let gradeBox = document.getElementById(box.toString() + "select");

    if (totalGrade < 60) {
        gradeBox.value = "0.00";
    } else if (totalGrade < 66) {
        gradeBox.value = "1.00";
    } else if (totalGrade < 70) {
        gradeBox.value = "1.33";
    } else if (totalGrade < 73) {
        gradeBox.value = "1.67";
    } else if (totalGrade < 76) {
        gradeBox.value = "2.00";
    } else if (totalGrade < 80) {
        gradeBox.value = "2.33";
    } else if (totalGrade < 83) {
        gradeBox.value = "2.67";
    } else if (totalGrade < 86) {
        gradeBox.value = "3.00";
    } else if (totalGrade < 90) {
        gradeBox.value = "3.33";
    } else if (totalGrade < 93) {
        gradeBox.value = "3.67";
    } else if (totalGrade < 100) {
        gradeBox.value = "4.00";
    } else {
        return;
    }


    gradeBox.classList.add('highlight');

    setTimeout(function() {
        gradeBox.classList.remove('highlight');
    }, 1000);

    return;

}






function addDiv() {
    counter = nextNum(boxes);
    console.log("Counter:" + counter);

    boxes.push(counter.toString());
    assignments.push(counter.toString());
    assignments.push(['1', '2']);
    console.log(boxes)
    console.log(assignments)


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
    selectGrade.id = counter.toString() + "select";
    selectGrade.addEventListener('change', function() {
        if (selectGrade.value === 'rm') {
            rmBox(selectGrade.id);
        }
    });
    let options = [
        { value: '', text: 'Grade' },
        { value: 'rm', text: 'Remove' },
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
    details.id = (counter.toString() + "details")
    let summary = document.createElement('summary');
    summary.textContent = 'Assignments (Optional)';
    details.appendChild(summary);

    let ul = document.createElement('ul');
    ul.id = ((2 * Number(counter)) + "ul");
    console.log(ul);
    let li1 = document.createElement('li');


    let buttonAddAssignment = document.createElement('button');
    buttonAddAssignment.textContent = '+ Add Another Assignment';
    buttonAddAssignment.id = counter.toString() + 'add';
    buttonAddAssignment.addEventListener('click', () => callbuttons(buttonAddAssignment.id));
    let buttonRemoveAssignment = document.createElement('button');
    buttonRemoveAssignment.textContent = '- Remove an Assignment';
    buttonRemoveAssignment.id = counter.toString() + 'min';
    buttonRemoveAssignment.addEventListener('click', () => callbuttons(buttonRemoveAssignment.id));
    let buttonCalculateGrade = document.createElement('button');
    buttonCalculateGrade.textContent = 'Calculate Course Grade';
    buttonCalculateGrade.id = counter.toString() + 'calc';
    buttonCalculateGrade.addEventListener('click', () => callbuttons(buttonCalculateGrade.id));
    let spanError = document.createElement('span');
    spanError.id = (counter.toString() + 'spana');
    spanError.className = 'error-span';

    li1.appendChild(buttonAddAssignment);
    li1.appendChild(buttonRemoveAssignment);
    li1.appendChild(buttonCalculateGrade);

    ul.appendChild(li1);

    details.appendChild(ul);

    let beforeElement = document.getElementById('before');

    beforeElement.parentNode.insertBefore(div, beforeElement);
    beforeElement.parentNode.insertBefore(details, beforeElement);


    console.log(div);


    addAssignment(counter);
    addAssignment(counter);




}





document.getElementById("addc").addEventListener('click', function() {
    callbuttons(document.getElementById("addc").id);
});

document.getElementById("calc").addEventListener('click', function() {
    callbuttons(document.getElementById("calc").id);
});

document.getElementById("goalb").addEventListener('click', function() {
    callbuttons(document.getElementById("goalb").id);
});



function callbuttons(callid){
    console.log(callid);


    if (callid == "addc") {
        addDiv();
        return;
    } else if (callid == "calc") {
        calcgpa();
        return;
    } else if (callid == "goalb") {
        goalGpa();
        return;
    } else if (callid.endsWith("add")) {
        addAssignment(callid.match(/^\d+/)[0]);
        return;
    } else if (callid.endsWith("min")) {
        rmAssignment(callid.match(/^\d+/)[0]);
        return;
    } else if (callid.endsWith("calc")) {
        calcGrade(callid.match(/^\d+/)[0]);
        return;
    }
}
