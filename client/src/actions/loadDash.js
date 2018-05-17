// Action

export const loadDash = () => {
    return dispatch => {
        fetch()
        .then(results => results.json())
        // .then(json => json)
        .then(data => dispatch(loadOpps(data)))
    }
}

export const loadOpps = (opps) => {
    return {
        type: "ALL_OPPS",
        opps
    }
}