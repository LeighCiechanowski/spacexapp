import { combineReducers } from 'redux'

export const launchesHasErrored = (state = false, action) => {
  switch (action.type) {
      case 'LAUNCHES_HAS_ERRORED':
          return action.hasErrored;
      default:
          return state;
  }
}
export const launchesIsLoading = (state = false, action) => {
  switch (action.type) {
      case 'LAUNCHES_IS_LOADING':
          return action.isLoading;
      default:
          return state;
  }
}
export const launches = (state = [], action) => {
  switch (action.type) {
      case 'LAUNCHES_FETCH_DATA_SUCCESS':
          return action.launches;
      default:
          return state;
  }
}

export const latestLaunchesHasErrored = (state = false, action) => {
    switch (action.type) {
        case 'LATEST_LAUNCHES_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
  }
  export const latestLaunchesIsLoading = (state = false, action) => {
    switch (action.type) {
        case 'LATEST_LAUNCHES_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
  }
  export const latestLaunches = (state = [], action) => {
    switch (action.type) {
        case 'LATEST_LAUNCHES_FETCH_DATA_SUCCESS':
            return action.latestLaunches;
        default:
            return state;
    }
  }

  export const rocketsHasErrored = (state = false, action) => {
    switch (action.type) {
        case 'ROCKETS_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
  }
  export const rocketsIsLoading = (state = false, action) => {
    switch (action.type) {
        case 'ROCKETS_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
  }
  export const rockets = (state = [], action) => {
    switch (action.type) {
        case 'ROCKETS_FETCH_DATA_SUCCESS':
            return action.rockets;
        default:
            return state;
    }
  }

  export const rocketHasErrored = (state = false, action) => {
    switch (action.type) {
        case 'ROCKET_HAS_ERRORED':
            return action.hasErrored;
        default:
            return state;
    }
  }
  export const rocketIsLoading = (state = false, action) => {
    switch (action.type) {
        case 'ROCKET_IS_LOADING':
            return action.isLoading;
        default:
            return state;
    }
  }
  export const rocket = (state = [], action) => {
    switch (action.type) {
        case 'ROCKET_FETCH_DATA_SUCCESS':
            return action.rocket;
        default:
            return state;
    }
  }

const reducer = combineReducers({
    launchesHasErrored,
    launchesIsLoading,
    launches,
    latestLaunchesHasErrored,
    latestLaunchesIsLoading,
    latestLaunches,
    rocketsHasErrored,
    rocketsIsLoading,
    rockets,
    rocketHasErrored,
    rocketIsLoading,
    rocket
  })
  
  export default reducer