import * as ActionTypes from "./actionTypes";
import { DISHES } from "../shared/dishes";
import { baseUrl } from "../shared/baseUrlComponent";

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment

    }
})

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

   return fetch(baseUrl + "dishes")
   .then(res => {
       if(res.ok) {
           return res
       } else {
           var error = new Error("Err " + res.status + ": " + res.statusText);
           error.res = res;
           throw error;
       }
   }, error => {
       var errmess = new Error(error.message)
       throw errmess 
   })
        .then((res) => res.json())
        .then((dishes) => dispatch(addDishes(dishes))) 
        .catch(error => dispatch(dishesFailed(error.message)))
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
})

export const dishesFailed = (errMess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMess
})

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})

// ADD COMMENT
export const fetchComments = () => (dispatch) => {
   return fetch(baseUrl + "comments")
        .then(res => {
            if(res.ok) {
                return res
            } else {
                var error = new Error("Err " + res.status + ": " + res.statusText);
                error.res = res;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message)
            throw errmess 
        })
        .then((res) => res.json())
        .then((comments) => dispatch(addComment(comments)))
        .catch(error => dispatch(commentFailed(error.message)));
}

export const commentFailed = (errMess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
})

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})

// PROMO
export const fetchPromo = () => (dispatch) => {
    dispatch(promosLoading(true));

   return fetch(baseUrl + "promotions")
        .then(res => {
            if(res.ok) {
                return res
            } else {
                var error = new Error("Err " + res.status + ": " + res.statusText);
                error.res = res;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message)
            throw errmess 
        })
        .then((res) => res.json())
        .then((promos) => dispatch(addPromos(promos)))
        .catch(error => dispatch(promoFailed(error.message))) 
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
})

export const promoFailed = (errMess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errMess
})

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
})
