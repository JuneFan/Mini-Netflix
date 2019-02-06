import {combineReducers} from 'redux';
import {GET_INITIAL_STATE, REMOVE_FROM_MYLIST, ADD_FROM_RECOMMENDLIST} from '../Actiontypes';

const mylist = (state=[],action)=>{
    switch(action.type){
        case GET_INITIAL_STATE:
            return action.data.mylist
        case REMOVE_FROM_MYLIST: 
            return action.data.mylist
        case ADD_FROM_RECOMMENDLIST:
            return action.data.mylist
        default:
            return state;
    }
}

const recommendations = (state=[],action)=>{
    switch(action.type){
        case GET_INITIAL_STATE:
            return action.data.recommendations
        case REMOVE_FROM_MYLIST: 
            return action.data.recommendations
        case ADD_FROM_RECOMMENDLIST:
            return action.data.recommendations
        default:
            return state;
    }
}

export default combineReducers({
    mylist,
    recommendations
})