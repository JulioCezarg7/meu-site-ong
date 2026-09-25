document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('form-cadastro');
  const toast = document.getElementById('toast-sucesso');

  if (form && toast) {
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // Impede o recarregamento da página ao enviar

      // Exibe a mensagem "Cadastro realizado com sucesso!"
      toast.classList.add('show');

      // Limpa os campos do formulário
      form.reset();

      // Esconde a mensagem automaticamente após 4 segundos (4000 milissegundos)
      setTimeout(function () {
        toast.classList.remove('show');
      }, 4000);
    });
  }
});
