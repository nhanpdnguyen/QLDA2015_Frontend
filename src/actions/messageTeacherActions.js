import {messageConstant} from '../constants/messageTeacherConstant.js';
import config from '../config';
import { requestApi } from './requestActions';
import { GET } from "../constants";
import { OrderedMap } from 'immutable';


const ACCOUNT_API_BASE_URL = config.ACCOUNT_API_BASE_URL;
const CHAT_API_BASE_URL = config.CHAT_API_BASE_URL;


const actionSetMessageTeacher = (payload) => ({
    type: messageConstant.SET_NEW_MESSAGE_TEACHER,
    payload:{
        message: payload.message
    }
})

const actionSetConnection = (payload) => ({
    type: messageConstant.SET_CONNECTION,
    payload:{
        connection: payload.connection
    }
})

const actionSetListUsers = (payload) => ({
    type: messageConstant.SET_LIST_USERS,
    payload:{
        listUsers: payload.listUsers
    }
})

const actionGetAllUsers = () => {
    return (dispatch) => {
        var listUsers = new OrderedMap();

        dispatch(requestApi(GET, ACCOUNT_API_BASE_URL + '/profiles')).then(result => {   
            const profiles = result.data.profiles;
            profiles.forEach(element => {
                const user = {
                    id: element._id,
                    userName: element.userName,
                    isOnline: false
                }
                listUsers = listUsers.set(element._id, user);
            });

            var payload = {
                listUsers: listUsers
            }
            dispatch(actionSetListUsers(payload))
        }).catch((err) => {
            var payload = {
                listUsers: listUsers
            }
            dispatch(actionSetListUsers(payload))
        })
    }   
}

const actionSetChannelActive = (payload) => ({
    type: messageConstant.SET_CHANNEL_ACTIVE,
    payload:{
        idChannelActive: payload.idChannelActive
    }
})

const actionSetListMessagesTeacher = (payload) => ({
    type: messageConstant.SET_LIST_MESSAGES_TEACHER,
    payload: {
        idChannel: payload.idChannel,
        listMessagesTeacher: payload.listMessagesTeacher
    }
})


const actionGetAllMessageOfChannelTeacher = (payload) => {
    const idChannel = payload.idChannel;
    return (dispatch) => {
        dispatch(requestApi(GET, CHAT_API_BASE_URL + '/all_message/' + idChannel)).then(result => { 
            var payload = {
                idChannel: idChannel,
                listMessagesTeacher: result.data.listMessages
            }

            dispatch(actionSetListMessagesTeacher(payload));
        }).catch((err) => {
            console.log(err);
        })
    }
}

const actionAddNewMessageTeacher = (payload) => ({
    type: messageConstant.ADD_NEW_MESSAGE_TEACHER,
    payload: {
        idChannel:payload.idChannel,
        listMessagesTeacher: payload.listMessagesTeacher
    }
})

const actionSetListUsersOnline = (payload) => ({
    type: messageConstant.SET_LIST_USERS_ONLINE,
    payload:{
        listUsersOnline: payload.listUsersOnline
    }
})

const actionAddUserOnline = (payload) => ({
    type: messageConstant.ADD_USER_ONLINE,
    payload: {
        newUserOnline: payload.newUserOnline
    }
})

const actionAddUserChat = (payload) => ({
    type: messageConstant.ADD_USER_CHAT,
    payload: {
        id: payload.id,
        user:{
            id: payload.id,
            userName: payload.userName,
            isOnline: payload.isOnline,
        }
    }
})

export const messageTeacherActions = {
    actionSetMessageTeacher,
    actionSetListMessagesTeacher,
    actionSetConnection,
    actionGetAllUsers,
    actionSetListUsers,
    actionSetChannelActive,
    actionGetAllMessageOfChannelTeacher,
    actionAddNewMessageTeacher,
    actionSetListUsersOnline,
    actionAddUserOnline,
    actionAddUserChat
}
