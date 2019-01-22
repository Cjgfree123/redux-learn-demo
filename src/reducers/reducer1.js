import {ADD} from '../type';

// 如果使用connect,connect里state必须返回对象。  所以,state一般为对象
function reducer1(state = 2, action) {
    switch (action.type) {
        case ADD:
            ++state;
            return state;
        default:
            return state;
    }
}
export default reducer1;