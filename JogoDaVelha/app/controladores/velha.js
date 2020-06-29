var Jogando = false;	// Identifica se há um jogo ocorrendo ou não.
var Msg_Padrao = "Clique em 'Jogar agora' para iniciar"; // Mensagem padrão da barra de mensagens do jogo.
var Vez = "PC"; // O padrão é o computador começar o jogo.
var BT_Jogados = 0; // Indica o número de botões jogados na pertida (0 a 9)

function InformaVitoria(B1, B2, B3) {
    // Esta função informa o ganhador, marca a sequência feita e atualiza o placar.
    CorPadrao = "#E0E0E0";
    CorGanhador = "#C0C0C0";
    document.all[B1].style.background = CorGanhador;
    document.all[B2].style.background = CorGanhador;
    document.all[B3].style.background = CorGanhador;

    if (document.all[B1].value == QUADRO.ESCOLHA.value) {
        alert("Você ganhou.");
        QUADRO.PONTOS_USU.value = (QUADRO.PONTOS_USU.value * 1) + 1;
    } else {
        alert("Computador ganhou.");
        QUADRO.PONTOS_PC.value = (QUADRO.PONTOS_PC.value * 1) + 1;
    }

    document.all[B1].style.background = CorPadrao;
    document.all[B2].style.background = CorPadrao;
    document.all[B3].style.background = CorPadrao;

    Ativacao_Quadro(false); // Desabilita o quadro para limpar os campos,
    Ativacao_Quadro(true);  // Habilita novamente o quadro para continuar o jogo.

    // Se o PC ganhou, ele começa o próximo jogo:
    if (Vez == "PC")
        PC_Jogar();
}

function VerResultado() {
    /*
    Esta função verifica se há um ganhador após a jogada efetuada ou
    se terminou com empate.
    */

    // Verifica se há ganhador por colunas com X:
    for (coluna = 1; coluna < 4; coluna++) {
        if ((document.all["L[1]C[" + coluna + "]"].value == " X ") && (document.all["L[2]C[" + coluna + "]"].value == " X ") && (document.all["L[3]C[" + coluna + "]"].value == " X ")) {
            InformaVitoria("L[1]C[" + coluna + "]", "L[2]C[" + coluna + "]", "L[3]C[" + coluna + "]");
            return true;
        }
    }
    // Verifica se há ganhador por colunas com O:
    for (coluna = 1; coluna < 4; coluna++) {
        if ((document.all["L[1]C[" + coluna + "]"].value == " O ") && (document.all["L[2]C[" + coluna + "]"].value == " O ") && (document.all["L[3]C[" + coluna + "]"].value == " O ")) {
            InformaVitoria("L[1]C[" + coluna + "]", "L[2]C[" + coluna + "]", "L[3]C[" + coluna + "]");
            return true;
        }
    }
    // Verifica se há ganhador por linhas com X:
    for (linha = 1; linha < 4; linha++) {
        if ((document.all["L[" + linha + "]C[1]"].value == " X ") && (document.all["L[" + linha + "]C[2]"].value == " X ") && (document.all["L[" + linha + "]C[3]"].value == " X ")) {
            InformaVitoria("L[" + linha + "]C[1]", "L[" + linha + "]C[2]", "L[" + linha + "]C[3]");
            return true;
        }
    }
    // Verifica se há ganhador por linhas com O:
    for (linha = 1; linha < 4; linha++) {
        if ((document.all["L[" + linha + "]C[1]"].value == " O ") && (document.all["L[" + linha + "]C[2]"].value == " O ") && (document.all["L[" + linha + "]C[3]"].value == " O ")) {
            InformaVitoria("L[" + linha + "]C[1]", "L[" + linha + "]C[2]", "L[" + linha + "]C[3]");
            return true;
        }
    }
    // Verifica se há ganhador nas diagonais com X:
    if ((document.all["L[1]C[1]"].value == " X ") && (document.all["L[2]C[2]"].value == " X ") && (document.all["L[3]C[3]"].value == " X ")) {
        InformaVitoria("L[1]C[1]", "L[2]C[2]", "L[3]C[3]");
        return true;
    }
    if ((document.all["L[1]C[3]"].value == " X ") && (document.all["L[2]C[2]"].value == " X ") && (document.all["L[3]C[1]"].value == " X ")) {
        InformaVitoria("L[1]C[3]", "L[2]C[2]", "L[3]C[1]");
        return true;
    }
    // Verifica se há ganhador nas diagonais com O:
    if ((document.all["L[1]C[1]"].value == " O ") && (document.all["L[2]C[2]"].value == " O ") && (document.all["L[3]C[3]"].value == " O ")) {
        InformaVitoria("L[1]C[1]", "L[2]C[2]", "L[3]C[3]");
        return true;
    }
    if ((document.all["L[1]C[3]"].value == " O ") && (document.all["L[2]C[2]"].value == " O ") && (document.all["L[3]C[1]"].value == " O ")) {
        InformaVitoria("L[1]C[3]", "L[2]C[2]", "L[3]C[1]");
        return true;
    }

    if (BT_Jogados == 9) {
        if (Vez == "PC") {
            Nome = "Você";
        } else {
            Nome = "Computador";
        }
        alert("Empate! " + Nome + " joga novamente.");
        Ativacao_Quadro(false);
        Ativacao_Quadro(true);
    }
}

