---
title: Loading Data with pandas
description: Importing and exploring datasets with the pandas library, including Iris and Diabetes datasets.
sidebar:
  order: 2
---

In this chapter, we will give a brief introduction to the `pandas` library.

## What is `pandas`?

`pandas` is a Python data manipulation and analysis library. It provides data structures and functions needed to work with structured data, such as tables, time series, and matrices. Particularly, it introduces two data structures, DataFrame and Series, for representing tabular data.

- **DataFrame**: A 2D tabular data structure used by `pandas`. It is similar to a spreadsheet or a SQL table, with rows and columns. The rows are each labelled with an unique identifier called index.
- **Series**: A 1D array-like object containing a sequence of values. You can think of a Series as a DataFrame with only one column.

## Loading Data with `pandas`

### Importing pandas

In your Python script, you typically import pandas with the alias `pd`:

```python
import pandas as pd
```

### Loading Datasets

We can load datasets from various sources, such as CSV files, Excel files, and built-in datasets as DataFrames. For example, to load a CSV file, we can use the `read_csv()` function:

```python
df = pd.read_csv('filename.csv') # Creates a DataFrame whose content is the data in filename.csv
```

Likewise, we can load an Excel file using the `read_excel()` function:

```python
df = pd.read_excel('filename.xlsx') # Creates a DataFrame whose content is the data in filename.xlsx
```

Many machine learning libraries include built-in datasets, of which we can convert into DataFrame objects. For example, we can load the Iris dataset from scikit-learn and convert it into a DataFrame:

```python
from sklearn.datasets import load_iris
import pandas as pd

# Load Iris dataset
iris = load_iris()
df_iris = pd.DataFrame(data=iris.data, columns=iris.feature_names) # Convert into DataFrame
df_iris['target'] = iris.target
```

## Exploring Data with pandas

Once you have loaded your data into a DataFrame, you can use various pandas functions to explore it. The following sections include some common ways you can explore the dataset:

### Displaying Data

```python
# Display the first n rows. By default, n = 5.
df.head(10)

# Display the last n rows. By default, n = 5.
df.tail(10)
```

### Getting Data Information

```python
# Get summary information about the DataFrame
df.info()

# Get descriptive statistics of numerical columns
df.describe()

# Get the shape of the DataFrame (rows, columns)
df.shape

# Get column names
df.columns

# Get data types of each column
df.dtypes
```

### Selecting Data

`pandas` make selecting and filtering data very simple. For example, you can select data by column name, row index, or by condition, as seen below:

```python
df['column_name'] # Returns a Series with the specified column

df[['column1', 'column2']] # Returns a DataFrame with only the specified columns

df[df['column_name'] > value] # Returns rows where the value in 'column_name' is greater than 'value'

df.iloc[0:5] # Returns rows from index 0 to 4

df.loc['label'] # Returns rows with label 'label'
```

:::tip

In machine learning, structured datasets, especially tabular datasets, categorizes data using the following scheme:

- **Features** are the columns of the dataset and represents the attributes that a data point can have.
- **Label (target)** is a special type of column that represents the attribute that machine learning models try to predict. If the dataset is used for classification tasks, a label may also be called a **class**.
- **Samples** are the rows of the dataset. They represent individual data points of the tabular data.

:::

### Data Manipulation

Additionally, you can also quickly modify the DataFrame object based on specific rules. This is useful if you want to preprocess the dataset, or to use certain statistics for operations and analysis.

```python
df['new_column'] = df['column1'] + df['column2'] # Creates a new column 'new_column' that is the sum of 'column1' and 'column2'

df = df.drop('column_name', axis=1) # Drops the column 'column_name'

df = df.dropna() # Drops rows with missing values

df = df.fillna(value) # Fill missing values with 'value'

df.groupby('column_name').mean() # Groups the DataFrame by 'column_name' and calculates the mean of each group

df.sort_values(by='column_name') # Sorts the DataFrame by 'column_name'
```

:::tip

A very common strategy to exploring dataset is first to check if the dataset contains any missing values. If there are many missing values across the columns and the rows, then the dataset is sparse and would require different model training strategy than when the dataset is dense.

To do so, we can use the `isnull()` and `sum()` functions to check for missing values:

```python
df.isnull().sum()
```

Here, `df.isnull()` first checks if there are any missing values in the columns, and then `sum()` sums the number of missing values for each column. The output will be a Series with the column names as the index and the number of missing values as the values.

:::
