import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: auth,
  initialState: {
    isSignedIn: false,
  },
  reducers: {
    signin: (state, action) => {
      const { email, password } = action.payload;
      if (email == "admin@test.com" && password === "admin123") {
        state.isSignedIn = true;
      } else {
        alert("Invalid user");
      }
    },
    signout: (state) => {
      state.isSignedIn = false;
    },
  },
});

export const { signin, signout } = authSlice.actions;
export default authSlice.reducer;
