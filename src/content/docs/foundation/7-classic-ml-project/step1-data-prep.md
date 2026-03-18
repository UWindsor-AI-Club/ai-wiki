---
title: Step 1 - Data Preparation
description: Exploring and cleaning your Kaggle dataset.
sidebar:
  order: 2
---

The first step in any machine learning project is getting to know your data. In real-world problems (and Kaggle competitions), data is rarely perfectly clean. You will need to handle missing values, encode text into numbers, and sometimes create entirely new features.

Create a section in your notebook for Data Exploration and Data Preparation.

## 1. Explore the Data

First, load your data using `pandas` and take a look at it.

```python
import pandas as pd

# Load the data
df = pd.read_csv('train.csv')

# Look at the first few rows
print(df.head())

# Check the data types and missing values
print(df.info())

# Get summary statistics
print(df.describe())
```

### Questions to Answer:
- How many samples and features are there?
- What are the different data types (numerical vs categorical)?
- Which column is your target variable?
- Which columns have missing values?

## 2. Visualize Relationships

Use `matplotlib` or `seaborn` to visualize the data. This will help you understand which features might be strong predictors.

```python
import matplotlib.pyplot as plt
import seaborn as sns

# Example: Plotting survival rate by a categorical feature
sns.countplot(data=df, x='Pclass', hue='Survived')
plt.title('Survival by Passenger Class')
plt.show()

# Example: Plotting a numerical feature distribution in the Titanic dataset
sns.histplot(data=df, x='Age', hue='Survived', kde=True)
plt.title('Age Distribution by Survival')
plt.show()
```

## 3. Clean the Data

Machine learning models cannot handle missing values (`NaN`) or raw text strings. You must convert everything into clean numbers.

### Handling Missing Values

Decide how to handle missing data. You can either drop the rows/columns or fill them in (imputation).

```python
# These are examples based on the Titanics dataset

# Option A: Fill missing numerical values with the median
df['Age'] = df['Age'].fillna(df['Age'].median())

# Option B: Fill missing categorical values with the mode
df['Embarked'] = df['Embarked'].fillna(df['Embarked'].mode()[0])

# Option C: Drop a column entirely if it's mostly missing or useless
df = df.drop(columns=['Cabin', 'Name', 'Ticket'])
```

### Encoding Categorical Variables

Convert text categories into numbers so the model can understand them.

```python
# Convert male/female to 0/1
df['Sex'] = df['Sex'].map({'male': 0, 'female': 1})

# Use One-Hot Encoding for variables with more than 2 categories
df = pd.get_dummies(df, columns=['Embarked'], drop_first=True)
```

## 4. Train/Validation Split

Before you let your model see the data, you must split off a portion of it to act as your validation set during model training and searching for optimal model parameters. 

:::tip
Kaggle provides a `train.csv` and a `test.csv`. The `test.csv` does **not** have the answers (the target column)! You will use `test.csv` at the very end to submit your predictions. For now, you must split `train.csv` into a training set and a validation set so you can evaluate your model locally.
:::

```python
from sklearn.model_selection import train_test_split

# This is a sample code for the Titanic dataset.

# Separate your features (X) and target (y)
X = df.drop(columns=['Survived'])
y = df['Survived']

# Split the data (using stratify for classification tasks)
X_train, X_val, y_train, y_val = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

print(f"Training data shape: {X_train.shape}")
print(f"Validation data shape: {X_val.shape}")
```

Once your data is clean and split, you are ready to build some models! Proceed to Step 2.
