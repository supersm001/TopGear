import axios from 'axios';

export const AxiosInstance = axios.create({
  //baseURL: 'http://192.168.0.76:8080/', // Office Localhost SOS 5G
  //baseURL: 'http://192.168.0.65:8080/', // Office Localhost AIRTEL 5G
  //baseURL : 'http://192.168.43.63:8080/', // Office Localhost AIRTEL 5G
  // baseURL: 'http://103.117.180.175:3000/', // Live
  //baseURL: 'http://10.5.50.61:8080/', // workindom
  baseURL: 'http://magical-money.com/',

  timeout: 300000,
  //maxBodyLength:5e+7,
});


export const AxiosInstance2 = axios.create({
  baseURL: 'https://cpalead.com/dashboard/reports/campaign_json.php?id=1470344&geoip=user&conversion=Install App&mobile_app_type=android',

  timeout: 300000,
});