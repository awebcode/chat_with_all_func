import axios from 'axios';
import { FRIENDS_GET_SUCCESS,MESSAGE_GET_SUCCESS,MESSAGE_SEND_SUCCESS } from "../types/messengerType";
export const getFriends = ()=>async(dispatch)=>{
    
    try {
        const response = await axios.get(
          "http://localhost:5000/api/messenger/get-friends",
          {
            headers: {
              "Content-Type": "application/json",
              // Add any additional headers you need here
            },
            withCredentials: true, // Include this line to send cookies with the request
          }
        );
        dispatch({
            type : FRIENDS_GET_SUCCESS,
            payload : {
                friends : response.data.friends
            }
        })
    } catch (error) {
        console.log(error.response.data);
    }
}

export const messageSend = (data) => async(dispatch)=>{

    try {
        const response = await axios.post(
          "http://localhost:5000/api/messenger/send-message",
          data,
          {
            headers: {
              "Content-Type": "application/json",
              // Add any additional headers you need here
            },
            withCredentials: true, // Include this line to send cookies with the request
          }
        );
        dispatch({
            type : MESSAGE_SEND_SUCCESS,
            payload : {
                message : response.data.message
            }
        })
    } catch (error) {
        console.log(error.response.data);
    }
}

export const getMessage = (id) =>{
    return async(dispatch)=>{
        
        try {
            const response = await axios.get(
              `http://localhost:5000/api/messenger/get-message/${id}`,{
      headers: {
        'Content-Type': 'application/json',
        // Add any additional headers you need here
      },
      withCredentials: true, // Include this line to send cookies with the request
    }
            );
            dispatch({
                type :MESSAGE_GET_SUCCESS,
                payload : {
                    message : response.data.message
                }
            })
        } catch (error) {
            console.log(error.response.data);
        }
    }
}

export const ImageMessageSend = (data) => async (dispatch) => {

    try {
        const response = await axios.post(
          "http://localhost:5000/api/messenger/image-message-send",
          data,
          {
            headers: {
              "Content-Type": "application/json",
              // Add any additional headers you need here
            },
            withCredentials: true, // Include this line to send cookies with the request
          }
        );
        dispatch({
            type : MESSAGE_SEND_SUCCESS,
            payload : {
                message : response.data.message
            }
        })
    } catch (error) {
        console.log(error.response.data)
    }
    
}

export const seenMessage = (msg)=>async(dispatch)=>{
    try {
        const response = await axios.post(
          "http://localhost:5000/api/messenger/seen-message",
          msg,
          {
            headers: {
              "Content-Type": "application/json",
              // Add any additional headers you need here
            },
            withCredentials: true, // Include this line to send cookies with the request
          }
        );
    } catch (error) {
        console.log(error.response.message)
    }
}
export const updateMessage = (msg)=>async(dispatch)=>{
    try {
        const response = await axios.post(
          "http://localhost:5000/api/messenger/delivared-message",
          msg,
          {
            headers: {
              "Content-Type": "application/json",
              // Add any additional headers you need here
            },
            withCredentials: true, // Include this line to send cookies with the request
          }
        );
    } catch (error) {
        console.log(error.response.message)
    }
    console.log(msg);
}

export const getTheme =() =>async(dispatch)=>{
    
    const theme = localStorage.getItem('theme');
    dispatch({
        type : "THEME_GET_SUCCESS",
        payload :{
            theme : theme?theme:'white'
        }
    })
}



export const themeSet =(theme) =>async(dispatch)=>{
    
    localStorage.setItem('theme',theme);
    dispatch({
        type : "THEME_SET_SUCCESS",
        payload :{
            theme : theme
        }
    })
}
