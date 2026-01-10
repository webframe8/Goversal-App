import axios from 'axios';
import { BaseUrl } from '@/env.config';
import * as SecureStore from 'expo-secure-store'

type Detail = {
    email: string,
    password: string
}

export const login = async (detail: Detail) => {
    const response = await axios.post(`${BaseUrl}/login/`, {
        email: detail.email,
        password: detail.password
    });

    const {access, refresh, user} = response.data;
    SecureStore.setItemAsync("access_token", access);
    SecureStore.setItemAsync("refresh_token", refresh);
    SecureStore.setItemAsync("user", JSON.stringify(user));

    return response.data
}

export const logout = () => {
    SecureStore.deleteItemAsync("access_token");
    SecureStore.deleteItemAsync("refresh_token");
    SecureStore.deleteItemAsync("user");
}