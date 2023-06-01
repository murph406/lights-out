import { renderHook, act } from '@testing-library/react';
import { useBoard } from './index';

describe('Init game', () => {
    const { result } = renderHook(() => useBoard())

    act(() => result.current.operations.initGame())

    test('Number of moves has value of 0', () => {
        expect(result.current.models.numOfMoves).toBe(0)
    })

    test.each(result.current.models.cells)('Cell value between 0 and 1', (result) => {
        expect(result).toBeGreaterThanOrEqual(0)
        expect(result).toBeLessThanOrEqual(1)
    })
})

describe('Click Cell', () => {
    const { result } = renderHook(() => useBoard())

    act(() => result.current.operations.onClickCell())

    test('increment number of moves', () => {
        expect(result.current.models.numOfMoves).toBe(1)
    })
})

// Create function that gets adjacent cell positions 
// Create function getCell returns [x, y, currentValue]
// Create function updateCell returns [x, y, updatedValue]