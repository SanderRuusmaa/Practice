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
    offset: 0.67

})
.onStepEnter(handleStepEnter)
.onStepExit(handleStepExit)


// Lazy-loading

const targets = document.querySelectorAll("img");

const lazyLoad = target => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {

            if (entry.isIntersecting){
                const img = entry.target;
                const src = img.getAttribute('data-lazy');

                img.setAttribute('src', src);

                observer.disconnect();
            }
        });
    });

    io.observe(target);
};

targets.forEach(lazyLoad);