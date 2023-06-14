<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Home</title>
    
</head>
<body>
<header>
    <h1 class="logo"><img src="./imgs/logo.jpg" width="150" height="35"></img></h1>
</header>
<hr>
<?php
include_once('config.php');

$registrosPorPagina = 6; // Número de registros por página
$paginaAtual = isset($_GET['pagina']) ? $_GET['pagina'] : 1; // Página atual (parâmetro na URL)
$offset = ($paginaAtual - 1) * $registrosPorPagina; // Offset para a consulta SQL

$query = "SELECT * FROM alunos LIMIT $offset, $registrosPorPagina";
$result = mysqli_query($conexao, $query);

if (mysqli_num_rows($result) > 0) {
    echo '<table>';
    echo '<caption style="text-align:center;align-items:center;">Alunos cadastrados</caption>';
    echo '<tr>';
    echo '<th>Matrícula</th>';
    echo '<th>Nome</th>';
    echo '<th>Nota</th>';
    echo '</tr>';

    while ($row = mysqli_fetch_assoc($result)) {
        echo '<tr>';
        echo '<td class="dados" id="matricula">' . $row['matricula'] . '</td>';
        echo '<td class="dados">' . $row['nome'] . '</td>';
        if($row['nota'] < 10){
            echo '<td class="dados" id="nota">' . $row['nota'] . '.0<a href="read.php/?user='.$row['matricula'].'"><i class="fa-solid fa-plus" style="color: #6acbd2;position:fixed;margin-left:30px;"></i></a></td>';
        }else{
            echo '<td class="dados" id="nota">' . $row['nota'] . '<a href="read.php/?user='.$row['matricula'].'"><i class="fa-solid fa-plus" style="color: #6acbd2;position:fixed;margin-left:30px;"></i></td>';
        }
        echo '</tr>';
    }

    echo '</table>';
}else {
    echo 'Nenhum aluno cadastrado.';
}
    // Botões de navegação
    $queryTotal = "SELECT COUNT(*) AS total FROM alunos";
    $resultTotal = mysqli_query($conexao, $queryTotal);
    $rowTotal = mysqli_fetch_assoc($resultTotal);
    $totalRegistros = $rowTotal['total'];
    $totalPaginas = ceil($totalRegistros / $registrosPorPagina);
    $teste = 0;

    echo '<div class="navegacao">';

    if ($paginaAtual > 1) {
        echo '<a href="?pagina=' . ($paginaAtual - 1) . '" class="paginacao">< Anterior</a>';
    }
    if ($paginaAtual < $totalPaginas) {
        echo '&nbsp';
        echo '<a href="?pagina=' . ($paginaAtual + 1) . '" class="paginacao">Próximo></a>'; 
    }
    echo '</div>';



echo '<button class="botao-novo">Adicionar Novo Aluno</button>';

mysqli_close($conexao);
?>
<script src="https://kit.fontawesome.com/eec0e0d660.js" crossorigin="anonymous"></script>
</body>
</html>