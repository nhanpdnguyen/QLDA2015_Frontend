import { messageConstant } from '../constants/messageConstant.js';

const actionSetMessage = (payload) => ({
    type: messageConstant.SET_NEW_MESSAGE,
    payload: {
        message: payload.message
    }
})

const actionSetListMessages = (payload) => ({
    type: messageConstant.SET_LIST_MESSAGES,
    payload: {
        listMessages: payload.listMessages
    }
})

export const messageAction = {
    actionSetMessage,
    actionSetListMessages
}
