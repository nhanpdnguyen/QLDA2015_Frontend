import {messageConstant} from '../constants/messageConstant.js';
import config from '../config';
import { requestApi, requestFail } from './requestActions';
import { GET } from "../constants";

const CHAT_API_BASE_URL = config.CHAT_API_BASE_URL;

const actionSetMessage = (payload) => ({
    type: messageConstant.SET_NEW_MESSAGE,
    payload:{
        message: payload.message
    }
})


const actionMiniatureChatBox = (payload) => ({
    type: messageConstant.MINITURE_CHAT_BOX,
    payload:{
        isOpen: payload.isOpen
    }
})

const actionSetConnection = (payload) => ({
    type: messageConstant.SET_CONNECTION,
    payload:{
        connection: payload.connection
    }
})

const actionSetIdGVTV = (payload) => ({
    type: messageConstant.SET_ID_GVTV,
    payload: {
        idGVTV: payload.idGVTV
    }
})

const actionSetListMessages = (payload) => ({
    type: messageConstant.SET_LIST_MESSAGES,
    payload: {
        listMessages: payload.listMessages
    }
})

const actionGetAllMessageOfChannel = (payload) => {
    const idChannel = payload.idChannel;
    return (dispatch) => {
        dispatch(requestApi(GET, CHAT_API_BASE_URL + '/all_message/' + idChannel)).then(result => { 
            var payload = {
                listMessages: result.data.listMessages
            }
            dispatch(actionSetListMessages(payload));
        }).catch((err) => {
            dispatch(requestFail(err))
        })
    }
}

const actionsAddNewMessage = (payload) => ({
    type:messageConstant.ADD_NEW_MESSAGE,
    payload: {
        newMessage: payload.newMessage
    }
})

export const messageActions = {
    actionSetMessage,
    actionSetListMessages,
    actionMiniatureChatBox,
    actionSetConnection,
    actionSetIdGVTV,
    actionGetAllMessageOfChannel,
    actionsAddNewMessage
}
