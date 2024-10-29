$(document).ready(function () {
    // Captura o evento de envio do formulário
    $('#taskForm').on('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obtém o valor do campo de entrada
        let taskName = $('#taskName').val();

        // Adiciona um novo item <li> na lista com a tarefa
        $('#taskList').append('<li>' + taskName + '</li>');

        // Limpa o campo de entrada
        $('#taskName').val('');
    });

    // Adiciona o evento de clique aos itens da lista para marcar como concluído
    $('#taskList').on('click', 'li', function () {
        $(this).toggleClass('completed'); // Aplica ou remove o efeito de linha em cima do texto
    });
});