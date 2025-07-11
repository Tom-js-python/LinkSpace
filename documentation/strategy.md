# 🛠️ Development & Testing Strategy for LinkSpace

This document outlines the general strategy for building and testing the LinkSpace application. It serves as a guide for anyone contributing to the project to understand the **flow from user goals to implementation**, and how we ensure features work as intended.

## 🧭 Overview

We follow a layered approach:

1. Start from **human-centered user stories**
2. Translate stories into **concrete behavioral scenarios** (BDD)
3. Ground these scenarios in **interface mockups**
4. Use a combination of **unit, integration, and end-to-end tests** to ensure correctness
5. Build features iteratively, writing tests first where possible (TDD)

## 🧩 Development & Testing Flow

| Step                           | Description                                                                 | Outputs                                                                                                                                                                   |
| ------------------------------ | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1. **User Stories**            | Define who the user is, what they want, and why                             | Example: “As a user, I want to select interests so I can connect with like-minded people.”                                                                                |
| 2. **Gherkin Scenarios (BDD)** | Translate user stories into structured `Given / When / Then` behavior flows | Used as high-level E2E test plans                                                                                                                                         |
| 3. **UI Prototyping**          | Build static UI prototypes using Vue + Tailwind                             | Pages and components are styled and routed using `vue-router`, but logic is minimal. This acts as a living wireframe, enabling early visualization and testing alignment. |
| 4. **Specifications**          | Write specific expectations for elements and components                     | Example: “If the email field is empty, disable the submit button should be disabled”                                                                                      |
| 5. **Unit Tests (TDD)**        | Write isolated tests for logic, store modules, or component behavior        | Frameworks: Vitest (Vue), Pytest (FastAPI)                                                                                                                                |
| 6. **Integration Tests**       | Test combined functionality: routes, database, or component-store combos    | Example: “Creating a user adds them to the database”                                                                                                                      |
| 7. **E2E Tests (Cypress)**     | Automate real user flows from the UI through backend                        | Example: “Sign up → create profile → search users”                                                                                                                        |
| 8. **Build to Pass Tests**     | Write implementation code that satisfies the above tests                    | Focused, test-driven development                                                                                                                                          |

## 🧪 Test Pyramid Philosophy

We prioritize testing coverage using the **test pyramid**. We follow a layered test strategy based on the principle that simpler tests should be more numerous, while broader tests should be fewer and focused on critical paths.

🟢 Unit Tests (many) – logic, validation, store

🔵 Integration Tests (medium) – API + DB, component + store

🔴 E2E Tests (few) – critical user flows

## 🔍 Example Connections

- **User Story** → “As a user, I want to browse people nearby with shared interests”
- **Gherkin Scenario** →

  ```gherkin
  Scenario: Browse users with shared interests
    Given I am a logged-in user
    And   I have "Hiking" as an interest
    When  I search for nearby users
    Then  I should see other users who have "Hiking" as an interest
  ```

- **UI Spec** → Search bar should autocomplete from list of approved interests
- **Unit Tests** → `filterUsersByInterest()`, Pinia store mutations
- **Integration Tests** → `/api/search` returns correct users with interest "Hiking"
- **E2E Test** → Cypress simulates full login → interest select → search → profile view

## 📎 Summary

This approach is designed to:

- Stay user-focused
- Keep scope manageable
- Encourage reliable, maintainable code
- Prevent regressions through layered automated tests

By starting with human goals and translating them into code via clear scenarios and specifications, LinkSpace aims to be a robust and user-friendly app from the ground up.
