import {combineReducers} from 'redux';

import Calendar from './calendar.reducer';
import Day from './day.reducer';

const rootReducer = combineReducers({
    Calendar,
    Day
});

export default rootReducer;