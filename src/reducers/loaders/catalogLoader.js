import {createAsyncThunk} from "@reduxjs/toolkit";
import {catalogData} from "../../data/catalogData";

export const catalogLoader = createAsyncThunk(
    'shop/catalog/catalogLoader', async () => {
        //Имитация запроса данных
        return await new Promise(
            resolve => setTimeout(() => resolve(catalogData.categories), 1000)
        ).then(catalog => catalog);
    }
);