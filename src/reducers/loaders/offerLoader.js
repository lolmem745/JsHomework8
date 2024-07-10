import {createAsyncThunk} from "@reduxjs/toolkit";
import {offerData} from "../../data/offerData";

export const offerLoader = createAsyncThunk(
    'shop/offer/offerLoader', async () => {
        //Имитация запроса данных
        return await new Promise(
            resolve => setTimeout(() => resolve(offerData.offers), 1000)
        ).then(offers => offers);
    }
);