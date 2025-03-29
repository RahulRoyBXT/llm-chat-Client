import { createSelector } from 'reselect';

// Memoized selector for User data
export const selectUser = (state) => state.auth?.user || {}; // Ensure it never returns `undefined`

export const selectProfilePic = createSelector(
    [selectUser],
    (user) => {
        console.log('rerendered')
        return user?.photo || '';
    }
);

export const selectUserId = createSelector(
    [selectUser],
    (user) => user?.id // Provide a fallback name
);

export const selectUserName = createSelector(
    [selectUser],
    (user) => user?.name // Provide a fallback name
);

export const selectEmail = createSelector(
    [selectUser],
    (user) => user?.email || '' // Provide an empty string as default
);