function Ver_Chances(Jogador) {
    /*
    Esta função verifica se há chance de algum jogador (PC ou você) fechar a partida, ou seja,
    completar uma sequência de 3 quadros com X ou O.
    Se Houver alguma chance, ela retorna o quadro que deve ser preenchido para fechar a partida.
    */

    if (Jogador == "PC") {
        // Se quer ver as chances do computador...
        if (QUADRO.ESCOLHA.value == " X ") {
            // Verifica a escolha do usuário e busca a outra.
            Op = " O ";
        } else {
            Op = " X ";
        }
    } else {
        // Se quer buscar as chances do usuário, verifica qual foi a sua escolha.
        Op = QUADRO.ESCOLHA.value;
    }

    var N = "?"; // Valor padrão para o quadro ainda não jogado.

    /*
    Primeiro, é preciso criar uma matriz que armazena quais são as posições possíveis
    do jogo para se fechar a partida.
    Existem 21 chances de ganhar fechar o jogo.
    */

    Chances = new Array();
    Chances[0] = new Array("L[1]C[1]", "L[1]C[2]", "L[1]C[3]"); // X X . (linha 1)
    Chances[1] = new Array("L[1]C[1]", "L[1]C[3]", "L[1]C[2]"); // X . X (linha 1)
    Chances[2] = new Array("L[1]C[2]", "L[1]C[3]", "L[1]C[1]"); // . X X (linha 1)
    Chances[3] = new Array("L[2]C[1]", "L[2]C[2]", "L[2]C[3]"); // X X . (linha 2)
    Chances[4] = new Array("L[2]C[1]", "L[2]C[3]", "L[2]C[2]"); // X . X (linha 2)
    Chances[5] = new Array("L[2]C[2]", "L[2]C[3]", "L[2]C[1]"); // . X X (linha 2)
    Chances[6] = new Array("L[3]C[1]", "L[3]C[2]", "L[3]C[3]"); // X X . (linha 3)
    Chances[7] = new Array("L[3]C[1]", "L[3]C[3]", "L[3]C[2]"); // X . X (linha 3)
    Chances[8] = new Array("L[3]C[2]", "L[3]C[3]", "L[3]C[1]"); // . X X (linha 3)
    Chances[9] = new Array("L[1]C[1]", "L[2]C[1]", "L[3]C[1]"); // X X . (coluna 1)
    Chances[10] = new Array("L[1]C[1]", "L[3]C[1]", "L[2]C[1]"); // X . X (coluna 1)
    Chances[11] = new Array("L[2]C[1]", "L[3]C[1]", "L[1]C[1]"); // . X X (coluna 1)
    Chances[12] = new Array("L[1]C[2]", "L[2]C[2]", "L[3]C[2]"); // X X . (coluna 2)
    Chances[13] = new Array("L[1]C[2]", "L[3]C[2]", "L[2]C[2]"); // X . X (coluna 2)
    Chances[14] = new Array("L[2]C[2]", "L[3]C[2]", "L[1]C[2]"); // . X X (coluna 2)
    Chances[15] = new Array("L[1]C[3]", "L[2]C[3]", "L[3]C[3]"); // X X . (coluna 3)
    Chances[16] = new Array("L[1]C[3]", "L[3]C[3]", "L[2]C[3]"); // X . X (coluna 3)
    Chances[17] = new Array("L[2]C[3]", "L[3]C[3]", "L[1]C[3]"); // . X X (coluna 3)
    Chances[18] = new Array("L[1]C[1]", "L[2]C[2]", "L[3]C[3]"); // X X . (diag. esq.)
    Chances[19] = new Array("L[1]C[1]", "L[3]C[3]", "L[2]C[2]"); // X . X (diag. esq.)
    Chances[20] = new Array("L[2]C[2]", "L[3]C[3]", "L[1]C[1]"); // . X X (diag. esq.)
    Chances[21] = new Array("L[1]C[3]", "L[2]C[2]", "L[3]C[1]"); // X X . (diag. dir.)
    Chances[22] = new Array("L[1]C[3]", "L[3]C[1]", "L[2]C[2]"); // X . X (diag. dir.)
    Chances[23] = new Array("L[2]C[2]", "L[3]C[1]", "L[1]C[3]"); // . X X (diag. dir.)

    var item = 0;
    while (item < 24) {
        /*
        Agora verifica as possibilidades até encontrar alguma chance.
        */
        if ((document.all[Chances[item][0]].value == Op) && (document.all[Chances[item][1]].value == Op) && (document.all[Chances[item][2]].value == N)) {
            // Se encontrou, retorna o quadro a ser jogado para fechar a sequência.
            return Chances[item][2];
            // E para a busca por chances.
            break;
        }

        item++; // Verificar a próxima possibilidade.
    }
}

