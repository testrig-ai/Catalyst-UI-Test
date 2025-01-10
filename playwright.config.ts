import { defineConfig, devices } from '@playwright/test';
import {join} from "path";
import dotenv from 'dotenv';
import path from 'path';

export default defineConfig({
  testDir: join(__dirname,"src","tests"),
  snapshotDir: "../src/resources/snapShots",
  fullyParallel: true,
  workers:1 , 
  reporter: 'html',
  use: {
  
    trace: 'on-first-retry',
  },

   timeout:0,
  

 
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1400, height: 1000 }},
      
    },
   
  ],
});
