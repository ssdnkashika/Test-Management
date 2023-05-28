const DoneButton = document.getElementById('Done')
const NextButton = document.getElementById('Next')
const container = document.getElementById('container')

function redirectToSubject() {
    event.preventDefault(); // Prevent form submission

    var selectedOption = document.querySelector('select').value;

    if (selectedOption === 'C-Programming') {
        window.location.href = 'c-programming.html'; // Redirect to C-Programming page
    } else if (selectedOption === 'HTML') {
        window.location.href = 'html.html'; // Redirect to HTML page
    } else if (selectedOption === 'Python') {
        window.location.href = 'python.html'; // Redirect to Python page
    }

    return false; // Prevent form submission
}


function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

DoneButton.addEventListener('click',()=> {
    container.classList.add("right-panel-active")
})
NextButton.addEventListener('click',()=> {
    container.classList.remove("right-panel-active")
})
