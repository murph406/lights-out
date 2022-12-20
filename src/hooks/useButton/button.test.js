import { renderHook, act } from '@testing-library/react';

import { useButton } from './index';

test('use button', () => {
    const { result } = renderHook(() => useButton())

    expect(result.current.models.clickCount).toBe(0)
    expect(typeof result.current.operations.increment).toBe('function')
})

test('button should increment', () => {
    const { result } = renderHook(() => useButton())

    act(() => result.current.operations.increment())
    expect(result.current.models.clickCount).toBe(1)
})