
import {combineReducers} from 'redux';
import { reducer as formReducer } from 'redux-form';

/*adding redux-form reducer*/
const appReducers = combineReducers({
  form: formReducer
});

/*root reducer*/
const rootReducer=(state,action)=>{
  return appReducers(state,action);
}
export {rootReducer};
