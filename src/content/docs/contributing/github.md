---
title: Contribute on GitHub
description: How to contribute to the AI Club Wiki on GitHub.
sidebar:
  order: 1
---

## Overview

Welcome to the AI Club Wiki contribution guide! The wiki is entirely open-source and built using [Astro Starlight](https://starlight.astro.build/). We highly encourage club members to contribute new ideas, fix typos and errors, or expand on existing topics. This guide will walk you through the process of contributing to the repository on GitHub.

## Prerequisites

Before getting started, please ensure you have the following:

- A [GitHub account](https://github.com/)
- Basic knowledge of Git and GitHub workflows
- Basic knowledge of Markdown format
- [Node.js](https://nodejs.org/) installed on your local machine to test the site locally

## Step-by-Step Contribution Guide

To contribute to the AI Club Wiki, you will need to follow the standard GitHub pull request workflow:

### 1. Fork and Clone the Repository

First, create a fork of the AI Club Wiki repository to your own GitHub account. Then, clone your forked repository to your local machine:

```bash
git clone https://github.com/YOUR-USERNAME/ai-wiki.git
cd ai-wiki
```

Install the required dependencies:

```bash
npm install
```

### 2. Create a New Branch

Create a new branch for your changes. Use a descriptive name that summarizes the feature or fix you are working on. For example, you can create a branch for adding new topic as follows:

```bash
git checkout -b feature/adding-new-topic
```

### 3. Make Your Changes

You can now start modifying the project. Start the local development server to see your changes in real-time:

```bash
npm run dev
```

Navigate to `http://localhost:4321` in your browser to see your changes in real-time.

#### How to Add New Content

- **Creating Documents**: All documentation files are located in the `src/content/docs` directory. To add a new page, simply create a new `.md` or `.mdx` file in the appropriate subfolder. For example, if you are adding a new topic to the "Foundations" course, you would create a new file in the `src/content/docs/foundation` directory.
- **YAML Frontmatter**: Every document must start with YAML frontmatter containing at least a `title` and `description`. You can also specify the `sidebar` order, which determines the order of which the file will be placed in the sidebar. For example:

  ```yaml
  ---
  title: Your Document Title
  description: A brief summary of what this document covers.
  sidebar:
    order: 1
  ---
  ```

- **Configuring the Sidebar**: If you create a new directory or want to change how sections are grouped, you will need to update the `astro.config.mjs` file in the root directory. This file dictates the structure of the site, including the sidebar navigation. Locate the `starlightSidebarTopics` configuration inside this file to add or modify sections.

### 4. Commit Your Changes

Once you are satisfied with your modifications, commit your changes with a clear and descriptive commit message:

```bash
git add .
git commit -m "Add new tutorial on deep learning"
```

### 5. Push Your Changes

Push your new branch to your forked repository on GitHub:

```bash
git push origin feature/adding-new-tutorial
```

### 6. Create a Pull Request

Go to the original AI Club Wiki repository on GitHub. You should see a prompt to create a new Pull Request from your recently pushed branch. Provide a clear title and description of your changes, then submit the PR.

### 7. Review and Merge

Our wiki maintainers will review your pull request. They may request some changes. Once everything looks good, they will merge your contribution into the main project. 

Thank you for contributing!