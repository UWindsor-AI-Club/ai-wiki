---
title: Overfitting vs Underfitting
description: Understanding learning curves and the generalization problem.
sidebar:
  order: 3
---

The most fundamental challenge in machine learning isn't just getting a model to learn, it is getting a model to generalize. **Generalization** is a model's ability to make accurate predictions on data it has never seen before. When a model fails to generalize, it is usually due to one of two problems:

1. **Underfitting (High Bias)**: The model is too simple and fails to learn the underlying patterns.
2. **Overfitting (High Variance)**: The model is too complex and simply memorizes the training data, including all its noise.

To obtain a generalized model, we need to find the sweet spot between underfitting and overfitting. This is known as the **bias-variance tradeoff**. To achieve this, we can use techniques such as cross-validation, regularization, and early stopping. However, we must first identify whether our model is underfitting or overfitting. We can do this by comparing the model's performance on the training data versus the test data.

## Training Accuracy vs Test Accuracy

In our previous example in the train-test split section, we used the example of student exam scores as an analogy for machine learning. A student who has memorized the entire practice exam answers, but is not generalizing well to unseen exam questions is analogous to a model that has overfit. 

Similar to the analogy, we can compare the model's performance on the training data versus the test data to identify whether the model is underfitting or overfitting. If the model performs well on the training data, but poorly on the test data, it is overfitting. If the model performs poorly on both the training data and the test data, it is underfitting.

Usually, the training accuracy is higher than the test accuracy. If the opposite is true, it may be a sign that the model is experiencing a sampling issue where there is a mismatch between the training and test data distributions.

```python
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

# Split the data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train the model
model = SomeModel()
model.fit(X_train, y_train)

# Evaluate
train_accuracy = model.score(X_train, y_train)
test_accuracy = model.score(X_test, y_test)

print(f"Training Accuracy: {train_accuracy:.2%}")
print(f"Test Accuracy: {test_accuracy:.2%}")
```

Suppose our expected output is 98.25% training accuracy and 96.67% test accuracy. This is a good sign because the training accuracy and test accuracy are close to each other. 

However, if our expected output is 98.25% training accuracy and 70% test accuracy, this is a bad sign because the training accuracy and test accuracy are far apart. This means that the model is overfitting to the training data and is not generalizing well.

Similarly, if our expected output is 70% training accuracy and 60% test accuracy, this is a bad sign because the training accuracy and test accuracy are close to each other, but both are low. This means that the model is underfitting to the training data and is not learning the underlying patterns in the data. 

## Visualizing Overfitting vs. Underfitting

To visualize how overfitting and underfitting affects the models, we can plot out the decision boundary of the model. 

```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression
from sklearn.pipeline import Pipeline

# Create synthetic data
X = np.linspace(0, 10, 50).reshape(-1, 1)
y = np.sin(X).ravel() + np.random.normal(0, 0.2, 50)

fig, axes = plt.subplots(1, 3, figsize=(15, 4))
degrees = [1, 3, 15]

for ax, degree in zip(axes, degrees):
    # Create polynomial model
    model = Pipeline([
        ('poly_features', PolynomialFeatures(degree=degree)),
        ('linear_regression', LinearRegression())
    ])
    model.fit(X, y)

    # Generate smooth curve for plotting
    X_smooth = np.linspace(0, 10, 300).reshape(-1, 1)
    y_smooth = model.predict(X_smooth)

    # Plot
    ax.scatter(X, y, alpha=0.6, label='Data')
    ax.plot(X_smooth, y_smooth, 'r-', linewidth=2, label='Model')
    ax.set_title(f'Degree {degree}')
    ax.set_ylim(-1.5, 1.5)
    ax.legend()
    ax.grid(alpha=0.3)

plt.tight_layout()
plt.show()
```

Notice here that as the degree of the polynomial increases, the model becomes more complex and is able to fit the training data more closely. However, as the degree of the polynomial increases, the model becomes more prone to overfitting. This is because the model is memorizing the training data, including all its noise, making the decision boundary too complex and jagged to be useful for predicting unseen data points. 

## Learning Curves

One of the most reliable way to diagnose over- and under-fitting is by plotting learning curves. These graphs show how your training and validation scores change as you give the model more training data.

```python
from sklearn.model_selection import learning_curve
from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import load_iris

iris = load_iris()
X, y = iris.data, iris.target

# Generate learning curve
train_sizes, train_scores, val_scores = learning_curve(
    DecisionTreeClassifier(max_depth=3),
    X, y,
    cv=5,
    train_sizes=np.linspace(0.1, 1.0, 10),
    scoring='accuracy'
)

# Calculate means and stds
train_mean = np.mean(train_scores, axis=1)
train_std = np.std(train_scores, axis=1)
val_mean = np.mean(val_scores, axis=1)
val_std = np.std(val_scores, axis=1)

# Plot
plt.figure(figsize=(10, 6))
plt.plot(train_sizes, train_mean, 'o-', label='Training Score')
plt.fill_between(train_sizes, train_mean - train_std, train_mean + train_std, alpha=0.2)

plt.plot(train_sizes, val_mean, 'o-', label='Validation Score')
plt.fill_between(train_sizes, val_mean - val_std, val_mean + val_std, alpha=0.2)

plt.xlabel('Training Set Size')
plt.ylabel('Accuracy')
plt.title('Learning Curve')
plt.legend()
plt.grid(alpha=0.3)
plt.show()
```

In an underfitting scenario, both the training and validation scores will be low and plateau early on. Increasing the training data size does not help improve the algorithm's performance, because it lacks the capacity to model the complexity of the problem. 

In an overfitting scenario, the training score will be high and the validation score will be low. The gap between the training and validation scores will remain large even as the training data size increases. This is because the model is unable to generalize to new data because its complexity as created by the training data is too complex for the problem.

When a model is neither underfit nor overfit, the training and validation scores will converge towards a high accuracy. The training accuracy may decrease slightly as more data is introduced (which is normal as it becomes harder to fit the training data with more data points), while the validation accuracy steadily increases until the two lines meet, indicating that the model has successfully learned the underlying patterns and generalizes well to new data.

## Strategies for Managing Overfitting and Underfitting

Once you have diagnosed whether your model is overfitting or underfitting, you can apply specific strategies to correct its course. 

If your model is overfitting, you can try the following strategies:

- Increase the amount of training data. More data allows the model to see more examples and learn the true underlying patterns instead of memorizing specific, quirky data points.
- Simplify the model so that it physically cannot memorize the training data. For example, you can reduce the maximum depth of a decision tree or add regularization to a linear model.
- Use ensemble methods like random forests which combine multiple models to reduce overfitting.
- Use early stopping to stop training when the model's performance on the validation set starts to degrade.

On the other hand, if your model is underfitting, you can try the following strategies:

- Increase the complexity of the model. For example, you can increase the maximum depth of a decision tree or reduce regularization to a linear model.
- Engineer new features. Sometimes the model just needs better features to learn the underlying patterns in the data. By creating new features, merging existing weak features, or transforming features, you can provide the model with the information it needs to learn.
- Train longer. For certain iterative models (especially in deep learning), training for more iterations can give the model the time it needs to finally map the patterns.

Depending on the specific models you use, you may need to have distinct strategies to manage overfitting and underfitting.



