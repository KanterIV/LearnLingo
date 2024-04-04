import { configureStore } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from "redux-persist";
// import storage from "redux-persist/lib/storage";

import { modalsReducer } from "./modals/modalsSlice";

// const favoriteConfig = {
//   key: "favorite",
//   storage,
//   whitelist: ["favoriteArr"],
// };

export const store = configureStore({
  reducer: {
    modals: modalsReducer,
    // favorite: persistReducer(favoriteConfig, favoriteReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// export const persistor = persistStore(store);
