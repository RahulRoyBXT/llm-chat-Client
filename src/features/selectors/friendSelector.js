import { createSelector } from "reselect";

export const selectFriends = ((state) => state?.friends);

export const selectAllfriends = createSelector(
    [selectFriends],
    (friends) => {
        return friends?.friends}
)
