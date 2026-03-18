---
title: Random Forest
description: Learning ensemble tree-based rules for interpretable classification and regression.
sidebar:
  order: 6
---

## Abstract Concept

Random Forests are an "ensemble" learning method. Instead of relying on one single decision tree (which is prone to overfitting), a Random Forest builds many smaller decision trees on random subsets of the data and averages their predictions together.

For classification tasks, the forest takes a "majority vote" from all of the individual trees to determine the final prediction. For regression tasks, it averages the numerical predictions of the individual trees. This "wisdom of the crowd" approach makes Random Forests generally more accurate and less prone to overfitting than single decision trees.

## Code Example

```python
from sklearn.ensemble import RandomForestClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Load data
iris = load_iris()
X, y = iris.data, iris.target

# Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create and train model with 100 trees
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)
```

Here, we initialize `RandomForestClassifier()`. For regression problems, you would import `RandomForestRegressor()` from `sklearn.ensemble` instead. Scikit-learn will automatically handle the creation and bagging (bootstrap aggregating) of the individual trees behind the scenes.

## Key Hyperparameters

Because Random Forests are composed of Decision Trees, they share many of the same hyperparameters alongside a few unique ones. The following will only cover the unique ones.

- **`n_estimators`:** The number of trees in the forest. Generally, more trees equal better performance and less overfitting, but training will take longer. (Default: 100).
- **`max_features`:** The number of features each tree is allowed to randomly consider when looking for the best split. This enforces randomness across the trees so they don't all look identical. (Default: 'sqrt' for classification).
- **`random_state`:** Controls the randomness of the model. Set this to an integer for reproducible results.

## When to Use Random Forest

- **Need a very strong baseline model:** Random Forests are known for working exceptionally well with very little hyperparameter tuning necessary.
- **Dealing with high-dimensional data:** The algorithm natively handles datasets with thousands of features efficiently.
- **Reduce overfitting:** If a standard decision tree was overfitting your training data, the ensemble nature of a Random Forest mitigates that risk dramatically.
- **Calculating feature importance:** Just like an individual decision tree, the ensemble can calculate the overall usefulness of each feature across the entire forest via `model.feature_importances_`.