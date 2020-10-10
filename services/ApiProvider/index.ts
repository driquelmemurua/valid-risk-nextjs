import Axios from 'axios';
import { ApiPage } from "types/api";
import { ThemeSettings } from 'types/api/ThemeSettings';

export class ApiService {
  static instance = Axios.create({
    baseURL: process.env.API_URI || 'http://localhost:1337'
  });

  static async getPage(id: number): Promise<ApiPage> {
    return (await ApiService.instance.get<ApiPage>(`/pages/${id}`)).data
  }
  static async getThemeSettings(): Promise<ThemeSettings> {
    return (await ApiService.instance.get<ThemeSettings>(`/theme-settings`)).data
  }
}