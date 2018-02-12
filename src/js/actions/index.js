import * as types from './types';

export const toggleEventList = (selectedDay) => {
    return {
        type: types.TOGGLE_EVENT_LIST,
        selectedDay
    }
};

export const setDay = (selectedDay) => {
    return {
        type: types.SET_DAY,
        selectedDay
    }
};

export const nextMonth = (month) => {
    return {
        type: types.NEXT_MONTH,
        month
    }
};

export const previousMonth = (month) => {
    return {
        type: types.PREVIOUS_MONTH,
        month
    }
};

export const togglePanel = (selectedDay, close, eventIndex) => {
    return {
        type: types.TOGGLE_PANEL,
        selectedDay,
        close,
        eventIndex
    }
};

export const updateEventName = (name, eventIndex) => {
    return {
        type: types.UPDATE_EVENT_NAME,
        name,
        eventIndex
    }
};

export const updateEventType = (eventType, eventIndex) => {
    return {
        type: types.UPDATE_EVENT_TYPE,
        eventType,
        eventIndex
    }
};

export const removeEvent = (eventIndex) => {
    return {
        type: types.REMOVE_EVENT,
        eventIndex
    }
};