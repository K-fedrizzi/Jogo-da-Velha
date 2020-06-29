
<!DOCTYPE html>
<html lang="en">
<head>
    <?php include('app/visao/head.php') ?>
    <title>Jogo da Velha</title>
</head>

<!--Carrega o Script do jogo e a Folha de Estilo CSS-->
<SCRIPT LANGUAGE="javascript">
    <?php
        include('app/controladores/velha.js') ;
    ?>
</SCRIPT>

<STYLE>
    <?php
        include('publico/estilos/style.css') ;
    ?>
</STYLE>

<BODY ONLOAD="FocarBotao()" class="flex items-center justify-center">

    <DIV class="tabuleiro-container">
        <FORM NAME="QUADRO">
        <DIV class="textAviso">
                <INPUT TYPE="TEXT" NAME="MENSG"  VALUE="Clique em 'Jogar agora' para iniciar">
            </DIV>
            <!-- PRIMEIRA LINHA DE BOTOES DO QUADRO -->
            <DIV>
                <INPUT  class="btn btn-primary" TYPE="BUTTON" NAME="L[1]C[1]" DISABLED VALUE="?" ONCLICK="Usuario_Joga(1,1)"CLASS="m00"ID="blocoArea">
                <INPUT  class="btn btn-primary" TYPE="BUTTON" NAME="L[1]C[2]" DISABLED VALUE="?" ONCLICK="Usuario_Joga(1,2)"CLASS="m00"ID="blocoArea">
                <INPUT  class="btn btn-primary" TYPE="BUTTON" NAME="L[1]C[3]" DISABLED VALUE="?" ONCLICK="Usuario_Joga(1,3)"CLASS="m00"ID="blocoArea">
            </DIV>
            <!-- SEGUNDA LINHA DE BOTOES DO QUADRO -->
            <DIV>
                <INPUT  class="btn btn-primary" TYPE="BUTTON" NAME="L[2]C[1]" DISABLED VALUE="?" ONCLICK="Usuario_Joga(2,1)"CLASS="m00"ID="blocoArea">
                <INPUT  class="btn btn-primary" TYPE="BUTTON" NAME="L[2]C[2]" DISABLED VALUE="?" ONCLICK="Usuario_Joga(2,2)"CLASS="m00"ID="blocoArea">
                <INPUT  class="btn btn-primary" TYPE="BUTTON" NAME="L[2]C[3]" DISABLED VALUE="?" ONCLICK="Usuario_Joga(2,3)"CLASS="m00"ID="blocoArea">
            </DIV>
            <!-- TERCEIRA LINHA DE BOTOES DO QUADRO -->
            <DIV>
                <INPUT  class="btn btn-primary" TYPE="BUTTON" NAME="L[3]C[1]" DISABLED VALUE="?" ONCLICK="Usuario_Joga(3,1)"CLASS="m00"ID="blocoArea">
                <INPUT  class="btn btn-primary" TYPE="BUTTON" NAME="L[3]C[2]" DISABLED VALUE="?" ONCLICK="Usuario_Joga(3,2)"CLASS="m00"ID="blocoArea">
                <INPUT  class="btn btn-primary" TYPE="BUTTON" NAME="L[3]C[3]" DISABLED VALUE="?" ONCLICK="Usuario_Joga(3,3)"CLASS="m00"ID="blocoArea">
            </DIV>
            <!-- CONFIGURAÇÕES DO JOGO -->
            <DIV class="conf01">
                <SELECT class="form-control" NAME="ESCOLHA" SIZE="2">
                    <OPTION VALUE=" O " SELECTED>Jogar com 'O'</OPTION>
                    <OPTION VALUE=" X ">Jogar com 'X'</OPTION>
                </SELECT>

                <SELECT class="form-control" NAME="Q_COMECA" SIZE="2">
                    <OPTION VALUE="PC" SELECTED>Computador começa</OPTION>
                    <OPTION VALUE="USU">Você começa</OPTION>
                </SELECT>
            </DIV>

            <DIV class="conf02 form-group">
                <SELECT class="form-control" NAME="NIVEL" SIZE="1">
                    <OPTION VALUE="D" SELECTED>Jogar no nível difícil</OPTION>
                    <OPTION VALUE="F">Jogar no nível fácil</OPTION>
                </SELECT>
            </DIV>

            <DIV class="conf03">
                <INPUT class="form-control" TYPE="BUTTON" VALUE="Jogar agora" NAME="BTJOGAR" ONCLICK="BTJOGAR_Click()">
                <INPUT class="form-control" TYPE="BUTTON" VALUE="Zerar placar" NAME="ZERAR" ONCLICK="Zera_Placar()">
            </DIV>

            <!-- PLACAR DO JOGO -->
            <DIV class="ptPC">
                <LABEL for="ponto" class="textFormatScore"> PC Score:</LABEL> 
                <INPUT class="scorePoint form-control" id="ponto" TYPE="TEXT" NAME="PONTOS_PC" VALUE="0">
            </DIV>

            <DIV class="ptJog">
                <LABEL for="ponto" class="textFormatScore">Player Score:</LABEL> 
                <INPUT id="ponto" class="scorePoint form-control" TYPE="TEXT" NAME="PONTOS_USU"VALUE="0">
            </DIV>

        </FORM>
        <div class="sair">
        <FORM action="?acao=sair" method="POST">
        <button  class="btn btn-primary" type="submit">Sair do Jogo</button>
        </FORM>
        </div>
       
    </DIV>
        
</BODY>
</html>
