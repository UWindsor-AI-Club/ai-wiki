---
title: Core Machine Learning Libraries
description: Essential Python packages for machine learning - NumPy, pandas, scikit-learn, and matplotlib.
sidebar:
  order: 3
---

With your virtual environment ready, it's time to install the fundamental libraries for machine learning. The following are some of the most widely used libraries in AI/ML development. Additionally, libraries like `pytorch`, `seaborn`, `jupyter`, and `tensorflow` are also widely used in AI/ML development for a variety of reasons, but we will not cover them in this guide.

### NumPy

- **What it does**: Numerical computing with arrays and matrices
- **Why you need it**: Foundation for all data science operations

```bash
pip install numpy
```

### Pandas

- **What it does**: Data manipulation and analysis
- **Why you need it**: For working with structured data like CSV files

```bash
pip install pandas
```

### Scikit-learn

- **What it does**: Machine learning algorithms and tools
- **Why you need it**: For building and evaluating models

```bash
pip install scikit-learn
```

### Matplotlib

- **What it does**: Data visualization
- **Why you need it**: For plotting and visualizing data

```bash
pip install matplotlib
```

:::tip
For all of the libraries above, you can install them all at once by running the following command:

```bash
pip install numpy pandas scikit-learn matplotlib
```

For Conda users, you can install these libraries by replacing `pip` with `conda`.

```bash
conda install numpy pandas scikit-learn matplotlib
```

:::

## Keeping Track of Installed Packages

Although not a requirement because we're starting off with a fresh project, it is good practice to keep track of the packages you install in your project. You can do this by creating a `requirements.txt` (or `environment.yml` file, if you're using Conda) that lists all of the packages you install.

You can either create a `requirements.txt` manually, or by running the following command:

```bash
pip freeze > requirements.txt
```

Alternatively, you can also create an `environment.yml` file for Conda users. This will include additional information such as the name you created for your environment.

```bash
conda env export > environment.yml
```
