<?php

error_reporting(E_ERROR | E_WARNING | E_PARSE);
/**
* Conecta ao banco e cria o schema (tabela Usuários)
*/
include_once('app/modelos/Banco.php');
Banco::criarTabelas();

/**
* Cria uma instância do controlador para uso
*/
include_once('app/controladores/Login.php');
$controller = new LoginController();

/**
* ???? O que este trecho faz ????
*/

switch ($_GET['acao']) {
    case 'cadastrar':
        $controller->cadastrar();
        break;
    case 'velha':
        $controller->velha();
        break;
    case 'sair':
        $controller->sair();
        break;
        
    default:
        $controller->login();
}

?>