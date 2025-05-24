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

type resetPasswordType = {
  code: string;
  password: string;
};

type verifyEmailType = {
  code: string;
};

export type mfaType = {
  message: string;
  secret: string;
  qrImageUrl: string;
};

type verifyMFAType = {
  code: string;
  secretkey: string;
};

type mfaLoginType = {
  code: string;
  email: string;
};

type SessionType = {
  _id: string;
  userId: string;
  userAgent: string;
  createdAt: string;
  expiresAt: string;
  isCurrent: boolean;
};

type SesionResponseType = {
  message: string;
  sessions: SessionType[];
};

export const loginMutationFn = async (data: LoginType) =>
  await API.post(`/auth/login`, data);

export const registerMutationFn = async (data: RegisterType) =>
  await API.post(`/auth/register`, data);

export const verifyEmailMutationFn = async (data: verifyEmailType) =>
  await API.post(`/auth/verify/email`, data);

export const forgotPasswordMutationFn = async (data: forgotPasswordType) =>
  await API.post(`/auth/password/forget`, data);

export const verifyMFALoginMutationFn = async (data: mfaLoginType) =>
  await API.post(`/mfa/verify-login`, data);

export const mfaSetupQueryFn = async () => {
  const response = await API.get<mfaType>(`/mfa/setup`);
  return response.data;
};

export const verifyMFAMutationFn = async (data: verifyMFAType) =>
  await API.post(`/mfa/verify`, data);

export const revokeMFAMutationFn = async () => await API.put(`/mfa/revoke`, {});

export const getUserSessionQueryFn = async () => await API.get(`/session`);

export const sessionsQueryFn = async () => {
  const response = await API.get<SesionResponseType>(`/session/all`);
  return response.data;
};
