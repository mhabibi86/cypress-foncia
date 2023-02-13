const { defineConfig } = require("cypress");

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

async function setupNodeEvents(on, config) {

    await preprocessor.addCucumberPreprocessorPlugin(on, config);

    on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin.default(config)],
    }));

    require("cypress-mochawesome-reporter/plugin")(on);
    
    allureWriter(on, config);

    // manage multiple environments : default is development
    const environmentName = config.env.environmentName || 'development'
    const environmentFilename = `./cypress/config/${environmentName}.json`
    console.log('loading %s', environmentFilename)
    const settings = require(environmentFilename)
    if (settings.baseUrl) {
        config.baseUrl = settings.baseUrl
    }
    if (settings.env) {
        config.env = {
            ...config.env,
            ...settings.env,
        }
    }
    console.log('loaded settings for environment %s', environmentName)

    return config;
}

module.exports = defineConfig({
    e2e: {
        setupNodeEvents,
        specPattern: "cypress/e2e/*.feature",
        chromeWebSecurity: false,
        env: {
            allureReuseAfterSpec: true,
            allureAddVideoOnPass: true
        },
        viewportHeight: 1080,
        viewportWidth: 1920,
        scrollBehavior: "center",
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
        charts: true,
        reportPageTitle: "Foncia Demo project",
        embeddedScreenshots: true,
        inlineAssets: true,
        saveAllAttempts: false,
    }
});
