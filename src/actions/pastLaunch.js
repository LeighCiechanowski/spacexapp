export function getLaunch(flight) {
    return (dispatch) => {
		dispatch(launchIsLoading(true));
        fetch('http://localhost:5000/v2/launches?flight_number=' + flight)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(launchIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((launch) => {
                dispatch(launchFetchDataSuccess(launch[0]));
            })
            .catch(() => {
                dispatch(launchIsLoading(false));
                dispatch(launchHasErrored(true));
            });
    };
}

export function launchHasErrored(bool) {
    return {
        type: 'LAUNCH_HAS_ERRORED',
        hasErrored: bool
    };
}
export function launchIsLoading(bool) {
    return {
        type: 'LAUNCH_IS_LOADING',
        isLoading: bool
    };
}
export function launchFetchDataSuccess(launch) {
    return {
        type: 'LAUNCH_FETCH_DATA_SUCCESS',
        launch
    };
}