import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/cartActions";
import { cartItems } from "../initialValues/cartItems";

const initialState = {
  cartItems: cartItems,
};

export default function cartReducer(state = initialState, { type, payload }) {
  switch (type) {

    case ADD_TO_CART:
      let product = state.cartItems.find((c) => c.product.id === payload.id);

      if (product) {
        product.quantity++;  // bunu yapınca bir bir artar quantity. ama referanslar değişmez. yani sepeti güncellemez. bu yüzden refransı güncellemek gerek. o yüzden spread operatörü gerekli
        return {

          ...state,

          // yeni bir cart objesini döndürmüş oluyoruz. newliyorsun bir nevi.

        };
      } else {
        return {  // sepette eleman yoksa, yepyeni bir obje oluştur. o zaman mevcut cartItems a yeni bir eleman ekleyip, yeni array yapacam.

          ...state, // cartItems'ı ayırdım. sonra yeni bir array oluşturdum

          cartItems: [...state.cartItems, { quantity: 1, product: payload }], // sadece bir elamanı değiştirmek istediğim için bu hareketi yapıyorum
          // [state'deki cartItems'ı spread et dedim]
          // payload'lada yenisi ekledim.

        };

      }

    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((c) => c.product.id !== payload.id),

      };

    default:
      return state;
  }
}

// gönderilecek olan type a göre state'i değiştirmek gerekiyor. redux bunu bir şekilde kendi mimarisinde implement ediyor

// mutebility : sepet elemanlarının değiştiğini redux, (bu hooklarda da geçerli) eğer referansı değiştiyse,
// ben sepete yeni eleman eklendi yada silindi olarak anlarım diyor. sepetin değiştiğini anlarım diyor. o yüzden
// sen benim abonelerimi bilgilendirmen için, ilgi state'in referansını değiştir diyor.

// bu yüzden benim referansı değiştirmem gerek. o yüzden if blogu kullanılmıştır!!!