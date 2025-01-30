import { defineConfig, devices } from '@playwright/test';
import {join} from "path";
import dotenv from 'dotenv';
import path from 'path';

export default defineConfig({
  testDir: join(__dirname,"src","tests"),
  snapshotDir: "./src/resources/snapShots",
  fullyParallel: true,
  workers:1 , 
  reporter: 'html',
  retries:0,
  
  
  
  use: {
  
    
    trace: 'on-first-retry',
    baseURL : 'https://octopus-app-d459t.ondigitalocean.app/projects/f134124d-a175-46ad-99d0-63a49de74193',
  },

   timeout:0,
  

 
  projects: [
    { name: "setup", testMatch: "auth.setup.ts" },

    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], 
        viewport: { width: 1400, height: 1000 },
        storageState: join(__dirname, "src", "resources", ".auth", "user.json"),
        deviceScaleFactor:1,
    
    },
    dependencies: ["setup"],
      
      
    },
   
  ],
});
