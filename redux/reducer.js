import { createReducer } from "@reduxjs/toolkit";

export const userReducer = createReducer({},(builder)=>{
    builder
      .addCase("registerRequest", (state) => {
        state.loading = true;
      })
      .addCase("registerSuccess", (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
      })
      .addCase("registerFailure", (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload.message;
      })
      .addCase("loginRequest", (state) => {
        state.loading = true;
      })
      .addCase("loginSuccess", (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.message = action.payload.message;
      })
      .addCase("loginFailure", (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
      .addCase("clearError", (state) => {
        state.error = null;
      })
      .addCase("clearMessage", (state) => {
        state.message = null;
      })
      .addCase("loadUserRequest", (state) => {
        state.loading = true;
      })
      .addCase("loadUserSuccess", (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase("loadUserFailure", (state, action) => {
        state.loading = false;
        state.isAuthenticated = false;
        state.error = action.payload;
      })
        .addCase("logoutSuccess",(state,action)=>{
        state.loading=false;
        state.message=action.payload
        state.isAuthenticated=false;
        state.user=null;
    })
});

export const messageReducer = createReducer({},(builder)=>{
  builder
    .addCase("addTaskRequest",(state)=>{
         state.loading=true;
    })
    .addCase("addTaskSuccess",(state,action)=>{
        state.loading=false;
        state.message=action.payload;

    })
    .addCase("addTaskFailure",(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    })
    .addCase("updateTaskRequest",(state)=>{
         state.loading=true;
    })
    .addCase("updateTaskSuccess",(state,action)=>{
        state.loading=false;
        state.message=action.payload;

    })
    .addCase("updateTaskFailure",(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    })
    .addCase("deleteTaskRequest",(state)=>{
         state.loading=true;
    })
    .addCase("deleteTaskSuccess",(state,action)=>{
        state.loading=false;
        state.message=action.payload;

    })
    .addCase("deleteTaskFailure",(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    })
    .addCase("updateProfileRequest",(state)=>{
         state.loading=true;
    })
    .addCase("updateProfileSuccess",(state,action)=>{
        state.loading=false;
        state.user = action.payload.user;  // to get new update profile 
        state.message=action.payload;

    })
    .addCase("updateProfileFailure",(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    })
    .addCase("updatePasswordRequest",(state)=>{
         state.loading=true;
    })
    .addCase("updatePasswordSuccess",(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    })
    .addCase("updatePasswordFailure",(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    })
    .addCase("forgetPasswordRequest",(state)=>{
         state.loading=true;
    })
    .addCase("forgetPasswordSuccess",(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    })
    .addCase("forgetPasswordFailure",(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    })
    .addCase("resetPasswordRequest",(state)=>{
         state.loading=true;
    })
    .addCase("resetPasswordSuccess",(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    })
    .addCase("resetPasswordFailure",(state,action)=>{
        state.loading=false;
        state.message=action.payload;
    })
    .addCase("logoutRequest",(state)=>{
         state.loading=true;
    })
    .addCase("logoutFailure",(state,action)=>{
        state.loading=false;
        state.isAuthenticated = true;
        state.error=action.payload
    })
   
    .addCase("clearError", (state) => {
      state.error = null;
    })
    .addCase("clearMessage", (state) => {
      state.message = null;
    });
});