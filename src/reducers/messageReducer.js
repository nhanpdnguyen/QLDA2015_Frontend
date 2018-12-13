import {messageConstant} from '../constants/messageConstant.js';

const initalState = {
    message: '',
    newMessage: '',
    listMessages: null,
    isOpen: false,
    connection: null,
    idGVTV: '',
}

export default function messageReducer(state=initalState, actions){
    switch(actions.type){
        case messageConstant.SET_NEW_MESSAGE:
            return{
                ...state,
                message: actions.payload.message
            };
        case messageConstant.SET_LIST_MESSAGES:
            state.listMessages = []
            if(actions.payload.listMessages === null){
                return{
                    ...state,
                    listMessages: null
                }
            }
            return {
                ...state,
                listMessages: state.listMessages.concat(actions.payload.listMessages)
            }
        case messageConstant.MINITURE_CHAT_BOX:
            return{
                ...state,
                isOpen: actions.payload.isOpen
            }
        case messageConstant.SET_CONNECTION:
            return{
                ...state,
                connection: actions.payload.connection
            }
        case messageConstant.SET_ID_GVTV:
            return{
                ...state,
                idGVTV: actions.payload.idGVTV
            }
        case messageConstant.ADD_NEW_MESSAGE:
            return{
                ...state,
                listMessages: state.listMessages.concat(actions.payload.newMessage)
            }
        default:
            return state;
    }   
}
