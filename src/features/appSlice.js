import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    roomId: null,
  },
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

//take id of the room and push it into the room

export const { enterRoom } = appSlice.actions;

//pushing value into the global store, and we grab that data with selectors
export const selectRoomId = (state) => state.app.roomId;

export default appSlice.reducer;
