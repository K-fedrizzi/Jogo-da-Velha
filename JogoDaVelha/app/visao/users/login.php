<!DOCTYPE html>
<html lang="en">

<head>
    <?php include('app/visao/head.php') ?>
    <title>login</title>
</head>

<body class="flex items-center justify-center">

<div class="caixaButtons2">

<?php require 'app/visao/alert.php' ?>

    <form  method="POST">
        <div class="form-group">
            <label for="email">Usuário</label>
            <input type="email" class="form-control" id="email" name="email" placeholder="meu@email.com" value="<?= $_GET['email'] ?>" required>
        </div>


        <div class="form-group">
            <label for="password">Senha</label>
            <input type="password" class="form-control" id="password" name="senha" placeholder="******************" pattern=".{4,}" required>
        </div>
<div class="posButton2">
<button type="submit" class="btn btn-primary">Entrar</button>

        <a class="inline-block align-baseline font-bold text-sm text-primary hover:text-blue-800" href="index.php?acao=cadastrar">
            Desejo me cadastrar.
        </a>
</div>
        
        
    </form>
</div>
    
</body>
</html>

