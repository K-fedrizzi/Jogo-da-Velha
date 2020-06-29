<?php 

require 'app/modelos/Usuario.php';
require 'Controlador.php';

/**
* ???? Descreva detalhadamente o que essa classe faz ????
*/
class LoginController extends Controller  {
    
    /**
    * ?????
    * @var Usuario ????
    */
    private $loggedUser;
    
    /**
    *  ???? Descreva detalhadamente o que esse método faz ????
    */
    function __construct() {
        session_start();
        if (isset($_SESSION['user'])) $this->loggedUser = $_SESSION['user'];
    }
    
    /**
    *  ???? Descreva detalhadamente o que esse método faz ????
    */
    public function login() {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $usuario = Usuario::buscar($_POST['email']);

            if (!is_null($usuario) && $usuario->igual($_POST['email'], $_POST['senha'])) {
                $_SESSION['user'] = $this->loggedUser = $usuario;
            }
            

            if ($this->loggedUser) {
                header('Location: index.php?acao=velha');
            } else {
                header('Location: index.php?email=' . $_POST['email'] . '&mensagem=Usuário e/ou senha incorreta!');
            }
        } else {
            if (!$this->loggedUser) {
                $this->view('users/login');
            } else {
                header('Location: index.php?acao=velha');
            }
        }
    }

    /**
    *  ???? Descreva detalhadamente o que esse método faz ????
    */
    public function cadastrar() {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            $user = new Usuario($_POST['email'], $_POST['senha'], $_POST['nome']);
            
            try {
                $user->salvar();
                header('Location: index.php?email=' . $_POST['email'] . '&mensagem=Usuário cadastrado com sucesso!');
            } catch(PDOException $erro) {
                header('Location: index.php?acao=cadastrar&mensagem=Email já cadastrado!');
            }
        }
        $this->view('users/cadastrar');
    }

    /**
    *  ???? Descreva detalhadamente o que esse método faz ????
    */
    public function velha() {
        if (!$this->loggedUser) {
            header('Location: index.php?acao=entrar&mensagem=Você precisa se identificar primeiro');    
            return;
        }
        $this->view('users/velha', $this->loggedUser);        
    }

    /**
    *  ???? Descreva detalhadamente o que esse método faz ????
    */
    public function sair() {
        if (!$this->loggedUser) {
            header('Location: index.php?acao=entrar&mensagem=Você precisa se identificar primeiro');
            return;
        }
        unset($_SESSION['user']);
        header('Location: index.php?mensagem=Usuário deslogado com sucesso!');
    }
}

?>