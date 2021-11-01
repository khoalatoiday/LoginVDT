/*
   
    - TẠO folder component và tách các RC ra 
    - Source Map - 1 feature của Webpack -> giúp debug và viết code tốt hơn, set up tại file webpack.config.js
    - Webpack dev server: npm i webpack-dev-server
    - plugin của babel: transform-class-properties giúp chuyển es5 class properites sang es6 property initialize syntax
    + ngắn gọn hơn, không phải dùng hàm bind() để trói buộc this của hàm vào Class name (xem ví dụ chuyển đổi ở AddOption.js)

    - RC có thể có closed tag: <RC>some JSX code </RC> -> khi đó RC sẽ có props.children = some JSX code
    - React Modal: tạo một RC dựa vào thư viện thứ 3 react-modal, có thể tùy ý hiển/ẩn lên trên tất cả các RC khác 
với các feature trong thư viện ( dùng cho ứng dụng hiện ra content về selectOption mỗi khi click)

 Styling our app: 
 -Ta sẽ sử dụng .scss để styling webpack app. Do browser chỉ hiểu .css nên ta cần 1 tool để convert từ .scss sang .css giống như
 babel đã làm với jsx và ES6. -> cài sass-loader,css-loader, style-loader để convert (cần cài thêm node-sass) (thiết lập tại file webpack.config.js)
 

*/

// ES6 syntax
import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css"; // giúp tất cả browser và OS có chung style của app
import "./style/style.scss";
import AppRouters from "./Routers/AppRouters";
import { Provider } from "react-redux";
import {
  LOGIN,
  REGISTER,
  EDIT_PROFILE,
  UPLOAD_IMAGE,
} from "./actions/profileAction";
import configureStore from "./store/configureStore";

// require("babel-core/register");
// require("babel-polyfill");

const store = configureStore();

store.subscribe(() => {
  console.log(store.getState()); // return current state tree
});

const jsx = (
  <Provider store={store}>
    <AppRouters />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app-id"));
