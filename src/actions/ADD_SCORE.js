const addScore = (question, value) => {
    return {
        type: "ADD_SCORE",
        payload: [question, value]
    }
}

export default addScore;


