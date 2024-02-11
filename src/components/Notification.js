import * as React from 'react';
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from "react-redux";
import { showNotification } from "../store/notificationSlice";

const Notification = ({ type, message }) => {
    const dispatch = useDispatch();
    const notification = useSelector(state => state.noti.notification)
    const handleClose = () => {
        dispatch(showNotification({
            open: false,
        }));
    };
    return (
        <>
            {notification.open && <Alert onClose={handleClose} severity={type}>{message}</Alert>}
        </>
    );
}

export default Notification;