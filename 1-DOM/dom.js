function manipulateDom() {
    // 
    const quote = document.querySelectorAll('.quote');
    [...quote].map(item => {
        item.style.borderColor = 'blue';
        item.style.backgroundColor = 'lightblue';
        item.style.fontStyle = 'italic';        
    })
};

export { manipulateDom };