import { configureStore } from "@reduxjs/toolkit";

import permisosReducer from './reducers/permisosReducer.js'

export const store = configureStore({
    reducer: {

        permisos:permisosReducer
      },
})