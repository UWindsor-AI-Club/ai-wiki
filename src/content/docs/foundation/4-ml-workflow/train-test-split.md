---
title: Train-Test Split
description: Why splitting data matters and the concept of generalization.
sidebar:
  order: 2
---

## What Data Do We Use?

In machine learning, we typically separate our dataset into two main components before we split it for training and testing:

- **`X` (Features):** The input data the model uses to learn patterns and make predictions. This is usually a 2D matrix (table) consisting of data samples (i.e., rows) and features (i.e., columns). It is conventionally written as an uppercase `X`.
- **`y` (Target):** The output data or the "answer" that our model is trying to predict. This is usually a 1D vector (list) consisting of the target values for each data sample. It is conventionally written as a lowercase `y`.

Assuming that we have already loaded our dataset into Python as a DataFrame, we can separate the features and target by selecting the appropriate columns. For example, if we have a DataFrame `df` with columns `feature1`, `feature2`, and `target`, we can separate the features and target as follows:

```python
X = df[['feature1', 'feature2']]
y = df['target']
```

Of course, this is just an example. In practice, how we choose features and target depends on our dataset.

## The Data Leakage Problem

Imagine a student who studies the exact exam questions beforehand. They memorize the answers perfectly and score 100% on the exam. But if you give them different questions on the same topic, they fail.

This is what happens when models "memorize" training data instead of learning patterns. In response to the data leakage problem, we split our data into two parts:

1. **Training Set (70-80%)** - Data the model learns from
2. **Test Set (20-30%)** - Data we use to evaluate the model

During the model training phase, we will only use the training set to train our model. Then, we will use the test set to evaluate the model's performance. 

To split the data, we can use the `train_test_split` function from the `sklearn.model_selection` module.

```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
```

Here, we have a dataset that is already split into features `X` and labels `y`. We pass these two components into `train_test_split` and get back four components: `X_train`, `X_test`, `y_train`, and `y_test`, where `X_train` and `y_train` are the training set, and `X_test` and `y_test` are the test set. 

As well, `test_size=0.2` means that 20% of the data will be used for testing. So, `X_test` and `y_test` will each have 20% of the data, and `X_train` and `y_train` will each have 80% of the data. 

Additionally, `random_state=42` fixes the random seed for the random number generator. This means that the data will be split randomly, but the same split will be produced every time the code is run.

## Stratified Splitting

When dealing with classification problems, we may encounter datasets that are imbalanced. **Imbalanced datasets** are datasets where the number of examples in one class greatly outnumbers the examples in another class. 

For example, a dataset analyzing fraudulent credit card transactions might have 99% legitimate transactions and only 1% fraudulent ones. If we randomly split the data, we might end up with a test set that has no fraudulent transactions, which would make it impossible to evaluate the model's ability to detect fraud.

In such cases, it's important to ensure that both the training and test sets have the same proportion of classes as the original dataset. This is called **stratified splitting**.

To use stratified splitting, we can use the `stratify` parameter to maintain class balance:

```python
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.2,
    stratify=y,          # ← Keep class proportions based on the target 'y'
    random_state=42
)
```

By providing `stratify=y`, `train_test_split` looks at the distribution of labels in `y` and ensures that this exact relative proportion is reflected in both `y_train` and `y_test`.

## Cross-Validation

Evaluating a model on only a single train-test split can be risky. By pure chance, we might happen to get an "easy" test set resulting in overly optimistic accuracy, or an unusually "difficult" one making the model look worse than it is.

For a more robust and reliable evaluation, we can use **k-fold cross-validation**. Instead of splitting the data into test and train sets just once, this method:
1. Splits the dataset into *k* equal-sized folds (chunks of data).
2. Trains the model *k* separate times. Each time, it uses exactly *one* of the folds as the test set and combines the remaining *k-1* folds to form the training set.
3. Calculates an evaluation score for each "test fold" and averages the *k* scores for the final performance metric.

For example, using 5-fold cross-validation (`cv=5`), the model is tested 5 separate times. Every single data point in our dataset will get the chance to be in the test set exactly once.

There are several ways to perform cross-validation. We can manually split the data into *k* folds and train the model *k* separate times. However, this can be time-consuming and error-prone. In scikit-learn, we can create the folds using `KFold` and then train the model *k* separate times. 

```python
from sklearn.model_selection import KFold

kf = KFold(n_splits=5, shuffle=True, random_state=42)

for fold, (train_index, test_index) in enumerate(kf.split(X)):
    X_train, X_test = X.iloc[train_index], X.iloc[test_index]
    y_train, y_test = y.iloc[train_index], y.iloc[test_index]
    
    # Training and fold-wise evaluation ...
```

Depending on the specific use case, we may also use other fold-splitting methods, such as `StratifiedKFold` for stratified splitting or `GroupKFold` for group-wise splitting.

Alternatively, we can also use the `cross_val_score` function from the `sklearn.model_selection` module. It is a convenient function that performs k-fold cross-validation and returns the scores for each fold.

```python
from sklearn.model_selection import cross_val_score

# Evaluate the model using 5-fold cross validation
scores = cross_val_score(model, X, y, cv=5)

print(f"Scores for each fold: {scores}")
print(f"Average CV Score: {scores.mean():.2%}")
```

Because cross-validation evaluates the model's performance on multiple unseen chunks of data, it gives us a more reliable estimate of how the model will perform on new, real-world data.