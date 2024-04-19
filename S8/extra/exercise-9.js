document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('button[data-fn="callACat"]');
    button.addEventListener('click', () => {
        fetch('http://localhost:3000/cats')
            .then(response => response.json())
            .then(data => {
                const cat = data[Math.floor(Math.random() * data.length)];
                alert(`You've called a cat named ${cat.name}!`);
            })
            .catch(error => {
                console.error('Error calling a cat:', error);
                alert('Oops! Something went wrong while calling a cat. Please try again later.');
            });
    });
});
