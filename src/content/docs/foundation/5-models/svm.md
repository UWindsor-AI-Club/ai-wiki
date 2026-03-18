---
title: Support Vector Machines
description: Learning abour support vector machines.
sidebar:
  order: 7
---

## Abstract Concept

Support Vector Machines (SVM) find the optimal "hyperplane" (a line in 2D, a flat plane in 3D, etc.) that best separates different classes in the training data. 

Specifically, an SVM tries to maximize the *margin*, which is the distance between the hyperplane and the nearest data points from each class. These nearest, most critical data points that "support" this margin are called the **Support Vectors**. 

Through a technique called the "kernel trick", SVMs can also operate in extremely high-dimensional spaces to find non-linear separation boundaries without suffering massive computational costs. This is useful for datasets that are not linearly separable.

## Code Example

```python
from sklearn.svm import SVC
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.preprocessing import StandardScaler

# Load data
iris = load_iris()
X, y = iris.data, iris.target

# Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# SVMs are highly sensitive to feature scaling.
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Create and train model
model = SVC(kernel='rbf', C=1.0)
model.fit(X_train_scaled, y_train)
```

Here, we initialize `SVC()`, which stands for Support Vector Classification. For regression tasks, Scikit-learn offers `SVR()` (Support Vector Regression). Note the addition of `StandardScaler()`, as algorithms that rely on distance measurements between points, like SVM, require feature scaling to perform optimally.

## Key Hyperparameters

- **`C` (Regularization parameter):** Controls the trade-off between achieving a wide margin and correctly classifying all training points. A small C value creates a wider margin that allows for some misclassification, while a large C value creates a narrow margin that penalizes misclassification heavily.
- **`kernel`:** The mathematical function that transforms the data. 
  - `'linear'` creates a strict straight-line boundary.
  - `'rbf'` (Radial Basis Function) is the default and creates smooth, complex, non-linear boundaries.
  - `'poly'` (Polynomial) creates curved, sweeping boundaries.
- **`gamma`:** Defines how far the influence of a single training data point reaches. Used by the `'rbf'`, `'poly'`, and `'sigmoid'` kernels. A small gamma value means distant points heavily influence the separation line, while a large gamma value means only nearby points influence the separation line, creating tightly wrapped, zig-zagging boundaries around clusters (high risk of overfitting).

## When to Use SVM

- **High-dimensional spaces:** SVMs are exceptionally effective in cases where the number of features is greater than the number of samples.
- **Clear margins of separation:** SVMs work incredibly well when there is a clear, definable margin of separation between the classes.
- **Memory efficiency is prioritized:** SVMs are memory efficient because they only rely on a subset of the training points (the support vectors) to define the boundary, rather than the entire dataset.
- **Handling complex non-linear data:** Utilizing the kernel trick (specifically `'rbf'`) allows SVMs to slice up datasets with highly complex geometries that algorithms like Logistic Regression would fail entirely on.