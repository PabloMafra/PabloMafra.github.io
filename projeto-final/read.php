<?php
include_once('config.php');

// Verifica se o parâmetro "user" foi passado na URL
if (isset($_GET['user'])) {
    // Obtém o valor do parâmetro "user"
    $user = $_GET['user'];

    // Executa a consulta SQL
    $query = "SELECT * FROM alunos WHERE matricula = '$user'";
    $result = mysqli_query($conexao, $query);

    if ($result) {
        if (mysqli_num_rows($result) > 0) {
            while ($row = mysqli_fetch_assoc($result)) {
                echo 'Matrícula: ' . $row['matricula'] . '<br>';
                echo 'Nome: ' . $row['nome'] . '<br>';
                echo 'Nota: ' . $row['nota'] . '<br>';
                echo 'Endereço: ' . $row['endereco'] . '<br>';
                echo 'Telefone: ' . $row['telefone'] . '<br>';
            }
        } else {
            echo 'Nenhum aluno encontrado com a matrícula: ' . $user;
        }
    } else {
        echo 'Erro na consulta: ' . mysqli_error($conexao);
    }

    mysqli_close($conexao);
} else {
    echo 'Parâmetro "user" não encontrado na URL';
}

?>