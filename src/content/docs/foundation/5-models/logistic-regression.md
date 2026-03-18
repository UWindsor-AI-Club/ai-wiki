---
title: Logistic Regression
description: Classification using probability-based predictions.
sidebar:
  order: 4
---

Despite its name, logistic regression is used for **classification**, not regression. It predicts probabilities that a data point belongs to each class.

## Abstract Concept

Logistic regression answers the question: "What's the probability this data point belongs to class A vs class B?"

Instead of a straight line, it uses an S-shaped curve (sigmoid function):

$$P(y=1) = \frac{1}{1 + e^{-(\beta_0 + \beta_1 x_1 + \beta_2 x_2 + ...)}}$$

This outputs probabilities between 0 and 1 for whether the data point belongs to class 1. If the probability is greater than 0.5, the model predicts class 1. Otherwise, it predicts class 0.

Because Logistic Regression generates probabilities, it is an excellent model to use when you want to understand the **confidence** of a prediction.

In the example above, Logistic Regression is used for binary classification. However, it can be used for multi-class classification as well by using a one-vs-rest approach. A separate binary classifier is trained for each class, and then the class with the highest probability is used as the final prediction.

## Code Example

```python
from sklearn.linear_model import LogisticRegression
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Load Iris data
iris = load_iris()
X = iris.data
y = iris.target

# Binary classification: Is it Setosa or not?
y_binary = (y == 0).astype(int)

# Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y_binary, test_size=0.2, random_state=42
)

# Create and train model
model = LogisticRegression(max_iter=200)
model.fit(X_train, y_train)
```

To find the optimal curve that fits the data, Logistic Regression relies on optimization algorithms called **solvers**. In the code above, we didn't specify a solver, so the model defaults to the **`'lbfgs'`** solver. This is a fast, general-purpose optimization algorithm that works well for most datasets. 

Additionally, even though the example above demonstrates binary classification, Scikit-Learn's Logistic Regression can automatically handle **multi-class** classification under the hood if you feed it a multi-class dataset. The only caveat is that some alternative solvers, like `'liblinear'`, only support binary classification.

By default, Scikit-Learn's LogisticRegression applies **regularization**. Regularization is a technique that penalizes overly complex models by adding a penalty term to the algorithm's cost function. In practice, this shrinks the learned coefficients. By keeping the coefficients small, the model is mathematically discouraged from heavily relying on noisy or less important features so that the model generalizes well to new, unseen data rather than just memorizing the training set.

## Key Hyperparameters

- **`C`:** This parameter controls the inverse of the regularization strength. A smaller `C` (e.g., `0.01`) forces stronger regularization and a simpler model. A larger `C` (e.g., `100`) forces weaker regularization and a more complex model. The default value is `1.0`.
- **`max_iter`:** The maximum number of iterations taken for the solvers to converge on the optimal curve. If you get a `ConvergenceWarning`, you usually just need to increase this number (e.g., `max_iter=1000`). The default value is `100`.
- **`solver`:** The algorithm to use for optimization. The default is `'lbfgs'`. Other options include `'liblinear'`, `'newton-cg'`, `'sag'`, and `'saga'`. The best solver for a given problem depends on the size and complexity of the dataset.
- **`class_weight`:** The default is `None`, which means that the model will treat all classes equally. However, if you have an imbalanced dataset, you can use this parameter to give more weight to the minority class.
- **`random_state`:** Controls the randomness of the model. Set this to an integer for reproducible results.

## When to Use Logistic Regression

- **Need probabilistic predictions:** If we need to know the probability of a data point belonging to each class (e.g., "There is a 92% chance this email is spam").
- **Fast, interpretable baseline:** Like Linear Regression, Logistic Regression is computationally inexpensive and highly interpretable. You can look at the learned coefficients to see exactly which features influence the prediction.
- **Data has linear decision boundaries:** Logistic regression assumes the classes can be relatively cleanly separated by a line or plane. It will struggle to learn highly complex, circular, or overlapping bounds without significant feature engineering.
