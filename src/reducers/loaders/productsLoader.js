import {createAsyncThunk} from "@reduxjs/toolkit";
import {productsData} from "../../data/productsData";

const productsLoader = createAsyncThunk(
    'shop/products/productsLoader', async () => {
        //Имитация запроса данных
        return await new Promise(
            resolve => setTimeout(() => resolve(productsData), 1000)
        ).then(products => products);
    }
);

export default productsLoader;