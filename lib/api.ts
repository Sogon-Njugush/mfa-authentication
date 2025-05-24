import API from "./axios-client";

type LoginType = {
  email: string;
  password: string;
};

type RegisterType = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type forgotPasswordType = {
  email: string;
};

export const loginMutationFn = async (data: LoginType) =>
  await API.post(`/auth/login`, data);

export const registerMutationFn = async (data: RegisterType) =>
  await API.post(`/auth/register`, data);

export const forgotPasswordMutationFn = async (data: forgotPasswordType) =>
  await API.post(`auth/password/forget`, data);
