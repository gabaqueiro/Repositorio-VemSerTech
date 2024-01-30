        // Função para validar o formulário
        function validarForm() {
            var nome = document.getElementById('nome').value;
            var email = document.getElementById('email').value;
            var cep = document.getElementById('cep').value;

            // Validação de e-mail
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Por favor, insira um e-mail válido.');
                return false;
            }

            // Validação visual
            document.getElementById('nome').classList.remove('error');
            document.getElementById('email').classList.remove('error');
            document.getElementById('cep').classList.remove('error');

            if (nome.trim() === "") {
                document.getElementById('nome').classList.add('error');
                return false;
            }

            if (cep.trim() === "") {
                document.getElementById('cep').classList.add('error');
                return false;
            }
            window.location.replace("index.html");
            return false;
        }
        