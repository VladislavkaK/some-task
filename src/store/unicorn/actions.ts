import { createAction } from '@reduxjs/toolkit';
import { GET_DATA_UNICORNS_REQUESTED, EDIT_DATA_UNICORNS_REQUESTED } from './constants';

export const getUnicornsDataRequested = createAction(GET_DATA_UNICORNS_REQUESTED);

export const editUnicornsDataRequested = createAction(EDIT_DATA_UNICORNS_REQUESTED, (params) => {
  return {
    payload: params
  }
});