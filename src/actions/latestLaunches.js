export function getLatestLaunches() {
    return (dispatch) => {
		dispatch(latestLaunchesIsLoading(true));
        fetch('http://localhost:5000/v2/launches/upcoming')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(latestLaunchesIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((latestLaunches) => {
                dispatch(latestLaunchesFetchDataSuccess(latestLaunches));
            })
            .catch(() => dispatch(latestLaunchesHasErrored(true)));
    };
  }

  export function latestLaunchesHasErrored(bool) {
    return {
        type: 'LATEST_LAUNCHES_HAS_ERRORED',
        hasErrored: bool
    };
}
export function latestLaunchesIsLoading(bool) {
    return {
        type: 'LATEST_LAUNCHES_IS_LOADING',
        isLoading: bool
    };
}
export function latestLaunchesFetchDataSuccess(latestLaunches) {
    return {
        type: 'LATEST_LAUNCHES_FETCH_DATA_SUCCESS',
        latestLaunches
    };
}