import {messageConstant} from '../constants/messageConstant.js';

const actionSetMessage = (payload) => ({
    type: messageConstant.SET_NEW_MESSAGE,
    payload:{
        message: payload.message
    }
})

const actionSetListMessages = (payload) => ({
    type: messageConstant.SET_LIST_MESSAGES,
    payload: {
        listMessages: payload.listMessages
    }
})

const actionMinitureChatBox = (payload) => ({
    type: messageConstant.MINIATURE_CHAT_BOX,
    payload: {
        isOpen: payload.isOpen
    }
})
export const messageAction = {
    actionSetMessage,
    actionSetListMessages,
    actionMinitureChatBox
}
