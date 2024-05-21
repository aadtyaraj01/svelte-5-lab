export const load = ({ setHeaders, params, url }) => {
setHeaders({
    'cache-control': 'public, max-age=3600'
  });
    return {
        name: 'Aditya',
        params: params
    }
}