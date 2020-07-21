var scroller = scrollama();

function handleStepEnter(response){
    response.element.style.opacity = 1;
}

function handleStepExit(response){
    if (response.direction === 'up') {
        response.element.style.opacity = 0;
    }
    
}


scroller.setup({
    step: '.scrollamaContainer',
    offset: 0.55

})
.onStepEnter(handleStepEnter)
.onStepExit(handleStepExit)