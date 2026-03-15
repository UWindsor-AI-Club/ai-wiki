---
title: Activity - Data Exploration
description: Hands-on exploration of real datasets to develop intuition about data patterns.
sidebar:
  order: 4
---

In this activity, we will explore the Iris datasets using `pandas` and `matplotlib`. The Iris dataset is a classic in machine learning, and it is often used to introduce the concept of classification. It contains measurements of sepal length, sepal width, petal length, and petal width for three different species of iris flowers.

## Step 1: Load the dataset

```python
from sklearn.datasets import load_iris
import pandas as pd
import matplotlib.pyplot as plt
import numpy as np

# Load the dataset
iris = load_iris()
df = pd.DataFrame(iris.data, columns=iris.feature_names)
df['species'] = iris.target_names[iris.target]

print(df.head(10))
print(df.describe())
```

First copy the code above into a new python file, and run it. Then answer the following questions by examining the output, or by adding code to the above snippet:

:::tip[Questions to Answer]{seti:notebook}

1. What is the shape of the dataset?
2. What is the target feature in the dataset?
3. How many features are in the dataset?
4. How many flowers are in each species?
5. What's the range of petal lengths?

:::

## Step 2: Visualize the data

Create a scatter plot by adding the following snippet to your code:

```python
plt.figure(figsize=(12, 8))

for species in iris.target_names:
    mask = df['species'] == species
    plt.scatter(df[mask]['petal length (cm)'],
               df[mask]['petal width (cm)'],
               label=species, s=100, alpha=0.6)

plt.xlabel('Petal Length (cm)')
plt.ylabel('Petal Width (cm)')
plt.title('Iris Flowers: Petal Length vs Width')
plt.legend()
plt.grid(alpha=0.3)
plt.show()
```

What patterns do you notice?

:::tip[Questions to Answer]{seti:notebook}

1. Are the species well-separated?
2. Is there any overlap?
3. What feature seems most useful for distinguishing species?

:::

## Step 3: Visualize the data

Create a subplot comparing different feature pairs by adding the following snippet to your code:

```python
fig, axes = plt.subplots(2, 2, figsize=(12, 10))

pairs = [
    ('sepal length (cm)', 'sepal width (cm)'),
    ('sepal length (cm)', 'petal length (cm)'),
    ('petal length (cm)', 'petal width (cm)'),
    ('sepal width (cm)', 'petal width (cm)')
]

for idx, (ax, (x_feat, y_feat)) in enumerate(zip(axes.flat, pairs)):
    for species in iris.target_names:
        mask = df['species'] == species
        ax.scatter(df[mask][x_feat], df[mask][y_feat],
                  label=species, s=50, alpha=0.6)
    ax.set_xlabel(x_feat)
    ax.set_ylabel(y_feat)
    ax.legend(fontsize=8)
    ax.grid(alpha=0.3)

plt.tight_layout()
plt.show()
```

Based on your visualizations, rank the features from most to least useful for identifying the species.

**Why is this important?** Some features are better predictors than others. Petal length and width appear to have the best separation between species.

## Part 5: Make a Prediction by Eye

Look at your scatter plot of "Petal Length vs Petal Width." Without using any algorithm:

1. If you saw a flower with petal length = 1.5cm and width = 0.3cm, what species would you predict?
2. If you saw petal length = 5cm and width = 2cm, what would you predict?
3. Were you confident in your predictions? Why or why not?

## Reflection

In this activity, you successfully applied your intuition to explore distinct patterns in the data and make predictions based on them. Our next step is to teach a machine how to identify and make these distinctions automatically. Keep in mind this key insight: good features are the foundation of effective models.
