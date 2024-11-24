import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'handyManApp',
  webDir: 'dist',
  server: {
    androidScheme: 'http',
    allowNavigation: ["*"]
  }
};

export default config;
