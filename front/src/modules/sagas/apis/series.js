import client from './axiosSetting';
import qs from 'qs';

export const addSeriesApi = ({ title, desc, markdown, category, coverImg }) =>
  client.post(`api/blog/series/add/${category}`, {
    title,
    desc,
    markdown,
    coverImg,
  });

export const loadAllSeriesApi = ({ category, page }) => {
  const queryString = qs.stringify({
    page,
  });
  return client.get(`api/blog/series/loadAll/${category}?${queryString}`);
};

export const loadSeriesApi = id => client.get(`api/blog/series/load/${id}`);

export const updateSeriesApi = ({ id, title, desc, markdown, coverImg }) =>
  client.patch(`api/blog/series/update/${id}`, {
    title,
    desc,
    markdown,
    coverImg,
  });

export const deleteSeriesApi = id =>
  client.delete(`api/blog/series/delete/${id}`);

export const searchSeriesApi = ({ category, q, page }) => {
  const queryString = qs.stringify({
    q,
    page,
  });
  return client.get(`api/blog/series/search/${category}?${queryString}`);
};
