$(document).ready(() => {
    // Set Previous and Current Expression to paragraph and form
    const prevExpression = $(`#previous-expression`);
    const currExpression = $(`#current-expression`);

    // State Variables
    let unclosedBrackets = 0;
    let clearedState = true;
    let decimalAllowed = true;
    let isPrevMathFunction = false;

    // Number button handler
    $('.btn-number').click(event => {
        let btnValue = event.target.textContent;

        if (!clearedState) {
            currExpression.text(currExpression.text() + btnValue);
        }
        else
        {
            currExpression.text(btnValue);
        }
        
        if (currExpression.text != "0")
        {
            clearedState = false;
        }
    })

    // Function button handler
    $('.btn-function').click(event => {
        let btnValue = event.target.textContent;

        if (isPrevMathFunction)
        {
            currExpression.text.slice(0, -1) + btnValue;
        }
        else
        {
            currExpression.text += btnValue;
        }
    })


    // Equals button handler
    $('#equals-button').click(() => {
        prevExpression.text = currExpression.text;
        currExpression.text = eval(currExpression.text);
    })

})
