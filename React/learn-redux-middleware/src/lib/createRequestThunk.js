import { finishLoading, startLoading } from "../module/loading";

//Thunk의 반복되는 코드를 리팩토링
export default function createRequestThunk(type, request) {
    const SUCCESS = `${type}_SUCCESS`;
    const FAILURE = `${type}_FAILURE`;
    return params => async dispatch => {
        dispatch({type});
        try{
            const response = await request(params);
            dispatch({
                type : SUCCESS,
                payload : response.data
            });
            dispatch(startLoading(type));
        }catch(e){
            dispatch({
                type : FAILURE,
                payload : e,
                error : true
            });
            dispatch(finishLoading(type));
            throw e;
        }
    };
}