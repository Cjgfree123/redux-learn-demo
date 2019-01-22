import {INCREMENT} from '../type';

function reducer2(state={
    num:0
},action){
    switch (action.type) {
        case INCREMENT:
           return {...state,num:++state.num};
        default:
            return state;
    }
}
export default reducer2;