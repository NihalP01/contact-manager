import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Contact } from "../components/model/Contact";

interface NewContactState {
  contact: Array<Contact>;
}

const initialState: NewContactState = {
  contact: [],
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact[]>) => {
      state.contact = action.payload;
    },
  },
});

export const { addContact } = contactSlice.actions;

export default contactSlice.reducer;
