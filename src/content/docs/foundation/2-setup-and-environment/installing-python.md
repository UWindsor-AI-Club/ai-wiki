---
title: Installing Python and Virtual Environments
description: Step-by-step guide to setting up Python and creating virtual environments.
sidebar:
  order: 2
---

## Why Python?

Currently, Python is the dominant language to use in the AI/ML landscape. As an intuitive high-level language, Python is easy to use and allows developers to quickly build prototypes. It also has one of the largest ecosystem of specialized AI/ML libraries, making it simple to create AI/ML pipelines.

However, this doesn't mean that Python is the **only** language that you can use for AI/ML. Other languages, such as Rust, TypeScript, Go, and Julia are also used in the field depending on the specific requirements of their project developers. Additionally, due to the need for high-performance computing in AI/ML, many of the machine learning libraries in Python are actually developed using C++ for maximum efficiency.

## Python Virtual Environment and Package Managers

In AI/ML development, it is not a good practice to install Python and its packages globally, especially if you are working on multiple projects. Different projects may require different versions of Python and its packages, and installing everything globally will inevitably lead to dependency conflicts.

Instead, try to manage your Python environment using **Package Managers**. These tools create isolated virtual environments, ensuring that dependency conflicts do not happen by having distinct Python versions and packages for each project.

In the Python community, the most popular package managers are:

1. **`pip` + `venv`:** `pip` is Python's built-in standard package manager. If you have previously installed Python directly into your computer, chances are, you already have `pip` installed (you can check this by typing `pip --version` in your terminal).
2. **Conda (Recommended):** Conda is a powerful system package manager (via Miniconda/Anaconda) that manages Python or non-Python dependencies (e.g., CUDA libraries for GPU acceleration). Additionally, Conda is not limited to Python and can manage other languages like C/C++ and R.

Other more recent package managers also exist, such as `uv` and `poetry`, but we will not cover them in this guide.

### Setting Up Python via Conda

In this section, we will install Miniconda instead of the full Anaconda distribution. The key difference between the two distributions is that Anaconda comes pre-installed with popular data science and AI/ML packages (and a few other convenience tools), while Miniconda is a lightweight version of Conda that only comes with the Conda package manager.

#### 1. Install Miniconda

You can install Miniconda via the command line or the GUI installer.

- For command line install, you can proceed to the [Miniconda help page](https://www.anaconda.com/docs/getting-started/miniconda/install#quickstart-install-instructions), and follow the instructions based on your operating system and preferred terminal.
- For GUI install, you can proceed to the [Miniconda download page](https://repo.anaconda.com/miniconda/) and download the installer for your operating system. Then, follow the instructions of your installer. If you encounter any issues, use the [Miniconda help page](https://www.anaconda.com/docs/getting-started/miniconda/install#basic-install-instructions).

#### 2. Create a Conda Environment

Open your terminal or command prompt. Let's create an environment named `myenv` with Python 3.10:

```bash
conda create --name myenv python=3.10
```

You will be prompted to confirm the installation by typing `y` and pressing Enter. You may also be asked to confirm the installation of additional packages that are dependencies of Python.

To check that the environment is created in your Conda setup, you can run the command `conda env list` to list the current environment that exists.

#### 3. Activate the Environment

Before you can use an environment in your terminal, you must first activate it. Enter the following command:

```bash
conda activate myenv
```

Your terminal prompt will now start with `(myenv)`. You are now in an isolated virtual environment, ready to install packages safely using `conda install <package>` or `pip install <package>`.

#### 4. Deactivate the Environment

When you are done working in your virtual environment, you can deactivate it by running the following command:

```bash
conda deactivate
```