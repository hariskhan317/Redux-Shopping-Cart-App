import { showNotification } from './notificationSlice'


export const fetchData = () => {
    return async (dispatch) => {
        const fetchHandler = async () => {
            const res = await fetch('https://shoppingappredux-default-rtdb.firebaseio.com/cartItems.json');
            const data = await res.json();
            return data;
        };
        try { await fetchHandler(); }catch (error) {
            dispatch(showNotification({
                open: true,
                message: "Sending Request Failed",
                type: 'error',
            }))
        }
    }

}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(showNotification({
            open: true,
            message: "Sending Request",
            type: 'info',
        }));
        const sendRequest = async () => {
            const res = await fetch('https://shoppingappredux-default-rtdb.firebaseio.com/cartItems.json', {
              method: "PUT",
              body: JSON.stringify(cart),
            });
            const data = await res.json();
            dispatch(showNotification({
              open: true,
              message: "Sent Request to Database Success",
              type: 'success',
            }))
        };
        try {
         await sendRequest();
        } catch (error) {
            dispatch(showNotification({
                open: true,
                message: "Sending Request Failed",
                type: 'error',
            }))
        }
    }
}
