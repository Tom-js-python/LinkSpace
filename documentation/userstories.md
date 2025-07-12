# 📖 LinkSpace User Stories & Gherkin Scenarios (MVP)

## 🧭 Purpose

This document outlines user stories and associated Gherkin-style behavior scenarios for the LinkSpace MVP.

- **User Stories** are short, human-centered descriptions of functionality from the perspective of a user. They guide design and development by focusing on user needs and goals.
- **Gherkin Scenarios** express the expected behavior of the system in a structured `Given / When / Then` format. These are primarily used to guide **end-to-end (E2E) testing**.

Each story is numbered to correspond to the five core feature sections in the [Creative Brief](./creativebrief.md). Future specification and test files can use extensions like `1.1.1`, `1.1.2`, etc., for detailed implementation requirements and test cases.

## 1. User Registration & Login

### 1.1 User Story

As a new user, I want to create an account with my email and password so I can access the platform.

#### 1.1 Gherkin Scenario

```gherkin
Scenario: New user registration
  Given I am on the sign-up page
  When I enter a valid email and password
  And I click "Sign Up"
  Then my account should be created
  And I should be redirected to the profile creation page
```

### 1.2 User Story

As a returning user, I want to log in with my credentials so I can access my profile.

#### 1.2 Gherkin Scenario

```gherkin
Scenario: User login
  Given I have a registered account
  When I enter my correct email and password on the login page
  Then I should be logged in and see my dashboard
```

### 1.3 User Story

As a user, I want to update or delete my account so I can control my presence on the platform.

#### 1.3 Gherkin Scenario

```gherkin
Scenario: Edit or delete account
  Given I am logged in
  When I go to my account settings
  Then I can change my email or password
  And I can choose to delete my account permanently
```

## 2. Public User Profiles

### 2.1 User Story

As a user, I want to create a public profile so others can get to know me.

#### 2.1 Gherkin Scenario

```gherkin
Scenario: Create public profile
  Given I am logged in and viewing my profile page
  When I enter a display name, location, and About Me text
  Then my profile should be publicly viewable by other users
```

### 2.2 User Story

As a user, I want to upload a profile photo so people can recognize me.

#### 2.2 Gherkin Scenario

```gherkin
Scenario: Upload profile photo
  Given I am on the profile edit page
  When I upload a valid image file
  Then it should appear on my public profile
```

## Interest Selection (Hybrid System)

### 3.1 User Story

As a user, I want to add interests from a pre-set list so I can show what I enjoy.

#### 3.1 Gherkin Scenario

```gherkin
Scenario: Add interests from list
  Given I am editing my profile
  When I type at least 4 characters in the interest input
  Then I should see matching interest tags I can select
```

### 3.2 User Story

As a user, I want to suggest a new interest if I don’t find mine listed.

#### 3.2 Gherkin Scenario

```gherkin
Scenario: Suggest a new interest
  Given I typed an interest that is not in the list
  When I click “Suggest this interest”
  Then it should be submitted for moderation
```

## Discovery/Search

### 4.1 User Story

As a user, I want to browse other users near me so I can find potential friends.

#### 4.1 Gherkin Scenario

```gherkin
Scenario: Browse nearby users
  Given I am logged in
  When I open the search page
  Then I should see a list or map of users near my location
```

### 4.2 User Story

As a user, I want to filter search results by interest so I can find like-minded people.

#### 4.2 Gherkin Scenario

```gherkin
Scenario: Filter users by interest
  Given I am on the search page
  When I select an interest tag
  Then only users with that interest should be shown
```

### 4.3 User Story

As a user, I want to click on a user’s profile to read more about them.

#### 4.3 Gherkin Scenario

```gherkin
Scenario: View full user profile
  Given I see a profile summary in search results
  When I click on it
  Then I should see the user’s full public profile page
```

## 5. Lightweight Interaction

### 5.1 User Story

As a user, I want to click on a user’s profile to read more about them.

#### 5.1 Gherkin Scenario

```gherkin
Scenario: Send a wave
  Given I am viewing someone’s public profile
  When I click the “Wave” button
  Then the other user should receive a wave notification
```

### 5.2 User Story

As a user, I want to send a short message to someone to start a conversation.

#### 5.2 Gherkin Scenario

```gherkin
Scenario: Send a basic message
  Given I have waved at a user
  And they have waved back
  When I open the message screen
  Then I can send a short message to them
```

## ✅ Summary

This document defines the core **functional expectations** of the LinkSpace MVP in terms of **user needs and behaviours**. These stories will evolve alongside the product and serve as the foundation for specifications, component logic, and automated testing.
