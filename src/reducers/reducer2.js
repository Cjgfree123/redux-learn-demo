import { DECREMENT, GET_USER_INFO } from '../type';

function reducer2(state = {
    num: 0,
    name: '',
    age: ''
}, action) {
    switch (action.type) {
        case DECREMENT:
            return { ...state, num: --state.num };
        case GET_USER_INFO:
            return { 
                ...state, 
                name: action.payload.name, 
                age:action.payload.age,
            }
        default:
            return state;
    }
}
export default reducer2;
