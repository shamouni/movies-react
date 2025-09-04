import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

import postMiddleware from "./middlewares/post-middleware";
import postReducer from "./reducers/blog-reducer";

const store = createStore(postReducer, applyMiddleware(thunk, postMiddleware));

export default store;
