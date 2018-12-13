import {messageConstant} from '../constants/messageTeacherConstant.js';
import { OrderedMap } from 'immutable';

const initalState = {
    message: '',
    listMessagesTeacher: new OrderedMap(),
    connection: null,
    listUsers: new OrderedMap(),
    idChannelActive: '',
    listUsersOnline: [],
}

export default function messageTeacherReducer(state=initalState, actions){
    switch(actions.type){
        case messageConstant.SET_NEW_MESSAGE_TEACHER:
            return{
                ...state,
                message: actions.payload.message
            };
        case messageConstant.SET_LIST_MESSAGES_TEACHER:
            if(actions.payload.listMessagesTeacher === null){
                return {
                    ...state,
                    listMessagesTeacher: state.listMessagesTeacher.clear()
                }
            }
            return {
                ...state,
                listMessagesTeacher: state.listMessagesTeacher.set(actions.payload.idChannel, actions.payload.listMessagesTeacher)
            }
        case messageConstant.SET_CONNECTION:
            return{
                ...state,
                connection: actions.payload.connection
            }
        case messageConstant.SET_LIST_USERS:
            return{
                ...state,
                listUsers: actions.payload.listUsers
            }
        case messageConstant.SET_CHANNEL_ACTIVE:
            return{
                ...state,
                idChannelActive: actions.payload.idChannelActive
            }
        case messageConstant.ADD_NEW_MESSAGE_TEACHER:
            return{
                ...state,
                listMessagesTeacher: state.listMessagesTeacher.set(actions.payload.idChannel, actions.payload.listMessagesTeacher)
            }
        case messageConstant.SET_LIST_USERS_ONLINE:
            state.listUsersOnline = [];
            return{
                ...state,
                listUsersOnline: state.listUsersOnline.concat(actions.payload.listUsersOnline)
            }
        case messageConstant.ADD_USER_ONLINE:
            return{
                ...state,
                listUsersOnline: state.listUsersOnline.concat(actions.payload.newUserOnline)
            }
        case messageConstant.ADD_USER_CHAT:
            return{
                ...state,
                listUsers: state.listUsers.set(actions.payload.id, actions.payload.user)
            }
        default:
            return state;
    }   
}
