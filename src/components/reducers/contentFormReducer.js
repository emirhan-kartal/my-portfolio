function reducer(state,action) {
    switch (action.type) {
        case "SET_TITLE":
            return {
                ...state,
                title: action.title,
            };
        case "SET_LABEL":
            return {
                ...state,
                label: action.label,
            };
        case "SET_TAGS":
            return {
                ...state,
                tags: action.tags,
            };
        case "SET_IMAGE_LINK":
            return {
                ...state,
                imageLink: action.image_link,
            };
        case "SET_KEYS":
            return {
                ...state,
                keys: action.keys,
            };
        case "SET_CONTENT":
            return {
                ...state,
                content: action.content,
            };
        case "SET_ID":
            return {
                ...state,
                id: action.id,
            };
        default:
            return state;
    }
}   

export default reducer;