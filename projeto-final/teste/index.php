<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <form class="formulario" method="POST" action="index.php">
        <p>Preencha os dados do aluno</p>
        <div class="dados">
        <div>
        <label for="nome">Nome:</label>
            <input type="text" name="nome" placeholder="Digite o nome do aluno">
        </div> 

        <div>
        <label for="email">E-mail:</label>
        <input type="email" name="email" placeholder="Digite o e-mail do aluno">
        </div>

        <div>
        <label for="cpf">CPF:</label>
        <input type="number" name="cpf" placeholder="Digite o CPF do aluno">
        </div>
        </div>

        <input type="submit" name="concluir" value="Concluir">
    </form>
</body>
</html>
