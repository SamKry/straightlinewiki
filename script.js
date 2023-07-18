//This code is not being used at all, I will just not delete it because I might or might not use it in the future

//Dialog Box
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
