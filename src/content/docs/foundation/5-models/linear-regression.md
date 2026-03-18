---
title: Linear Regression
description: Predicting continuous values using linear relationships.
sidebar:
  order: 3
---

Linear regression is one of the simplest forms of supervised learning. It learns a straight line (or hyperplane) that best fits your data.

## Abstract Concept

Imagine you're predicting house prices based on square footage and number of bedrooms:

- More square feet -> Higher price
- More bedrooms -> Higher price

Linear regression finds the best line through your data and determines the coefficients for each feature that minimize the error between the predicted and actual values. In this example, the produced equation will look like:

$$\text{Price} = m \times \text{Square Feet} + n \times \text{Number of Bedrooms} + b$$

Where:

- $m$ is the coefficient for square feet (how much price increases per sq ft)
- $n$ is the coefficient for number of bedrooms (how much price increases per bedroom)
- $b$ is the intercept (base price)

## Code Example

```python
from sklearn.linear_model import LinearRegression
from sklearn.datasets import load_diabetes
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score

# Load data
diabetes = load_diabetes()
X = diabetes.data
y = diabetes.target

# Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create and train model
model = LinearRegression()
model.fit(X_train, y_train)
```

Here, we initialize the model with `LinearRegression()`. This algorithm calculates the "line of best fit" by finding the coefficients that minimize the error between the observed targets in the dataset and the targets predicted by the linear approximation.

Also note that `LinearRegression()` is specifically used for regression tasks. To perform classification tasks, we would use `LogisticRegression()` instead.

## Key Hyperparameters

- **`fit_intercept`:** A boolean indicating whether to calculate the intercept (the $b$ in our formula). If set to `False`, the line is forced to pass through the origin (0, 0). The default is `True`.
- **`positive`:** A boolean indicating whether the coefficients should be restricted to be positive. The default is `False`.

## When to Use Linear Regression

- **Predicting continuous values:** It is designed specifically for predicting continuous targets (i.e., regression) such as housing prices, stock valuations, or temperatures.
- **Looking for true transparency:** Linear regression provides highly interpretable results. You can look at the exact coefficients (weights) assigned to each feature to understand precisely how much impact they have on the prediction.
- **Data has linear relationships:** If your data follows a linear trend without excessively complex interactions, linear regression serves as an excellent model.
- **Requiring fast training and predictions:** Computing the optimal line is computationally lightweight, making it incredibly fast to train and deploy.
