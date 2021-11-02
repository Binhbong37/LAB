import { combineReducers, createStore } from "redux";
import { Dishes, DISHES } from "./dishes";
import { Comments, COMMENTS } from "./comments";
import { Leaders, LEADERS } from "./leaders";
import { Promotions, PROMOTIONS } from "./promotions";

export const configureStore = () => {
    const store = createStore(
       combineReducers({
           dishes: Dishes,
           comments: Comments,
           leaders: Leaders,
           promotions: Promotions 
       })
    );
    return store;
}