import {createSelector} from 'reselect'

// Memoizing selector for User data

export const selectUser = (state)=> state.auth?.user

export const selectProfilePic = createSelector(
    [selectUser],
    (user) => user?.profilePic
)
export const selectUserName = createSelector(
    [selectUser],
    (user)=> user?.userName
)

export const selectEmail = createSelector(
    [selectUser],
    (user)=> user?.userName
)


export const selectPassword = createSelector(
    [selectUser],
    (user)=> user?.userName
)