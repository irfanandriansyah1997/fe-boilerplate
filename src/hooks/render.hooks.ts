import { useReducer } from 'react';

/**
 * Force Renderer Hooks
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2021.10.28
 */
export const useForceRerender = () => useReducer((x) => x + 1, 0)[1];
