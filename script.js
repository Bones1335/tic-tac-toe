// gameBoard Module
const gameBoard = (() => {
    let _board = ['O', 'X', 'X',
                 'X', 'X', 'O',
                 'O', 'O', 'X'];
    const getBoard = () => _board;
    const clearBoard = _board => {
        _board = ['', '', '',
                  '', '', '',
                  '', '', ''];
    };
    return {
        getBoard,
        clearBoard
    };
})();

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