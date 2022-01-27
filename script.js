// Player Factory Function
const Player = (name) => {
    const getName = () => name;
    
    return {getName}
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
        
    const player1 = 'George';
    const player2 = 'Jack';


    return {
        player1,
        player2
    };
})();