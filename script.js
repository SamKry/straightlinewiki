
//DIALOG BOX

const openDialogBtn = document.getElementById('open-dialog-btn');
const dialog = document.getElementById('dialog');
openDialogBtn.addEventListener('click', () => {
  dialog.showModal();
});
dialog.addEventListener('click', (event) => {
  if (event.target.tagName === 'DIALOG') {
    dialog.close();
  }
});
