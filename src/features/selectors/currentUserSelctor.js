import { createSelector } from 'reselect';

// Memoized selector for User data
export const selectUser = (state) => state.auth || {};

export const selectCurrentUser = createSelector(
    [selectUser],
    (data) => {
        console.log('rerendered')
        return data.user}
)