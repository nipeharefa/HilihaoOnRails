import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth';

const authPersistConfig = {
  key: '_bnkp_hilihao',
  storage,
};

const reducers = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});

export default reducers;
