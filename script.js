// Player Factory Function
const Player = (name) => {
    const getName = () => name;
    const iconSelection = icon => {
        let player1 = '';
        let player2 = '';        
        if (icon === 'X') {
            player1 = 'X';
            player2 = 'O';
        } else if (icon === 'O') {
            player1 = 'O';
            player2 = 'X';
        }
    };
    
    return {getName, iconSelection}
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
    const player1 = 'George';
    const player2 = 'Jack';


    return {
        player1,
        player2
    };
})();