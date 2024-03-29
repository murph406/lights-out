import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import GamePage, { BOARD_SIZE } from './game';

test('increments number of moves', () => {
    render(
        <BrowserRouter>
            <GamePage />
        </BrowserRouter>

    );

    const counter = screen.getByTestId("counter");
    const cellButton = screen.getByTestId("cell-0-0");

    fireEvent.click(cellButton);
    expect(counter).toHaveTextContent('1')
});


test('renders cells to board', () => {
    render(
        <BrowserRouter>
            <GamePage />
        </BrowserRouter>
    );

    const board = screen.getByTestId("game-board-test-id");
    const rows = board.querySelectorAll('button')
    const rowLength = rows.length

    expect(rowLength).toBe(BOARD_SIZE * BOARD_SIZE)
});

test('On initial render, cells are on or off', () => {
    render(
        <BrowserRouter>
            <GamePage />
        </BrowserRouter>
    );

    const board = screen.getByTestId("game-board-test-id");
    const rows = board.querySelectorAll('div')
    const regex = /^[0-1]{1}$/

    rows.forEach((r) => {
        const row = r.querySelectorAll('button')
        row.forEach((c) => {
            expect(c).toHaveTextContent(regex);
        })
    })
});

test('After move and new board is rendered with cells that are on or off', () => {
    render(
        <BrowserRouter>
            <GamePage />
        </BrowserRouter>
    );
    
    const cellButton = screen.getByTestId("cell-0-0");
    fireEvent.click(cellButton);
    

    const board = screen.getByTestId("game-board-test-id");
    const rows = board.querySelectorAll('button')
    const regex = /^[0-1]{1}$/

    rows.forEach((r) => {
        const row = r.querySelectorAll('button')
        row.forEach((c) => {
            expect(c).toHaveTextContent(regex);
        })
    })
});

