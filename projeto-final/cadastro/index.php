<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastro</title>
    <link rel="stylesheet" href="style.css">
    <link rel="icon" href="imgs/favicon.png" sizes="32x32">
    <script src="https://kit.fontawesome.com/eec0e0d660.js" crossorigin="anonymous"></script>

</head>
<body>


<!-- <div id="loading" style="display:none;"> 
    <div class="loading-spinner">
        <span class="text-loading">Carregando</span>
        <div class="loading-spinner-inner">
          <div class="loading-spinner-circle"></div>
          <div class="loading-spinner-circle"></div>
          <div class="loading-spinner-circle"></div>
          <div class="loading-spinner-circle"></div>
          <div class="loading-spinner-circle"></div>
        </div>
    </div>
</div> -->

<!-- <div id="bg" style="display:none;">
    <div id="pop-up" style="display:none;"><i class="fa-regular fa-circle-xmark fa-2xl" style="color: #ff0000;"></i><br>
        <h1 class="message" id="title_success" style="display:flex;">Usuário não encontrado!</h1>
        <h1 class="message" id="title_full" style="display:none;"><span class="text-1"><div style="display:flex;justify-content:center;">Que pena...</div><br>Todas as vagas estão reservadas!</h1>
        <button onclick="fecharPop()" class="cssbuttons-io-button" id="fechar"> Fechar
            <div class="icon">
            x
            </div>
        </button>
    </div>
</div> -->

    
    <header><h1 class="logo"><img src="../imgs/logo.jpg" width="150" height="35"></a></img></h1>
      
    </header>

    <form method="POST" action="index.php" class="form" autocomplete="off">
        <p class="form-title">Cadastro</p>
        <div class="form-control">
            <input type="value" id="nome" name="nome" required="">
            <label>
                <span style="transition-delay:0ms">N</span><span style="transition-delay:50ms">o</span><span style="transition-delay:100ms">m</span><span style="transition-delay:150ms">e</span> 
            </label>
        </div>

        <div class="form-control">
            <input type="email" id="email" name="email" required="">
            <label>
                <span style="transition-delay:0ms">E</span><span style="transition-delay:50ms">-</span><span style="transition-delay:100ms">m</span><span style="transition-delay:150ms">a</span><span style="transition-delay:200ms">i</span><span style="transition-delay:250ms">l</span>
            </label>
        </div> 
        <div class="form-control">
            <input type="tel" id="telefone" name="telefone"required="">
            <label>
                <span style="transition-delay:0ms">T</span><span style="transition-delay:50ms">e</span><span style="transition-delay:100ms">l</span><span style="transition-delay:150ms">e</span><span style="transition-delay:200ms">f</span><span style="transition-delay:250ms">o</span><span style="transition-delay:300ms">n</span><span style="transition-delay:350ms">e</span>
            </label>
        </div>      
    
        <div class="form-control">
            <input type="password" id="senha" name="senha" required="">
            <label>
                <span style="transition-delay:0ms">S</span><span style="transition-delay:50ms">e</span><span style="transition-delay:100ms">n</span><span style="transition-delay:150ms">h</span><span style="transition-delay:200ms">a</span>
            </label>
        </div>
        <button type="submit" class="submit">
            Entrar
        </button>

        
        <p>Já possui um <a href="../login/index.php">login</a>?</p>

    </form>

    <?php
            if (isset($_POST["nome"])) {

                include_once('../config.php');

                $nome = $_POST["nome"];
                $email = $_POST["email"];
                $telefone = $_POST["telefone"];
                $senha = $_POST["senha"];
                $senhamd5 = md5($senha);

                $result = mysqli_query($conexao, "INSERT INTO usuarios(nome, email, telefone, senha) VALUES ('$nome', '$email', '$telefone', '$senhamd5')");

            }
    ?>



    <script type="text/javascript" src="./agendamento/script.js"></script>
    <script type="text/javascript" src="script.js"></script>

</body>
</html>
 