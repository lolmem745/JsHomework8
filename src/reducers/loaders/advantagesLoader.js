import {createAsyncThunk} from "@reduxjs/toolkit";
import {advantagesData} from "../../data/advantagesData";

const advantagesLoader = createAsyncThunk(
    'shop/advantages/advantagesLoader', async () => {
        //Имитация запроса данных
        return await new Promise(
            resolve => setTimeout(() => resolve(advantagesData), 1000)
        ).then(advantages => advantages);
    }
);

export default advantagesLoader;