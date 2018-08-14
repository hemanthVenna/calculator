const rootReducers = (state = 0, action) => {
    console.log(action.type)
    console.log("haii acition")
    switch (action.type) {
        case 'ONE':
            if (state == '0') {
                return action.payload;
            }
            return state + action.payload;
        case 'TWO':
            if (state == '0') {
                return action.payload;
            }
            return state + action.payload;
        case 'THREE':
            if (state == '0') {
                return action.payload;
            }
            return state + action.payload;
        case 'FOUR':
            if (state == '0') {
                return action.payload;
            }
            return state + action.payload;
        case 'FIVE':
            if (state == '0') {
                return action.payload;
            }
            return state + action.payload;
        case 'SIX':
            if (state == '0') {
                return action.payload;
            }
            return state + action.payload;
        case 'SEVEN':
            if (state == '0') {
                return action.payload;
            }
            return state + action.payload;
        case 'EIGHT':
            if (state == '0') {
                return action.payload;
            }
            return state + action.payload;
        case 'NINE':
            if (state == '0') {
                return action.payload;
            }
            return state + action.payload;
        case 'ZERO':
            if (state == '0') {
                return action.payload;
            }
            return state + action.payload;
        case 'ADD':
            if (state == '0') {
                return action.payload;
            }
            return state + action.payload;
        case 'SUBTRACT':
            if (state == '0') {
                return action.payload;
            }
            return state + action.payload;
        case "MULTI":
            if (state == '0') {
                return action.payload;
            }
            return state + action.payload;
        case "DIVISON":
            if (state == '0') {
                return action.payload;
            }
            return state + action.payload;
        case "CLEAR":
            return "0";
        case "EQUAL":
            return eval(state)
        default:
            return state
    }
}

export default rootReducers;