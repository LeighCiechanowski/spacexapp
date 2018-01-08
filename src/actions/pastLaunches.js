export function getLaunches() {
    return (dispatch) => {
		dispatch(launchesIsLoading(true));
        fetch('http://localhost:5000/v2/launches')
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(launchesIsLoading(false));
                return response;
            })
            .then((response) => response.json())
            .then((launches) => {
                dispatch(launchesFetchDataSuccess(launches));
            })
            .catch(() => dispatch(launchesHasErrored(true)));
    };
  }

  export function launchesHasErrored(bool) {
    return {
        type: 'LAUNCHES_HAS_ERRORED',
        hasErrored: bool
    };
}
export function launchesIsLoading(bool) {
    return {
        type: 'LAUNCHES_IS_LOADING',
        isLoading: bool
    };
}
export function launchesFetchDataSuccess(launches) {
    return {
        type: 'LAUNCHES_FETCH_DATA_SUCCESS',
        launches,
        filteredLaunches: launches
    };
}
export function filterLaunches(launches, filter) {
    filter = filter.toString().toLowerCase();
    return (dispatch) => {
        dispatch(
            filteredLaunchesSuccess(
                launches.filter(function (el) {
                    return el.flight_number.toString().toLowerCase().indexOf(filter) !== -1
                    || el.launch_date_utc.toLowerCase().indexOf(filter) !== -1
                    || el.rocket.rocket_name.toLowerCase().indexOf(filter) !== -1
                    || el.launch_site.site_name_long.toLowerCase().indexOf(filter) !== -1;
                })
            ));
    }
}

export function filteredLaunchesSuccess(filteredLaunches) {
    return {
        type: 'FILTERED_LAUNCHES_SUCCESS',
        filteredLaunches
    };
}