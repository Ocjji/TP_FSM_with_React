import { configureStore } from '@reduxjs/toolkit'
import playerReducer from "./modules/playerSlice";
import goodsReducer from "./modules/goodsSlice";
import newsReducer from "./modules/newsSlice";
import gameScheduleReducer from "./modules/gameScheduleSlice";

export const store = configureStore({
    reducer: {
        playerR: playerReducer,
        goodsR: goodsReducer,
        newsR: newsReducer,
        gameScheduleR: gameScheduleReducer,
    }
})