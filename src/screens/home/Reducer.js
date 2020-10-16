export const Type = {INIT_DATA:0,}

export function Reducer(state,action) {
    switch (action.type){
        case Type.INIT_DATA:
            let {section1, productList} = action.data;
            return {section1: section1,productList}
            default:
                return state;
    }
}