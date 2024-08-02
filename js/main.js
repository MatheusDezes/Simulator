import file from './phonemask';


const dropDowns = document.querySelectorAll('.dropdown');

dropDowns.forEach(dropDowns => {
    const select = dropDowns.querySelectorAll('.select');
    const iconDrop = dropDowns.querySelectorAll('.icon-drop');
    const menu = dropDowns.querySelectorAll('.menu');
    const options = dropDowns.querySelectorAll('.menu li');
    const selected = dropDowns.querySelectorAll('.selected');
});

select.addEventListener('click', () => {
    iconDrop.classList.toggle('iconDrop-rotate');
    menu.classList.toggle('.menu-open');
    
    options.forEach(option => {
        option.addEventListener('', () => {
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