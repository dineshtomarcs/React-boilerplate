import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { callApiForHomeData } from "../action/home";

type HomeDataState = {
    homeData: any;
    loading: boolean;
    error: string | null;
};

const initialState: HomeDataState = {
    homeData: [],
    loading: false,
    error: null,
};

export const fetchHomeData = createAsyncThunk(
    "fetchHomeData",
    (categoryData: string) => callApiForHomeData(categoryData)
);

const HomeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        setHomeData: (state, action) => {
            state.homeData = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHomeData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchHomeData.fulfilled, (state, action) => {
                state.loading = false;
                state.homeData = action.payload;
            })
            .addCase(fetchHomeData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Something went wrong";
            });
    },
});

export const { setHomeData } = HomeSlice.actions;
export default HomeSlice.reducer;
