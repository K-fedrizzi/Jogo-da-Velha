<!DOCTYPE html>
<html lang="en">
<head>
    <?php include('app/visao/head.php') ?>
    <title>Cadastro</title>
</head>

<body class="flex items-center justify-center">
    
    <div class="caixaButtons">
    <form  method="POST">
        <?php require 'app/visao/alert.php' ?>

            <div class="form-group">
                <label for="name">Nome</label>
                <input class="form-control" id="name" name="nome" type="text" placeholder="Seu nome" pattern=".{4,}" required>
            </div>

            <div class="form-group">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
                <input class="form-control" id="email" type="email" name="email" placeholder="meu@email.com" required>
            </div>

            <divclass="form-group">
                <label  for="password">Senha</label>
                <input class="form-control"  id="password" name="senha" type="password" placeholder="******************" pattern=".{4,}" required>
            </div>

            <div class="posButton">
                <a href="index.php?acao=entrar">Possui cadastro? Entre.</a>
                <button class="btn btn-primary" type="submit" >Cadastrar</button>
            </div>

        </form>
    </div>
    

</body>
</html>