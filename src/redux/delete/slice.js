import { createSlice } from "@reduxjs/toolkit";

const initialState = { open: false, contactId: null };

const deleteSlice = createSlice({
    name: "delete",
    initialState,
    reducers: {
        setDelete(state, action) {
            return action.payload;
        },
    },
});

export const { setDelete } = deleteSlice.actions;
export const deleteReducer = deleteSlice.reducer;