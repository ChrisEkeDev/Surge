// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import sessionReducer from './session';
// import thunk from 'redux-thunk';
import { applyMiddleware, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import { apiSlice } from './features/api';

let enhancer = applyMiddleware

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    }).concat(apiSlice.middleware)
})

// const rootReducer = combineReducers({
//   session: sessionReducer
// });

// let enhancer;

// if (process.env.NODE_ENV === 'production') {
//   enhancer = applyMiddleware(thunk);
// } else {
//   const logger = require('redux-logger').default;
//   const composeEnhancers =
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//   enhancer = composeEnhancers(applyMiddleware(thunk, logger));
// }

// const configureStore = (preloadedState) => {
//     return createStore(rootReducer, preloadedState, enhancer);
//   };

// export default configureStore;

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
