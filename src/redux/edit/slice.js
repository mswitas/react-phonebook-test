import { createSlice } from "@reduxjs/toolkit";

const initialState = {open: false, contact: null}

const editSlice = createSlice({
    name: "edit",
    initialState,
    reducers: {
        setEdit(state, action) {
            return action.payload;
        },
    },
});

export const { setEdit } = editSlice.actions;
export const editReducer = editSlice.reducer;