function Armacoes() {
    /* Esta função busca locais onde é possível armar jogadas para fechar 
    o jogo no próximo lance. */
    Jogadas = new Array();
    Jogadas[0] = new Array("L[1]C[1]", "L[1]C[2]", "L[1]C[3]"); // . . X (linha 1)
    Jogadas[1] = new Array("L[1]C[1]", "L[1]C[3]", "L[1]C[2]"); // . X . (linha 1)
    Jogadas[2] = new Array("L[1]C[3]", "L[1]C[2]", "L[1]C[1]"); // X . . (linha 1)
    Jogadas[3] = new Array("L[2]C[1]", "L[2]C[2]", "L[2]C[3]"); // . . X (linha 2)
    Jogadas[4] = new Array("L[2]C[1]", "L[2]C[3]", "L[2]C[2]"); // . X . (linha 2)
    Jogadas[5] = new Array("L[2]C[3]", "L[2]C[2]", "L[2]C[1]"); // X . . (linha 2)
    Jogadas[6] = new Array("L[3]C[1]", "L[3]C[2]", "L[3]C[3]"); // . . X (linha 3)
    Jogadas[7] = new Array("L[3]C[1]", "L[3]C[3]", "L[3]C[2]"); // . X . (linha 3)
    Jogadas[8] = new Array("L[3]C[3]", "L[3]C[2]", "L[3]C[1]"); // X . . (linha 3)
    Jogadas[9] = new Array("L[1]C[1]", "L[2]C[1]", "L[3]C[1]"); // . . X (coluna 1)
    Jogadas[10] = new Array("L[1]C[1]", "L[3]C[1]", "L[2]C[1]"); // . X . (coluna 1)
    Jogadas[11] = new Array("L[3]C[1]", "L[2]C[1]", "L[1]C[1]"); // X . . (coluna 1)
    Jogadas[12] = new Array("L[1]C[2]", "L[2]C[2]", "L[3]C[2]"); // . . X (coluna 2)
    Jogadas[13] = new Array("L[1]C[2]", "L[3]C[2]", "L[2]C[2]"); // . X . (coluna 2)
    Jogadas[14] = new Array("L[3]C[2]", "L[2]C[2]", "L[1]C[2]"); // X . . (coluna 2)
    Jogadas[15] = new Array("L[1]C[3]", "L[2]C[3]", "L[3]C[3]"); // . . X (coluna 3)
    Jogadas[16] = new Array("L[1]C[3]", "L[3]C[3]", "L[2]C[3]"); // . X . (coluna 3)
    Jogadas[17] = new Array("L[3]C[3]", "L[2]C[3]", "L[1]C[3]"); // X . . (coluna 3)
    Jogadas[18] = new Array("L[1]C[1]", "L[2]C[2]", "L[3]C[3]"); // . . X (diag. esq.)
    Jogadas[19] = new Array("L[1]C[1]", "L[3]C[3]", "L[2]C[2]"); // . X . (diag. esq.)
    Jogadas[20] = new Array("L[3]C[3]", "L[2]C[2]", "L[1]C[1]"); // X . . (diag. esq.)
    Jogadas[21] = new Array("L[1]C[3]", "L[2]C[2]", "L[3]C[1]"); // . . X (diag. dir.)
    Jogadas[22] = new Array("L[1]C[3]", "L[3]C[1]", "L[2]C[2]"); // . X . (diag. dir.)
    Jogadas[23] = new Array("L[3]C[1]", "L[2]C[2]", "L[1]C[3]"); // X . . (diag. dir.)

    // Com as jogadas armazenadas, basta buscar uma possibilidade.
    for (jog = 0; jog < 24; jog++) {
        if ((document.all[Jogadas[jog][0]].value == "?") && (document.all[Jogadas[jog][1]].value == "?") && (document.all[Jogadas[jog][2]].value == Simb_PC)) {
            // Se encontrou uma jogada para armar, retorna a referência.
            return Jogadas[jog][0];
        }
    }
    return false;
}

