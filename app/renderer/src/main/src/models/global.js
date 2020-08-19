

export default {
    namespace: 'global',

    state: {
        name: 'xikun'
    },

    effects: {


    },

    reducers: {
        save(state, { payload }) {
            return {
                ...state, ...payload
            };
        },
    },

    subscriptions: {

    },
};
