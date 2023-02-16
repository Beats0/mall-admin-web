const config = {
  app_mode: process.env.NODE_ENV,
  useOSS: process.env.VUE_APP_useOSS === 'true',
  baseURL: process.env.VUE_APP_baseURL,
  ossUploadUrl: process.env.VUE_APP_ossUploadUrl,
  minioUploadUrl: process.env.VUE_APP_minioUploadUrl,
}

console.log('config', config)
export default {
  ...config
}
