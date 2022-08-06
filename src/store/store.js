import { configureStore } from '@reduxjs/toolkit';
import pageNameReducer from '../features/pages/pageSlice';

export default configureStore({
  reducer: {
   
    pageName: pageNameReducer,
  }
});
