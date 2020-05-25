
  // código temporário que vai ser alocado no modelo do projeto
    //definição da matriz

    let ma = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
    let jogadaX = true
    let jogadaO = false

    // carregando o DOM para os componentes HTML
    var m00 = document.getElementsByClassName('m00')[0];
    var m01 = document.getElementsByClassName('m01')[0];
    var m02 = document.getElementsByClassName('m02')[0];

    var m10 = document.getElementsByClassName('m10')[0];
    var m11 = document.getElementsByClassName('m11')[0];
    var m12 = document.getElementsByClassName('m12')[0];

    var m20 = document.getElementsByClassName('m20')[0];
    var m21 = document.getElementsByClassName('m21')[0];
    var m22 = document.getElementsByClassName('m22')[0];

    // marcar campos dos botões
    
    // primeiros 3 botões
    function matriz00() {
        if (jogadaX == true) {
            ma[0][0] = 'X'
            m00.innerHTML = `X`
            jogadaO = true
            jogadaX = false
        } else {
            ma[0][0] = 'O'
            m00.innerHTML = `O`
            jogadaX = true
            jogadaO = false
        }
    }

    function matriz01() {
        if (jogadaX == true) {
            ma[0][1] = 'X'
            m01.innerHTML = `X`
            jogadaO = true
            jogadaX = false
        } else {
            ma[0][1] = 'O'
            m01.innerHTML = `O`
            jogadaX = true
            jogadaO = false
        }
    }

    function matriz02() {
        if (jogadaX == true) {
            ma[0][2] = 'X'
            m02.innerHTML = `X`
            jogadaO = true
            jogadaX = false
        } else {
            ma[0][2] = 'O'
            m02.innerHTML = `O`
            jogadaX = true
            jogadaO = false
        }
    }

  // segundo 3 botões
     function matriz10() {
        if (jogadaX == true) {
            ma[1][0] = 'X'
            m10.innerHTML = `X`
            jogadaO = true
            jogadaX = false
        } else {
            ma[1][0] = 'O'
            m10.innerHTML = `O`
            jogadaX = true
            jogadaO = false
        }
    }

    function matriz11() {
        if (jogadaX == true) {
            ma[1][1] = 'X'
            m11.innerHTML = `X`
            jogadaO = true
            jogadaX = false
        } else {
            ma[1][1] = 'O'
            m11.innerHTML = `O`
            jogadaX = true
            jogadaO = false
        }
    }

    function matriz12() {
        if (jogadaX == true) {
            ma[1][2] = 'X'
            m12.innerHTML = `X`
            jogadaO = true
            jogadaX = false
        } else {
            ma[1][2] = 'O'
            m12.innerHTML = `O`
            jogadaX = true
            jogadaO = false
        }
    }

     // terceiro 3 botões

     function matriz20() {
        if (jogadaX == true) {
            ma[2][0] = 'X'
            m20.innerHTML = `X`
            jogadaO = true
            jogadaX = false
        } else {
            ma[2][0] = 'O'
            m20.innerHTML = `O`
            jogadaX = true
            jogadaO = false
        }
    }

    function matriz21() {
        if (jogadaX == true) {
            ma[2][1] = 'X'
            m21.innerHTML = `X`
            jogadaO = true
            jogadaX = false
        } else {
            ma[2][1] = 'O'
            m21.innerHTML = `O`
            jogadaX = true
            jogadaO = false
        }
    }

    function matriz22() {
        if (jogadaX == true) {
            ma[2][2] = 'X'
            m22.innerHTML = `X`
            jogadaO = true
            jogadaX = false
        } else {
            ma[2][2] = 'O'
            m22.innerHTML = `O`
            jogadaX = true
            jogadaO = false
        }
    }

    function goal() {

        // verifica a primeira linha
        if (ma[0][0] == 'X' && ma[0][1] == 'X' && ma[0][2] == 'X') {
            return 'X'
        } else {
            if (ma[0][0] == 'O' && ma[0][1] == 'O' && ma[0][2] == 'O')
                return 'O'
        }

        // verifica a segunda linha
        if (ma[1][0] == 'X' && ma[1][1] == 'X' && ma[1][2] == 'X') {
            return 'X'
        } else {
            if (ma[1][0] == 'O' && ma[1][1] == 'O' && ma[1][2] == 'O')
                return 'O'
        }

        // verifica a terceira linha 
        if (ma[2][0] == 'X' && ma[2][1] == 'X' && ma[2][2] == 'X') {
            return 'X'
        } else {
            if (ma[2][0] == 'O' && ma[2][1] == 'O' && ma[2][2] == 'O')
                return 'O'
        }

        // verifica a primeira coluna
        if (ma[0][0] == 'X' && ma[1][0] == 'X' && ma[2][0] == 'X') {
            return 'X'
        } else {
            if (ma[0][0] == 'O' && ma[1][0] == 'O' && ma[2][0] == 'O')
                return 'O'
        }

        // verifica a segunda coluna
        if (ma[0][1] == 'X' && ma[1][1] == 'X' && ma[2][1] == 'X') {
            return 'X'
        } else {
            if (ma[0][1] == 'O' && ma[1][1] == 'O' && ma[2][1] == 'O')
                return 'O'
        }

        // verifica a terceira coluna
        if (ma[0][2] == 'X' && ma[1][2] == 'X' && ma[2][2] == 'X') {
            return 'X'
        } else {
            if (ma[0][2] == 'O' && ma[1][2] == 'O' && ma[2][2] == 'O')
                return 'O'
        }

        // verifica a diagonal principal
        if (ma[0][0] == 'X' && ma[1][1] == 'X' && ma[2][2] == 'X') {
            return 'X'
        } else {
            if (ma[0][0] == 'O' && ma[1][1] == 'O' && ma[2][2] == 'O')
                return 'O'
        }

        // verifica a diagonal secundária
        if (ma[0][2] == 'X' && ma[1][1] == 'X' && ma[2][0] == 'X') {
            return 'X'
        } else {
            if (ma[0][2] == 'O' && ma[1][1] == 'O' && ma[2][0] == 'O')
                return 'O'
        }
    }

    function zerarTabuleiro() {
        // preenche a matriz com valores 0
        for (i = 0; i < 3; i++)
            for (j = 0; j < 3; j++)
                ma[i][j] = 0
    }