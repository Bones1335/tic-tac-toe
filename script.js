// Player Factory Function
const Player = (name, icon) => {
    const getName = () => name;
    const getIcon = () => icon;

    return {getName, getIcon}
};

// gameBoard Module
const gameBoard = (() => {
    let _board = ['O', 'X', 'X',
                 'X', 'X', 'O',
                 'O', 'O', 'X'];
    const getBoard = () => _board;
    
    const createBoard = () => {
       const storedBoard = getBoard();
            storedBoard.forEach((item, index) => {
                const squareSelect = document.querySelector(`[data-index='${index}']`);
                    squareSelect.textContent = item; 
            });
    };

    const clearBoard = () => {
        _board = ['', '', '',
                  '', '', '',
                  '', '', ''];
    };
    return {
        getBoard,
        createBoard,
        clearBoard
    };
})();

// Game Flow Module
const gameFlow = (() => {
    const gameStart = document.querySelector('#start-button');
        gameStart.addEventListener('click', () => gameBoard.createBoard());
    const gameRestart = document.querySelector('#restart-button');
        gameRestart.addEventListener('click', () => {
            gameBoard.clearBoard();
            gameBoard.createBoard();
        });
    
    const player1Icon = 'X';
    const player1Name = document.querySelector('#player1-name');
    const player1Input = document.querySelector('#player1');
    const player1 = document.querySelector('#player1-button');
        player1.addEventListener('click', () => {
            const p1 = Player(player1Input.value, player1Icon);
            player1Name.textContent = p1.getName()
        });
    
    const player2Icon = 'O';
    const player2Name = document.querySelector('#player2-name');
    const player2Input = document.querySelector('#player2');
    const player2 = document.querySelector('#player2-button');
        player2.addEventListener('click', () => {
            const p2 = Player(player2Input.value, player2Icon);
            player2Name.textContent = p2.getName();
        });


    return {
        player1,
        player2
    };
})();