export default function ({ $axios, store }) {
  $axios.setBaseURL(`api`);
  $axios.setHeader('accept', 'application/json');
  $axios.setHeader('Content-Type', 'application/json');

  $axios.interceptors.response.use(res => {
    return res;
  }, err => {

  });
}
