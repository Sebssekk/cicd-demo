# 🚀 Express TypeScript CI/CD Demonstration Application

[![GitHub Actions CI](https://img.shields.io/badge/CI/CD-GitHub%20Actions-blue?logo=github-actions)](./.github/workflows/ci.yml)
[![GitLab CI/CD](https://img.shields.io/badge/CI/CD-GitLab%20CI-orange?logo=gitlab)](./.gitlab-ci.yml)
[![Compiler: tsgo](https://img.shields.io/badge/Compiler-tsgo%20(Go--native)-blue)](https://github.com/microsoft/typescript)
[![Linter: ESLint v9](https://img.shields.io/badge/Linter-ESLint%20v9%20(Flat%20Config)-purple?logo=eslint)](./eslint.config.mjs)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)

A modern, cloud-native TypeScript Express REST API designed specifically as a educational vehicle for advanced CI/CD engineering concepts. This repository implements an **"Everything as Code"** paradigm, decoupling application logic from infrastructure and orchestrating complex build pipelines across both **GitHub Actions** and **GitLab CI/CD**.

---

## 🛠️ Core Technology Stack

* **Runtime:** Node.js (v24+) & Express
* **Language:** TypeScript 5+ (Typed API modeling)
* **Compiler:** `tsgo` (Microsoft's native Go-based blazing fast compiler preview)
* **Code Quality:** ESLint v9.0.0+ (Utilizing the modern asynchronous **Flat Config** system)
* **Testing:** Jest, `ts-jest` (In-memory testing execution), and Supertest (HTTP assertion framework)
* **Containerization:** Docker (Multi-stage, Alpine-optimized ultra-lightweight footprint)

---

## 📂 Project Architecture

```text
├── .github/
│   └── workflows/
│       └── ci.yml             # GitHub Actions multi-job pipeline pipeline
├── src/
│   └── server.ts              # Express API with dynamic in-memory state
├── tests/
│   └── server.test.ts         # Jest API endpoints integration tests
├── .gitlab-ci.yml             # GitLab CI/CD multi-stage configuration
├── Dockerfile                 # Immutable artifact deployment definition
├── eslint.config.mjs          # ESLint v9 Flat Config setup
├── jest.config.js             # Jest/ts-jest runtime environment config
├── package.json               # NPM dependency management and script hooks
└── tsconfig.json              # Compilation rules targeted by tsgo