import {legacy_createStore,applyMiddleware,compose,combineReducers} from "redux"
import thunk from "redux-thunk"
import { reducer as Appreducer } from "./appredux/Reducer"
import { reducer as Authreducer } from "./authredux/Reducer"
const rootReducer=combineReducers({Appreducer,Authreducer})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
export { store };