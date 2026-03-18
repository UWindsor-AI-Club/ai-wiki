---
title: Activity - Splitting Data
description: Hands-on practice with train_test_split() to understand data splitting.
sidebar:
  order: 3
---

In this activity, you'll practice splitting data. We will use a synthetic imbalanced dataset for this activity to see why stratification matters.

## Setup

```python
from sklearn.datasets import make_classification
from sklearn.model_selection import train_test_split
import numpy as np

# Create an imbalanced dataset (95% class 0, 5% class 1)
X, y = make_classification(
    n_samples=1000, 
    n_features=5, 
    weights=[0.95, 0.05], 
    random_state=42
)
```

## Part 1: Stratified vs Non-Stratified Split

Put the following code in your Python file and run it. This will perform two different splits on our imbalanced dataset: one regular split, and one stratified split.

```python
# Regular split
X_train_regular, X_test_regular, y_train_regular, y_test_regular = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=None
)

# Stratified split
X_train_strat, X_test_strat, y_train_strat, y_test_strat = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

print(f"Total Dataset Size: {X.shape[0]}")
print(f"Test Set Size: {X_test_regular.shape[0]} ({X_test_regular.shape[0]/X.shape[0]:.0%})\n")

print("Regular Split - Test Set Class Distribution:")
unique, counts = np.unique(y_test_regular, return_counts=True)
for class_id, count in zip(unique, counts):
    print(f"  Class {class_id}: {count} ({count/len(y_test_regular):.1%})")

print("\nStratified Split - Test Set Class Distribution:")
unique, counts = np.unique(y_test_strat, return_counts=True)
for class_id, count in zip(unique, counts):
    print(f"  Class {class_id}: {count} ({count/len(y_test_strat):.1%})")

print("\nOriginal Data Distribution:")
unique, counts = np.unique(y, return_counts=True)
for class_id, count in zip(unique, counts):
    print(f"  Class {class_id}: {count} ({count/len(y):.1%})")
```

Looking at the output, what is the exact number of samples in the test sets? Also, try changing the `test_size` to 0.3 and 0.5 and observe how the output changes. Why might an 80-20 partition be more preferable to a 50-50 partition?

Compare the class distributions printed out above. How does the stratified split compare to the regular split in maintaining the original 95% / 5% class balance? What could go wrong if a regular split leaves one class heavily underrepresented in your test set?

## Part 2: Reproducibility with Random State

Why do we always set `random_state`? Machine learning relies heavily on random operations, but we often want our code to be reproducible.

```python
X_train1, X_test1, y_train1, y_test1 = train_test_split(
    X, y, test_size=0.2
)

X_train2, X_test2, y_train2, y_test2 = train_test_split(
    X, y, test_size=0.2, random_state=42
)

X_train3, X_test3, y_train3, y_test3 = train_test_split(
    X, y, test_size=0.2, random_state=99
)

print("Are Run 1 and Run 2 identical?", np.array_equal(X_train1, X_train2))
print("Are Run 1 and Run 3 identical?", np.array_equal(X_train1, X_train3))
print("Are Run 2 and Run 3 identical?", np.array_equal(X_train2, X_train3))
```

Look closely at the results of the script above. Why might reproducibility (using a fixed `random_state`) be important when experimenting with different data splits or training models over multiple days?