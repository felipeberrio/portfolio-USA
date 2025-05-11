document.getElementById('downloadBtn').addEventListener('click', function () {
  const link = document.createElement('a');
  link.href = 'https://drive.google.com/file/d/1gESFzxMoUJaECOOB6JmkGXzzFhAvXOwA/view?usp=drive_link';
  link.download = 'Cristian_Berrio_Resume.pdf';
  link.click();
});
