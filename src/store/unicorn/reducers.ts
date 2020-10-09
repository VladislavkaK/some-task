import { createReducer } from '@reduxjs/toolkit';
import {
  GET_DATA_UNICORNS_REQUESTED,
  GET_DATA_UNICORNS_SUCCEEDED,
  GET_DATA_UNICORNS_FAILED,
  EDIT_DATA_UNICORNS_REQUESTED,
  EDIT_DATA_UNICORNS_FAILED,
  EDIT_DATA_UNICORNS_SUCCEEDED
} from './constants';

interface UnicornValuesProps {
  isLoadingUnicornsData: boolean;
  isEditUnicornsData: boolean;
  data: {
    _id: string;
    name: string;
    age: number;
    colour: string;
  }[];
} 

interface UnicornFailed {
  error: any;
}

const initialUnicornValues: UnicornValuesProps = {
  isLoadingUnicornsData: false,
  isEditUnicornsData: false,
  data: [],
}

export const unicornReducer = createReducer(initialUnicornValues, {
  [GET_DATA_UNICORNS_REQUESTED]: (state: UnicornValuesProps) => {
    return { ...state, isLoadingUnicornsData: true };
  },
  [GET_DATA_UNICORNS_SUCCEEDED]: (state: UnicornValuesProps, action: any) => {
    const { data } = action.response;

    return { 
      ...state, 
      data,  
      isLoadingUnicornsData: false 
    };
  },
  [GET_DATA_UNICORNS_FAILED]: (state: UnicornValuesProps, action: UnicornFailed) => {
    return { ...state, error: action.error, isLoadingUnicornsData: false };
  },
  [EDIT_DATA_UNICORNS_REQUESTED]: (state: UnicornValuesProps) => {
    return { ...state, isEditUnicornsData: true };
  },
  [EDIT_DATA_UNICORNS_SUCCEEDED]: (state: UnicornValuesProps, action: any) => {
    const { response: { status }, payload } = action;

    const updateData = state.data.map(el => {
      if (el._id === payload.id && status === 200) {
        return {
          ...el,
          ...{ _id: payload.id, name: payload.name, age: payload.age, colour: payload.color }
        }
      }

      return { ...el };
    });

    return { 
      ...state,
    //   data: updateData,
      isEditUnicornsData: false 
    };
  },
  [EDIT_DATA_UNICORNS_FAILED]: (state: UnicornValuesProps, action: UnicornFailed) => {
    return { ...state, error: action.error, isEditUnicornsData: false };
  },
});