function PC_Jogar() {
    // Esta função faz o computador jogar contra o usuário.
    // Primeiro, verifica se o PC vai jogar com "X" ou com "O"
    if (QUADRO.ESCOLHA.value == " O ") {
        Simb_PC = " X ";
        Simb_USU = " O ";
    } else {
        Simb_PC = " O ";
        Simb_USU = " X ";
    }

    if (QUADRO.NIVEL.value == "F") {
        /*
        Se o usuário está jogando no nível fácil
        o computador simplesmente encontra o próximo quadro disponível
        e joga nele a sua escolha (X ou O), sem avaliar as chances de ganhar.
        */
        Jogou = false; // Atribui que ainda nao efetuou a jogada...
        for (linha = 1; linha < 4; linha++) {
            for (coluna = 1; coluna < 4; coluna++) {
                if (Jogou) {
                    // Se já jogou sai do loop.
                    break;
                } else {
                    // Se não, 
                    BOTAO = "L[" + linha + "]C[" + coluna + "]";
                    // Verifica se o botão já foi usado e joga nele a escolha.
                    if (document.all[BOTAO].value == "?") {
                        document.all[BOTAO].value = Simb_PC;
                        Jogou = true;
                    }
                }
            }
        }
    } else {
        // Se o usuário está jogando no nível difícil...

        // Procura as chances do usuário:
        var ChancesUSU = Ver_Chances("USU");
        // Procura as chances do compuatdor:
        var ChancesPC = Ver_Chances("PC");

        if (ChancesPC) {
            // Se o compuador puder fechar a partida, ele o faz:
            document.all[ChancesPC].value = Simb_PC;
        } else {
            if (ChancesUSU) {
                // Se o usuário puder fechar a partida, o computador impedirá.
                document.all[ChancesUSU].value = Simb_PC;
            } else {
                /* Se não há chances de nenhum dos jogadores fecharem a partida,
                   o computador procura a melhor alternativa para jogar.
                */
                if (BT_Jogados == 0) {
                    // Se niguem jogou e o PC começa...
                    // Joga começando do canto.
                    document.all["L[1]C[1]"].value = Simb_PC;
                } else if (BT_Jogados == 1) {
                    // Se o PC faz o segundo lance do jogo...
                    if ((document.all["L[1]C[1]"].value == Simb_USU) || (document.all["L[1]C[3]"].value == Simb_USU) || (document.all["L[3]C[1]"].value == Simb_USU) || (document.all["L[3]C[3]"].value == Simb_USU)) {
                        /* Se o Usuário começou jogando pelos cantos, 
                            o PC joga no centro.
                        */
                        document.all["L[2]C[2]"].value = Simb_PC;
                    } else {
                        // Se não, o PC joga no canto.
                        document.all["L[1]C[1]"].value = Simb_PC;
                    }
                } else if (BT_Jogados == 2) {
                    // Se o PC faz o terceiro lance do jogo...
                    // vai procurar jogar em outro canto.
                    if (document.all["L[1]C[1]"].value == "?") {
                        // Canto superior esquerdo.
                        document.all["L[1]C[1]"].value = Simb_PC;
                    } else if (document.all["L[1]C[3]"].value == "?") {
                        // Canto superior direito.
                        document.all["L[1]C[3]"].value = Simb_PC;
                    } else if (document.all["L[3]C[1]"].value == "?") {
                        // Canto inferior esquerdo.
                        document.all["L[3]C[1]"].value = Simb_PC;
                    } else if (document.all["L[3]C[3]"].value == "?") {
                        // Canto inferior direito.
                        document.all["L[3]C[3]"].value = Simb_PC;
                    }
                } else if (BT_Jogados == 3) {
                    // Se o computador faz o quarto lance...
                    if (document.all["L[2]C[2]"].value == Simb_PC) {
                        // Se o usuário começou jogando pelos cantos...
                        if ((document.all["L[2]C[1]"].value == "?") && (document.all["L[2]C[3]"].value == "?")) {
                            document.all["L[2]C[1]"].value = Simb_PC;
                        } else if ((document.all["L[1]C[2]"].value == "?") && (document.all["L[3]C[2]"].value == "?")) {
                            document.all["L[3]C[2]"].value = Simb_PC;
                        }
                    } else {
                        if (document.all["L[1]C[1]"].value == "?") {
                            // Canto superior esquerdo.
                            document.all["L[1]C[1]"].value = Simb_PC;
                        } else if (document.all["L[1]C[3]"].value == "?") {
                            // Canto superior direito.
                            document.all["L[1]C[3]"].value = Simb_PC;
                        } else if (document.all["L[3]C[1]"].value == "?") {
                            // Canto inferior esquerdo.
                            document.all["L[3]C[1]"].value = Simb_PC;
                        } else if (document.all["L[3]C[3]"].value == "?") {
                            // Canto inferior direito.
                            document.all["L[3]C[3]"].value = Simb_PC;
                        }
                    }
                } else {
                    /* Para mais de 3 jogadas sem chances de vitórias para nenhum dos
                    jogadores, o PC irá procurar os quadros vazios restantes para jogar.
                    */

                    ProximaJog = Armacoes(); // Busca uma jogada ideal.

                    if (ProximaJog) {
                        // Se há uma jogada ideal, a realiza.
                        document.all[ProximaJog].value = Simb_PC;
                    } else {
                        // Se não há uma jogada ideal, busca um quadro vazio e joga.
                        // Cria o vetor com os endereços dos quadros
                        xQuadros = new Array("L[1]C[1]", "L[1]C[3]", "L[3]C[1]", "L[3]C[3]", "L[1]C[2]", "L[3]C[2]", "L[2]C[1]", "L[2]C[3]");
                        for (R = 1; R < 9; R++) {
                            if (document.all[xQuadros[R]].value == "?") {
                                // Procura um quadro vazio...e joga.
                                document.all[xQuadros[R]].value = Simb_PC;
                                // Para a busca quando encontrar.
                                break;
                            }
                        }
                    }
                }
            }
        }
    }

    // Atualiza a soma dos botões jogados:
    BT_Jogados++;

    // Se jogada não resultar em vitória ou empate...
    if (!VerResultado()) {
        // Passa a vez de jogar para o usuário:
        Vez = "USU";
        QUADRO.MENSG.value = "Aguardando você jogar...";
    }
}

