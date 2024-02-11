import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name: 'notification',
    initialState: { notification: '' },
    reducers: {
        showNotification: (state, action) => {
            state.notification = {
                message: action.payload.message,
                type: action.payload.type,
                open: action.payload.open,
            };
        },
    },
});




export default notificationSlice.reducer
export const { showNotification } = notificationSlice.actions