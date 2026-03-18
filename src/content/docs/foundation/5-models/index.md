---
title: Machine Learning Models
description: Overview of different algorithms and how scikit-learn makes them accessible.
sidebar:
  order: 1
---

Now that you understand data and splitting, it's time to learn about the algorithms that actually learn from data. This section introduces some of the most fundamental and widely-used models.

## What's in this chapter?

- **k-Nearest Neighbors**: Learning from similar examples
- **Linear Regression**: Regression prediction
- **Logistic Regression**: Binary classification
- **Decision Trees**: Rules and splits for classification
- **Random Forests**: Ensemble of decision trees
- **Support Vector Machines**: Finding optimal hyperplanes

## The Model Training Process

One of the greatest strengths of `scikit-learn` is its unified API. Regardless of the model you choose, the training process generally follows the same standardized workflow:

```python
from sklearn.model_selection import train_test_split

# Split your data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Create the model
model = SomeAlgorithm(parameters=values)

# Train it
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)

# Evaluate it
score = model.score(X_test, y_test)
```

Let's explore each model in detail!