---
title: Step 2 - Model Building
description: Training and tuning machine learning models.
sidebar:
  order: 3
---

Now that you have clean, numerical training and validation sets, it's time to build predictive models!

Create a new section in your notebook for Model Building.

## 1. Establish a Baseline

Before trying complex algorithms, train a simple "baseline" model. For classification, Logistic Regression is a great baseline. For regression, Linear Regression is a great baseline too.

```python
from sklearn.linear_model import LogisticRegression

# Note: if your target is continuous (House Prices), use LinearRegression instead
model_lr = LogisticRegression(max_iter=1000)

# Train the model on your training set
model_lr.fit(X_train, y_train)

# Check the accuracy on your validation set
val_acc = model_lr.score(X_val, y_val)
print(f"Logistic Regression Validation Accuracy: {val_acc:.2%}")
```

Your goal is to beat this baseline score with more advanced models!

## 2. Train Multiple Models

Experiment with at least 3 other algorithms that you learned in the previous modules.

For **Classification** (Titanic, Spaceship Titanic):
- Decision Trees
- k-Nearest Neighbors
- Random Forest
- Support Vector Machines (SVM)

For **Regression** (House Prices):
- Decision Tree Regressor
- Random Forest Regressor
- SVR (Support Vector Regression)

If you are using distance-based algorithms like k-NN or SVM, **don't forget to scale your features** using `StandardScaler` first!

## 3. Hyperparameter Tuning

Once you find a model that performs well, try tuning its hyperparameters to squeeze out better performance.

```python
# Example: Tuning the max_depth of a Random Forest
for depth in [3, 5, 7, 10, None]:
    model = RandomForestClassifier(max_depth=depth, random_state=42)
    model.fit(X_train, y_train)
    
    train_score = model.score(X_train, y_train)
    val_score = model.score(X_val, y_val)
    
    print(f"Depth {depth} | Train: {train_score:.3f} | Val: {val_score:.3f}")
```

**Questions to answer:**
- Which model gave you the highest validation score?
- Which hyperparameter combination worked the best?
- Did any models overfit the training data?

Once you have selected your absolute best model, proceed to Step 3 for the final evaluation and Kaggle submission!
