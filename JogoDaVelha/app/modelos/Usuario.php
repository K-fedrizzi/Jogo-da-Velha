<?php

include_once("Banco.php");

/**
* ???? Descreva detalhadamente o que essa classe faz ????
*/
class Usuario {

    /**
    * ?????
    * @var string ????
    */
    private $email;

    /**
    * ?????
    * @var string ????
    */
    private $senha;

    /**
    * ?????
    * @var string ????
    */
    private $nome;

    /**
    *  ???? Descreva detalhadamente o que esse método faz ????
    */
    function __construct(string $email, string $senha, string $nome) {
        $this->email = $email;
        $this->senha = hash('sha256', $senha);
        $this->nome = $nome;
    }

    /**
    *  ???? Descreva detalhadamente o que esse método faz ????
    */
    public function __get($campo) {
        return $this->$campo;
    }

    /**
    *  ???? Descreva detalhadamente o que esse método faz ????
    */
    public function __set($campo, $valor) {
        return $this->$campo = $valor;
    }

    /**
    *  ???? Descreva detalhadamente o que esse método faz ????
    */
    public function igual(string $email, string $senha) {
        return $this->email === $email && $this->senha === hash('sha256', $senha);
    }

    /**
     *  Função que salva os dados de um usuário no banco.
     *  Esta função não sobrescreve dados.
     */
    public function salvar() {
        $db = Banco::getInstance();
        $stmt = $db->prepare('INSERT INTO Usuarios (email, senha, nome) VALUES (:email, :senha, :nome)');
        $stmt->bindValue(':email', $this->email);
        $stmt->bindValue(':senha', $this->senha);
        $stmt->bindValue(':nome', $this->nome);
        $stmt->execute();
    }

    /**
     * Função estática, pois não depende do estado de uma instância,
     * para buscar um usuário no banco.
     * 
     * @return Usuario retorna ums instância de usuário
     */
    public static function buscar(string $email) {
        $db = Banco::getInstance();

        $stmt = $db->prepare('SELECT * FROM Usuarios WHERE email = :email');
        $stmt->bindValue(':email', $email);
        $stmt->execute();

        $resultado = $stmt->fetch();

        if ($resultado) {
            $usuario = new Usuario($resultado['email'], $resultado['senha'], $resultado['nome']);
            $usuario->senha = $resultado['senha'];
            return $usuario;
        } else {
            return NULL;
        }
    }
}

?>