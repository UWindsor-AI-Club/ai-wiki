---
title: k-Nearest Neighbors
description: Distance-based learning by finding similar examples.
sidebar:
  order: 2
---

k-Nearest Neighbors (k-NN) is one of the simplest machine learning algorithms. It learns by remembering training data and finding the "nearest neighbors" to make predictions.

## Abstract Concept

When classifying a new point, k-NN finds the k closest training examples (by distance) and uses their labels to vote on the prediction.

Suppose we have a dataset of emails with two target labels: "Spam" or "Not Spam". We want to classify a new incoming email as either "Spam" or "Not Spam".

1. Calculate the distance from our new email to all emails in our training data.
2. Find the 3 nearest emails (setting `k=3`).
3. Look at their classifications.
4. If more than half of the nearest emails are "Spam" -> Predict "Spam".

```
Query Email
    |
    ├─ Nearest 1: Spam (distance = 1.5)
    ├─ Nearest 2: Spam (distance = 2.1)
    └─ Nearest 3: Not Spam (distance = 3.8)
```

We have that 2 out of 3 nearest emails are "Spam", so we predict that the query email is "Spam".

## Code Example

```python
from sklearn.neighbors import KNeighborsClassifier
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split

# Load data
iris = load_iris()
X, y = iris.data, iris.target

# Split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Create and train model
model = KNeighborsClassifier(n_neighbors=3)
model.fit(X_train, y_train)

```

Here, we initialize the model with `n_neighbors=3`, which means we will consider the 3 nearest neighbors to make predictions. We typically want k to be an odd number to avoid ties in the voting process.

As well, the choice of k is important. A small value of k means that the model will be more sensitive to noise and outliers, while a large value of k means that the model will be less sensitive to noise and outliers. However, having too small of a k value increases the complexity of the model, which can lead to overfitting which is unideal. We will talk more about overfitting in the next chapter.

To find the best k, we can use cross-validation. We can iterate through a range of k values and calculate the average accuracy for each k using cross-validation. Then, we can choose the k that gives the highest average accuracy. You can also use other metrics, depending on what you are trying to optimize for.

Also note that the initialized model is `KNeighborsClassifier()`. This is because the iris dataset is a classification dataset. If we were using a regression dataset, we would use the `KNeighborsRegressor` class from `sklearn.neighbors` instead.

## Key Hyperparameters

- **`n_neighbors` (k):** The number of nearest neighbors to consider when making a prediction. The default is 5.
- **`metric`:** The method used to calculate the distance between points (e.g., `'euclidean'`, `'manhattan'`, `'minkowski'`). The default is `'minkowski'` with `p=2`, which is equivalent to the Euclidean distance.
- **`weights`:** Determines how the neighbors' votes are weighted. 
  - `'uniform'` (default): All neighbors have an equal vote, regardless of how far away they are.
  - `'distance'`: Closer neighbors have a stronger vote than those further away. This can be useful if your data has some noise or overlapping classes.
- **`algorithm`:** The internal algorithm used to compute the nearest neighbors efficiently (`'auto'`, `'ball_tree'`, `'kd_tree'`, or `'brute'`). By default, it uses `'auto'`, which attempts to automatically decide the best algorithm based on your training data.

## When to Use k-NN

- **Small to medium datasets (< 100K samples):** k-NN is a "lazy learner." It doesn't actually "train" a model by creating a formula, it just memorizes the training data. Predicting on a massive dataset can be extremely slow and memory-intensive because it has to calculate the distance to every single point.
- **Looking for simple, interpretable results:** The underlying logic of k-NN (voting based on similarity) is very intuitive and easy to explain to non-technical stakeholders.
- **Have complex non-linear boundaries:** Since k-NN relies purely on geometric proximity rather than trying to fit a rigid mathematical formula (like a straight line), it can effortlessly model irregular or curved decision boundaries.