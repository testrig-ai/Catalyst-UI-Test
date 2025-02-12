import { defineConfig, devices } from "@playwright/test";
import { join } from "path";

export default defineConfig({
  testDir: join(__dirname, "src", "tests"),
  snapshotDir: "./src/resources/snapShots",
  fullyParallel: true,
  workers: 1,

  reporter: [
    [
      "html",
      {
        outputFolder: join(__dirname, "playwright-report"), // Change this path
        open: "never",
      },
    ],
    ["./src/loggerSetUp/Logger.ts"],
  ],

  retries: 0,
  timeout: 0,

  use: {
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "setup",
      testMatch: "auth.setup.ts",
    },
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        viewport: { width: 1400, height: 1000 },
        storageState: join(__dirname, "src", "resources", ".auth", "user.json"),
        deviceScaleFactor: 1,
      },
      dependencies: ["setup"],
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] ,
        viewport: { width: 1400, height: 1000 },
        storageState: join(__dirname, "src", "resources", ".auth", "user.json"),
        deviceScaleFactor: 1,
      },
      dependencies: ["setup"],
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'],
        viewport: { width: 1400, height: 1000 },
        storageState: join(__dirname, "src", "resources", ".auth", "user.json"),
        deviceScaleFactor: 1,
       },
       dependencies: ["setup"], 
    },
  ],

   

   
});
