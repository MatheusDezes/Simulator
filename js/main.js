const dropDowns = document.querySelectorAll('.dropdown');

dropDowns.forEach(dropDowns => {
    const select = dropDowns.querySelector('.select');
    const iconDrop = dropDowns.querySelector('.icon-drop');
    const menu = dropDowns.querySelector('.menu');
    const options = dropDowns.querySelectorAll('.menu li');
    const selected = dropDowns.querySelector('.selected');
    
    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        iconDrop.classList.toggle('icon-drop-rotate');
        menu.classList.toggle('menu-open');
    });
    
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            iconDrop.classList.remove('iconDrop-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});