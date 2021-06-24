// tüm statelerin toplandığı alanımız

import { combineReducers} from "redux";
import cartReducer from "./reducers/cartReducers";


const rootReducer = combineReducers({
    cart : cartReducer,

})
export default rootReducer;

// bundan sonra yapılacaklar: 

// 1) actionlar yazmak.
// 2) initial value varsa onu yazmak
// 3) reducer'ı yazmak
// buraya eklemek
