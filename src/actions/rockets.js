export function getRockets() {
    return (dispatch) => {
		dispatch(rocketsIsLoading(true));
        fetch('http://localhost:5000/v2/rockets')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(rocketsIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((rockets) => {
                dispatch(rocketsFetchDataSuccess(rockets));
            })
            .catch(() => dispatch(rocketsHasErrored(true)));
    };
  }

  export function rocketsHasErrored(bool) {
    return {
        type: 'ROCKETS_HAS_ERRORED',
        hasErrored: bool
    };
}
export function rocketsIsLoading(bool) {
    return {
        type: 'ROCKETS_IS_LOADING',
        isLoading: bool
    };
}
export function rocketsFetchDataSuccess(rockets) {
    return {
        type: 'ROCKETS_FETCH_DATA_SUCCESS',
        rockets
    };
}