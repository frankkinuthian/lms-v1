import UserData from "../views/plugin/UserData";

export const API_BASE_URL = `https://lms-v1-backend.onrender.com/api/v1/`;
export const userId = UserData()?.user_id;
export const PAYPAL_CLIENT_ID = "test";
export const teacherId = UserData()?.teacher_id;
