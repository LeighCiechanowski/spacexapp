export function getRocket(rocketId) {
    return (dispatch) => {
		dispatch(rocketIsLoading(true));
        fetch('http://localhost:5000/v2/rockets/' + rocketId)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(rocketIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((rocket) => {
                dispatch(rocketFetchDataSuccess(rocket));
            })
            .catch(() => dispatch(rocketHasErrored(true)));
    };
  }

  export function rocketHasErrored(bool) {
    return {
        type: 'ROCKET_HAS_ERRORED',
        hasErrored: bool
    };
}
export function rocketIsLoading(bool) {
    return {
        type: 'ROCKET_IS_LOADING',
        isLoading: bool
    };
}
export function rocketFetchDataSuccess(rocket) {
    return {
        type: 'ROCKET_FETCH_DATA_SUCCESS',
        rocket
    };
}