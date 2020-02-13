import client from './axiosSetting';

export const addProjectApi = ({ title, desc, markdown, category, coverImg }) =>
  client.post(`api/project/add/${category}`, {
    title,
    desc,
    markdown,
    coverImg,
  });

export const loadAllProjectApi = ({ category }) => {
  return client.get(`api/project/loadAll/${category}`);
};

export const loadProjectApi = id => client.get(`api/project/load/${id}`);

export const updateProjectApi = ({ id, title, desc, markdown, coverImg }) =>
  client.patch(`api/project/update/${id}`, {
    title,
    desc,
    markdown,
    coverImg,
  });

export const deleteProjectApi = id => client.delete(`api/project/delete/${id}`);
