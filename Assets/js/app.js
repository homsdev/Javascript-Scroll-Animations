
const row = document.querySelector('.row');

const options={
        root: null,
        rootMargin: '0px',
        threshold: 0.7
};

function scrollELement(element,swapClass,options){
    
    const internalCallback = function( entries) {
        let observedElement = entries[0];
    
        observedElement.isIntersecting ? 
        element.classList.toggle(swapClass): element.classList.toggle(swapClass); 
    };
    const observer = new IntersectionObserver( internalCallback, options );
    observer.observe(element);
}

scrollELement(row,'active',options);









