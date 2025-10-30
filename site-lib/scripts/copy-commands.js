document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.copy-code-button').forEach(button => {
    button.addEventListener('click', () => {
      // busca el <code> correcto dentro del div .el-pre
      const code = button.closest('.el-pre')?.querySelector('code');
      if (!code) return;

      navigator.clipboard.writeText(code.innerText)
        .then(() => {
          button.innerText = 'Copied!';
          setTimeout(() => button.innerText = '', 1000);
        })
        .catch(err => console.error('Error copying text: ', err));
    });
  });
});
