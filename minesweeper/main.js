import { difficulties } from "./configurations.js";

let board = $(".board");

$(document).ready(() => {
    let easy = difficulties.easy;

    createBoard(easy.rows, easy.columns, easy.mines);
})

function createBoard(rows, columns, mines){
    for(let i = 0; i < rows; i++){
        $("<div></div>", {class:"row"}).appendTo(board);
        for(let j = 0; j < columns; j++){
            $("<div></div>", {
                class:"space",
                text:"*"
            }).appendTo($(".row")[i]);
        }
    }
}