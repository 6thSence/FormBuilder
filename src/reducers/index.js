import { combineReducers } from 'redux';

import formInfo from './formInfo';
import description from './description';
import formStatus from './formStatus';

export default combineReducers({
    formInfo,
    description,
    formStatus,
});
