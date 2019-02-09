## redux

* createStore(reducer)

* combineReducers({})

* bindActionCreators(actionCreators,dispatch) // 返回一个对象。可通过this.props直接获取actionsCreators中每个函数。actionCreators:派发action的函数

例如:

```
function add(){
    return {
        type:"ADD",// 保证唯一性
        payload:{}
    }
}
```

## react-redux

* Provider作为顶层组件，传入store

* 哪个组件需要状态管理器(store)中的数据，就用connect高阶组件传入

```
connect()(APP)

let mapStateProp = (state,ownProps)=>{ 
    state状态管理器中的所有数据，也可以返回一个当前组件需要的数据
    return state;  //必须返回对象(否则报错)
}

let mapDispatchProp = (dispatch,ownProps) => {
    return bindActionCreators(actionCreators,dispatch)
}

ownProps:只要接收到的新的父级传进来的数据，就会在运行一次此函数，从而connect更新页面状态，视图更新

connect(mapStateProp,mapDispatchProp)(App)
```

## redux 使用

### 1.打开redux-devtools 

参考简书: https://www.jianshu.com/p/266159a1c795

步骤:

(1) 在index.js里, import {createStore, applyMiddleware} from 'redux'

(2) 安装谷歌插件

(3) 项目里安装: npm install  redux-devtools-extension --save-dev

(4) 在index.js里
```
// 引入redux-devtools-extension的可视化工具。
import { composeWithDevTools } from 'redux-devtools-extension'

export default  createStore(
    storeReducer,
    composeWithDevTools(
    )
)
```

## 遇到问题

1.react-scripts: command not found

解决:重新装包; 或 将项目所有文件复制到一个空的文件夹里后npm i

