import CartActionTypes from "./action-types";

const initalState = {
   products: [],
   productsTotalPrice: 0
}

const cartReducer = (state = initalState, action) => {
   switch (action.type) {
      case CartActionTypes.ADD_PRODUCT:
         //verificar se o produto já está no carrinho
         const productAlreadyInCart = state.products.some(
            (product) => product.id === action.payload.id
         );
         //se ele tiver, aumentar sua quantidade em 1
         if (productAlreadyInCart) {
            return {
               ...state,
               products: state.products.map(product =>
                  product.id === action.payload.id
                     ? { ...product, quantity: product.quantity + 1 }
                     : product
               ),
            };
         }
         //se não estiver no carrinho
         return {
            ...state,
            products: [...state.products, { ...action.payload, quantity: 1 }],
         };

      case CartActionTypes.REMOVE_PRODUCT:
         return {
            ...state,
            products: state.products.filter(
               (product) => product.id !== action.payload
            ),
         };

      case CartActionTypes.INCREASE_PRODUCT_QUANTITY:
         return {
            ...state,
            products: state.products.map((product) =>
               product.id === action.payload
                  ? { ...product, quantity: product.quantity + 1 }
                  : product
            ),
         };
      case CartActionTypes.DECREASE_PRODUCT_QUANTITY:
         return {
            ...state,
            products: state.products.map((product) => 
            product.id === action.payload
            ? { ...product, quantity: product.quantity - 1}
            : product 
            ).filter(product => product.quantity > 0),
         };
         
      default:
         return state;
   }

}

export default cartReducer;