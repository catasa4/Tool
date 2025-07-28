/**
 * Change preview background color
 * @param {HTMLButtonElement} event
 * @param {"notice"|"mail"|"alert"|"announcement"} previewType
 */
function changePreviewColor(event, previewType) {

  document.querySelectorAll('#preview-toolbar button').forEach((el) => {
    el.classList.remove('active');
  });

  event.currentTarget.classList.add('active');

  previewElement.classList.remove('notice', 'mail', 'alert', 'announcement');

  const hasError = previewElement.classList.contains('error');

  previewElement.className = previewType;

  if (hasError) {
    previewElement.classList.add('error');
  }
}
