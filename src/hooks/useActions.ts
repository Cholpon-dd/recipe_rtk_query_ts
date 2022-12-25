import {useDispatch} from "react-redux";
import {bindActionCreators} from "@reduxjs/toolkit";
import {favouritesActions} from "../store/favouriteSlice";

const actions = {
    ...favouritesActions
}

export const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators(actions, dispatch)
}