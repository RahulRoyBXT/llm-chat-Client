import {createSelector} from 'reselect'

export const messageState = (state)=> state?.messages

export const selectMessage = createSelector(
    [messageState],
    (state) => {
        return state.temMessages}
)
export const selectMessageError = createSelector(
    [messageState],
    (state) => state.error
)
export const selectMessageLoading = createSelector(
    [messageState],
    (state) => state.loading
)