// tüm statelerin toplandığı alanımız

import { combineReducers} from "redux";
import cartReducer from "./reducers/cartReducer";


const rootReducer = combineReducers({
    cart: cartReducer,
    //user: userReducer

})
export default rootReducer;

// bundan sonra yapılacaklar: 

// 1) actionlar yazmak.
// 2) initial value varsa onu yazmak
// 3) reducer'ı yazmak
// buraya eklemek
