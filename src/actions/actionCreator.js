import { ADD, DECREMENT, GET_USER_INFO } from '../type';
import axios from 'axios';

export function add() {
    return {
        type: ADD
    }
}

// (一)使用中间件,再发起action之前做一层拦截
export function decrement() {
    return (dispatch, getState) => {
        let min = getState().r2.num;
        if (min <= -5) {
            return false;
        }
        dispatch({
            type: DECREMENT,
        });
    };
}

// (二) 中间件异步 写法1
// export function getUserInfo() {
//     return (dispatch) => {
//         // 1.获取用户数据
//         axios.get('https://www.easy-mock.com/mock/5afe2aadf2c87c0a2bc41ed1/example/getUserInfo')
//             .then(res => {
//                 if (res.data.errcode === 0) {
//                     let userData = res.data.data;
//                     console.log("请求到的用户数据", userData)
//                     // 2.同步到store
//                     dispatch({
//                         type: GET_USER_INFO,
//                         payload: userData,
//                     });
//                 }
//                 return false;
//             })
//             .catch(err => console.log(err));
//     };
// }

// （二）中间件异步  写法二 (原理:闭包  参考 https://www.jianshu.com/p/337bfc98f87c)
export const getUserInfo = () => (getState,dispatch) => {
    // const state = getState().r2.name;

    axios.get('https://www.easy-mock.com/mock/5afe2aadf2c87c0a2bc41ed1/example/getUserInfo')
        .then(res => {
            if (res.data.errcode === 0) {
                let userData = res.data.data;
                dispatch({
                    type: GET_USER_INFO,
                    payload: userData,
                });
            };
            return false;
        })
        .catch(err => console.log(err));

};