# Playwright Login Automation

## Overview
This project provides automated tests for the login flow of Engenious University using Playwright and Vitest. It leverages the Page Object Model (POM) pattern for better maintainability and readability of the code.

## Features
- Automates login testing using Playwright.
- Uses the Page Object Model to separate page structure, actions, and test steps.

## Setup
1. Clone the repository.
   ```bash
   git clone https://github.com/seeyoucyberspace/Playwright_Login_Automation.git
   ```
2. Install dependencies.
   ```bash
   npm install
   ```

## Running Tests
- To run tests with UI:
  ```bash
  npm run test
  ```

## Project Structure
- `config/`: Configuration files for credentials, URLs, and browser settings.
- `pages/`: Page objects representing the application UI.
- `actions/`: Low-level actions interacting with page elements.
- `steps/`: Higher-level steps for user actions.
- `utils/`: Utility functions and custom error classes.
- `specs/`: Test specifications.

## Dependencies
- [Playwright](https://playwright.dev/): Used for browser automation.
- [Vitest](https://vitest.dev/): Used for running tests.
