const cart =  [];
export const handleCart = (state=cart , action) => {
    const product = action.payload;
    const exist = state.find((x) => x.id === product.id);
    switch (action.type) {
        case "ADDITEM":
            if (exist) {
                //
                return state.map((x) =>
                    x.id === product.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                const product = action.payload;
                return [...state, { ...product, qty: 1 }];
            }
            
        case "REMOVEITEM":
            
            if (exist.qty === 1) {
                return state.filter((x) => x.id !== product.id);
            }
            return state.map((x) =>
                x.id === product.id ? { ...x, qty: x.qty - 1 } : x
            );
        case "CLEARCART":
            return [];
            
            
        default:
            return state;

}
}

