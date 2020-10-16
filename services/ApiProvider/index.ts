import Axios from 'axios';
import { ApiPage } from "types/api";
import { ThemeSettings } from 'types/api/ThemeSettings';
import { PAGES, THEME_SETTINGS } from 'consts';
import { resolve } from 'path';

export class ApiService {
  static instance = Axios.create({
    baseURL: process.env.API_URI || 'http://localhost:1337'
  });

  static async getPage(id: number): Promise<ApiPage> {
    //return (await ApiService.instance.get<ApiPage>(`/pages/${id}`)).data
    return new Promise((resolve) => resolve(PAGES[id] || { Title: '', Slug: '', MetaDescription: '', Content: [] }));
  }
  static async getThemeSettings(): Promise<ThemeSettings> {
    //return (await ApiService.instance.get<ThemeSettings>(`/theme-settings`)).data
    return new Promise((resolve) => resolve(THEME_SETTINGS));
  }
}