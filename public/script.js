const deleteButton = document.querySelectorAll('#delete-button');

deleteButton.forEach( button => {
    button.addEventListener('click', ()=> {
        const row = deleteButton.closest('tr');
        row.remove();
    });
});
