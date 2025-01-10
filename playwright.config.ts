import { defineConfig, devices } from '@playwright/test';
import {join} from "path";
export default defineConfig({
  testDir: join(__dirname,"src","tests"),
  
  fullyParallel: true,
  
  reporter: 'html',
  use: {
  
    trace: 'on-first-retry',
  },

 
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1400, height: 1000 }},
      
    },
   
  ],
});
