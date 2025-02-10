const open = document.getElementById ('open');
const model_container = document.getElementById ('model_container');
const close = document.getElementById ('close');

videodemo.addEventListener ('click', () => {
   model_container.classList.add('show');
});

close.addEventListener ('click', () => {
   model_container.classList.remove('show');
});