import client from './axiosSetting';

export const loadViewsApi = () => client.get(`api/views/load`);
