import { createSlice } from "@reduxjs/toolkit";

const artists = createSlice({
  name: "artists",
  initialState: {
    artists: [],
  },
  reducers: {
    setLoading: (store, action) => {
      store.loading = action.payload;
    },
    setError: (store, action) => {
      store.error = action.payload;
    },
    showData: (store, action) => {
      store.artists = action.payload;
    },
  },
});

export const generateData = () => {
  return (dispatch, getState) => {
    dispatch(artists.actions.setLoading(true));
    const options = {
      method: "GET",
      headers: {
        "content-type": "aplication/json",
      }
    };

    fetch("https://best-artworks-of-all-time.herokuapp.com/artists", options)
      .then((response) => {
       // console.log(response);
        if (response.ok) {
          dispatch(artists.actions.setError(null));
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((data) => {
        //console.log("data", data);
        dispatch(artists.actions.showData(data));
      })
      .catch((err) => {
       // console.log(err)
        dispatch(artists.actions.setError(err.message))
      })
      .finally(() => {
       // console.log("finally")
        dispatch(artists.actions.setLoading(false))
      });
  };
};

export default artists;
