import { configureStore } from "@reduxjs/toolkit";
import {
  createApi, //? CREATES OUR API.
  fetchBaseQuery, //? PROVIDES BASE URL , SET DEFAULT HEADERS ETC.
  setupListeners, //? MAKE REQUEST ON LIFECYCLE componentWillMount AND componentWillReconnect
} from "@reduxjs/toolkit/query/react";

const customApi = createApi({
  reducerPath: "customAPISlice", //? KEY FOR REDUCER SLICE
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.nasa.gov/planetary/apod",
    prepareHeaders: (headers) => {
      //headers generation code
      headers.set("application-type", "text/json");
      //headers.set("Enquirey-id", enquirey - id);
      return headers;
    }, //? DEFAULT HEADERS CAN BE SET HERE.
  }), //? BUILDS BASE URL FOR REQUEST
  endpoints: (builder) => ({
    getNasaImage: builder.query({
      query: (api_key) => `?api_key=${api_key}`,
      //method : "get by default",
      //body : requestPayload,
    }), //? API ENDPOINTS
  }), //? TO DEFINE API END POINTS
});

export const { useGetNasaImageQuery } = customApi; //? CUSTOM-HOOKS MADE AVAILABLE

export const store = configureStore({
  reducer: {
    //? ASSIGN TOP-LEVEL SLICE TO STORE.
    [customApi.reducerPath]: customApi.reducer, //* ENDPOINTS DATA WILL BE SAVED AS SLICES.
    // MORE SLICES CAN BE ASSIGNED HERE .
  },
  //? ENABLES CACHING FUNCTIONALITY
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(customApi.middleware),
});

setupListeners(store.dispatch); //? TO MAKE REQUEST ON COMPONENT-WILL-MOUNT AND COMPONENT-WILL-RECONNECT

//* RTK QUERY-IMPORTANT POINT
//? RTK QUERY FETCH DATA ON DEMAND.
//? DATA IS ALREADY IN CACHE ? RETRIVE WITHOUT API CALL : MAKE API CALL.