function Usuario_Joga(Linha, Coluna) {
    // Esta função recebe a jogada do usuário e aplica-a ao jogo.
    if (Vez == "USU") {
        // Se for a vez do usuário jogar...
        // Cria o botão,
        BOTAO = "L[" + Linha + "]C[" + Coluna + "]";
        // Verifica se este botão já foi usado no jogo.
        if (document.all[BOTAO].value != "?") {
            alert("Este quadro já foi usado, escolha outro!");
        } else {
            // Aplica a jogada ao botão:
            document.all[BOTAO].value = QUADRO.ESCOLHA.value;
            // Atualiza a soma dos botões já utilizados no jogo:
            BT_Jogados++;

            // Se jogada não resultar em vitoria ou empate...
            if (!VerResultado()) {
                // Passa a vez de jogar para o computador:
                Vez = "PC";
                QUADRO.MENSG.value = "Aguardando o computador jogar...";
                PC_Jogar();
            }
        }
    } else {
        // Se não o avisa:
        alert("Não é a sua vez! Aguarde o computador jogar!");
    }
}

function FocarBotao() {
    // Seleciona o botão "Jogar agora" ao iniciar a página.
    QUADRO.BTJOGAR.focus();
}

function BTJOGAR_Click() {
    /* Esta função verificar qual ação será tomada pelo botão 'Jogar agora':
       iniciar o jogo ou interrompê-lo
    */

    if (Jogando) {
        // Se já está jogando, para o jogo.
        PararJogo();
    } else {
        // Se está parado, inicia o jogo.
        IniciarJogo();
    }
}

