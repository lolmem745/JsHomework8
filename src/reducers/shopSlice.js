import {createSlice} from "@reduxjs/toolkit";
import {catalogLoader} from "./loaders/catalogLoader";
import {offerLoader} from "./loaders/offerLoader";
import productsLoader from "./loaders/productsLoader";
import advantagesLoader from "./loaders/advantagesLoader";
import filterLoader from "./loaders/filterLoader";

const shopSlice = createSlice({
    name: "shop",
    initialState: {
        cart: [],
        catalog: [],
        offers: [],
        products: [],
        advantages: [],
        filter: {},
        loadingStatus: {
            catalog: false,
            offers: false,
            products: false,
            advantages: false,
            filter: false,
        },
        loadingError: {
            catalog: false,
            offers: false,
            products: false,
            advantages: false,
            filter: false,
        },
    },
    reducers: {
        addToCart: (state, action) => {
            if (state.cart.filter(product => product.id === action.payload.id).length > 0) {
                state.cart.filter(product => product.id === action.payload.id)[0].count += 1;
            } else {
                state.cart.push({...action.payload, count: 1});
            }
        },
        changeCount: (state, action) => {
            state.cart.filter(product => product.id === action.payload.id)[0].count = action.payload.count;
        },
        deleteFromCart: (state, action) => {
            state.cart.splice(state.cart.indexOf(state.cart.filter(product => product.id === action.payload.id)[0]), 1)
        }
    },
    extraReducers: (builder) => {
        //Фоновая загрузка отображаемых на сайте данных
        builder
            //Загрузка элементов каталога
            .addCase(catalogLoader.pending, (state) => {
                state.loadingStatus.catalog = true;
            })
            .addCase(catalogLoader.fulfilled, (state, {payload}) => {
                state.catalog = payload;
                state.loadingStatus.catalog = false;
            })
            .addCase(catalogLoader.rejected, (state, {payload}) => {
                state.loadingStatus.catalog = false;
                state.loadingError.catalog = true;
            })
            //Загрузка предложений
            .addCase(offerLoader.pending, (state) => {
                state.loadingStatus.offers = true;
            })
            .addCase(offerLoader.fulfilled, (state, {payload}) => {
                state.offers = payload;
                state.loadingStatus.offers = false;
            })
            .addCase(offerLoader.rejected, (state, {payload}) => {
                state.loadingStatus.offers = false;
                state.loadingError.offers = true;
            })
            //Загрузка продуктов
            .addCase(productsLoader.pending, (state) => {
                state.loadingStatus.products = true;
            })
            .addCase(productsLoader.fulfilled, (state, {payload}) => {
                state.products = payload;
                state.loadingStatus.products = false;
            })
            .addCase(productsLoader.rejected, (state, {payload}) => {
                state.loadingStatus.products = false;
                state.loadingError.products = true;
            })
            //Загрузка саморекламы
            .addCase(advantagesLoader.pending, (state) => {
                state.loadingStatus.advantages = true;
            })
            .addCase(advantagesLoader.fulfilled, (state, {payload}) => {
                state.advantages = payload;
                state.loadingStatus.advantages = false;
            })
            .addCase(advantagesLoader.rejected, (state, {payload}) => {
                state.loadingStatus.advantages = false;
                state.loadingError.advantages = true;
            })
            //Загрузка фильтров товаров
            .addCase(filterLoader.pending, (state) => {
                state.loadingStatus.filter = true;
            })
            .addCase(filterLoader.fulfilled, (state, {payload}) => {
                state.filter = payload;
                state.loadingStatus.filter = false;
            })
            .addCase(filterLoader.rejected, (state, {payload}) => {
                state.loadingStatus.filter = false;
                state.loadingError.filter = true;
            })
    }
});

export const {addToCart, changeCount, deleteFromCart} = shopSlice.actions;
export default shopSlice.reducer;