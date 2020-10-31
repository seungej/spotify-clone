export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: '1ba9826e09d345e297a1aeecb2ee89cf',
};

const reducer=(state, action) => {
    console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        default:
            return state;
    }
}

export default reducer;