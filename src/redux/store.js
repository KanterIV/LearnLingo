import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { modalsReducer } from "./modals/modalsSlice";
import { userReducer } from "./user/userSlice";

const userConfig = {
  key: "user",
  storage,
  whitelist: ["favorite"],
};

export const store = configureStore({
  reducer: {
    modals: modalsReducer,
    user: persistReducer(userConfig, userReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
