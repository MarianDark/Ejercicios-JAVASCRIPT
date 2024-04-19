document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('[data-function="testMe"]');
    
    elements.forEach(element => {
        console.log(element.textContent);
    });
});