function Ativacao_Quadro(Acao) {
    /* Esta função ativa ou desativa quadro habilitando/desabilitando os 9 botões de seleção X ou O.
        Acao = true  => habilita o quadro.
        Acao = false => desabilita o quadro.
    */
    for (linha = 1; linha < 4; linha++) {
        // Conta de 1 a 3 (linhas do quadro)
        for (coluna = 1; coluna < 4; coluna++) {
            // Conta de 1 a 3 (colunas do quadro)
            BOTAO = "L[" + linha + "]C[" + coluna + "]"; // Cria o nome do respectivo botão com a linha e coluna.
            // Faz a modificação da propriedade do botão:
            document.all[BOTAO].disabled = (!Acao);
            if (!Acao)	// Se for desativar, limpa os jogos efetuados no quadro.
                document.all[BOTAO].value = "?";
        }
    }

    // Ao desativar/ativar o quadro, a soma dos botões jogados é zerada:
    BT_Jogados = 0;
}

function Zera_Placar() {
    // Esta função zera o placar do jogo.
    QUADRO.PONTOS_PC.value = "0";
    QUADRO.PONTOS_USU.value = "0";
}

function IniciarJogo() {
    /* Esta função dá inicio ao jogo,
       desabilitando a escolha da letra e alterando o botão 'Jogar agora' para
       'Parar jogo'
    */

    if (QUADRO.ESCOLHA.value == "") {
        alert("Selecione sua opção (X ou O)!");
        QUADRO.ESCOLHA.focus();
    } else {
        Jogando = true; // Agora há um jogo em andamento.
        QUADRO.ESCOLHA.disabled = true; // Não deixa escolher X ou O enquanto estiver jogando.
        QUADRO.NIVEL.disabled = true; // Não deixa alterar o nível (difícil/fácil) enquanto joga.
        QUADRO.BTJOGAR.value = "Parar jogo"; // Altera o botão 'Jogar agora' para 'Parar jogo'
        QUADRO.BTJOGAR.style.color = "#DD0000";		// Muda a cor do texto do botão 'Jogar agora' para vermelho.
        Ativacao_Quadro(true); // Habilita o quadro para jogar.

        /* Se for o PC que começa a jogar, chama a função PC_Jogar();
           se for o usuário que começa a jogar, aguarda o seu lance.
        */
        if (QUADRO.Q_COMECA.value == "PC") {
            QUADRO.MENSG.value = "Aguardando o computador jogar...";
            Vez = "PC";
            PC_Jogar();
        } else {
            QUADRO.MENSG.value = "Aguardando você jogar...";
            Vez = "USU";
        }
    }
}

function PararJogo() {
    /* Esta função interrompe um jogo em andamento sem somar ponto
       para as equipes e desfaz as alterações do quadro.
       O jogo será interrompido somente se o usuário confirmar a solicitação.
    */
    if (confirm("Deseja mesmo parar o jogo agora?")) {  // Solicita confirmação para interromper o jogo.
        // Se a confirmação foi aceita...
        Jogando = false; // Agora o jogo foi interrompido.
        QUADRO.ESCOLHA.disabled = false; // Libera a escolha de X ou O.
        QUADRO.NIVEL.disabled = false; // Libera a escolha do nível do jogo.
        QUADRO.BTJOGAR.value = "Jogar agora"; // Altera o botão 'Parar jogo' para 'Jogar agora'.
        QUADRO.BTJOGAR.style.color = "#0000DD";	// Muda a cor do texto do botão 'Jogar agora' para azul.
        QUADRO.MENSG.value = Msg_Padrao; // Altera texto da barra de mensagens.
        Ativacao_Quadro(false)	// Desabilita o quadro de botões impedindo o jogo.
    }
}
