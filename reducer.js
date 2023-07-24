const counterReducer = (state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 2;
    }
}
export default counterReducer;