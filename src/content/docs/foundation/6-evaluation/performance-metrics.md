---
title: Performance Metrics
description: Understanding accuracy, precision, recall, F1-score, and confusion matrices.
sidebar:
  order: 2
---

Different metrics give different perspectives on your model's performance. Knowing how to read those perspectives and choosing the right metric for your specific problem is key to building an effective machine learning model.

## Classification vs Regression

Classification metrics evaluate how well a model predicts discrete categories, while regression metrics evaluate how well a model predicts continuous values.

For classification problems, we use metrics like accuracy, precision, recall, and F1-score. For regression problems, we use metrics like mean squared error (MSE), root mean squared error (RMSE), and $R^2$ score.

## Classification Metrics

When predicting distinct categories, almost every performance metric is built on top of the **confusion matrix**. It is a simple table that compares what your model predicted against what actually happened.

| | Predicted Positive | Predicted Negative |
|---|---|---|
| **Actual Positive** | True Positive (TP) | False Negative (FN) |
| **Actual Negative** | False Positive (FP) | True Negative (TN) |

In the table,

- **TP (True Positive)**: Correctly predicted positive
- **FP (False Positive)**: Incorrectly predicted positive (Type I error in statistics)
- **TN (True Negative)**: Correctly predicted negative
- **FN (False Negative)**: Incorrectly predicted negative (Type II error in statistics)

Within scikit-learn, the confusion matrix is computed using the `confusion_matrix` function from the `sklearn.metrics` module. To use this function, we need to provide the true labels and the predicted labels, and the function will return a 2x2 matrix with the values of TP, FP, TN, and FN in the following order: [[TN, FP], [FN, TP]].

```python
from sklearn.metrics import confusion_matrix

tn, fp, fn, tp = confusion_matrix(y_test, y_pred).ravel()
```

From the confusion matrix, we can then compute the following metrics:

### 1. Accuracy

What percentage of predictions were correct?

$$\text{Accuracy} = \frac{TP + TN}{TP + TN + FP + FN}$$

- **When to use**: When you have a perfectly balanced dataset and the cost of false positives and false negatives is roughly equal.
- **The Problem**: Highly misleading on imbalanced data (e.g., predicting a rare disease where blindly guessing "Healthy" yields 99% accuracy but catches 0 sick patients).

To compute accuracy, we can either use the formula above or use the `accuracy_score` function from the `sklearn.metrics` module, as follows:

```python
from sklearn.metrics import accuracy_score

accuracy = accuracy_score(y_test, y_pred)
```

### 2. Precision

Of the examples we predicted as positive, how many were actually positive?

$$\text{Precision} = \frac{TP}{TP + FP}$$

- **When to use**: When false positives are costly. You want to be sure that when you predict positive, it is actually positive.

To compute precision, we can either use the formula above or use the `precision_score` function from the `sklearn.metrics` module, as follows:

```python
from sklearn.metrics import precision_score

precision = precision_score(y_test, y_pred)
```

### 3. Recall (Sensitivity)

Of all the actual positive examples in the dataset, how many did we successfully find?

$$\text{Recall} = \frac{TP}{TP + FN}$$

- **When to use**: When false negatives are costly. You want to be sure that you find all the positive examples in the dataset, even if it means having more false positives.

To compute recall, we can either use the formula above or use the `recall_score` function from the `sklearn.metrics` module, as follows:

```python
from sklearn.metrics import recall_score

recall = recall_score(y_test, y_pred)
```

### 4. F1-Score

The harmonic mean of precision and recall. It provides a single score that balances both concerns.

$$\text{F1} = 2 \times \frac{\text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}}$$

- **When to use**: When you have an imbalanced dataset and need a balanced metric that punishes extreme values in either precision or recall.

To compute F1-score, we can either use the formula above or use the `f1_score` function from the `sklearn.metrics` module, as follows:

```python
from sklearn.metrics import f1_score

f1 = f1_score(y_test, y_pred)
```

## Regression Metrics

If you are predicting continuous numbers (like house prices or temperatures), the confusion matrix won't work. Being off by $1 on a $500,000 house prediction shouldn't be treated as a complete failure (a "False Positive"), whereas being off by $400,000 is a disaster. 

To evaluate regression models, we measure the Residuals (Errors): the distance between the actual data point ($y_i$) and your model's predicted value ($\hat{y}_i$).

### 1. Mean Absolute Error (MAE)

What is the average size of our mistakes?

$$\text{MAE} = \frac{1}{n} \sum_{i=1}^{n} |y_i - \hat{y}_i|$$

- **When to use**: When you want a straightforward, easy-to-explain metric. MAE treats all errors equally, meaning it is robust to outliers.

To compute MAE, we can either use the formula above or use the `mean_absolute_error` function from the `sklearn.metrics` module, as follows:

```python
from sklearn.metrics import mean_absolute_error
mae = mean_absolute_error(y_test, y_pred)
```

### 2. Mean Squared Error (MSE)

What is the average size of our squared mistakes?

$$\text{MSE} = \frac{1}{n} \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$$

- **When to use**: When large errors are unacceptable and you want your model to actively avoid them (squaring the error heavily punishes outliers).
- **The Problem**: Because the errors are squared, the units of MSE are the square of the original units (e.g., "dollars squared"), making it hard to interpret in a real-world context.

To compute MSE, we can either use the formula above or use the `mean_squared_error` function from the `sklearn.metrics` module, as follows:

```python
from sklearn.metrics import mean_squared_error
mse = mean_squared_error(y_test, y_pred)
```

### 3. Root Mean Squared Error (RMSE)

The standard deviation of our errors.

$$\text{RMSE} = \sqrt{\text{MSE}}$$

- **When to use**: When you want a metric that is in the same units as the original data, but still penalizes large errors. This is one of the most popular default metric for regression.

To compute RMSE, we can either use the formula above or use the `mean_squared_error` function from the `sklearn.metrics` module and take the square root, as follows:

```python
rmse = np.sqrt(mean_squared_error(y_test, y_pred))
```

### 4. $R^2$ Score (Coefficient of Determination)

How much of the data's movement does our model actually explain?

$$R^2 = 1 - \frac{\text{SS}_{\text{res}}}{\text{SS}_{\text{tot}}}$$

Here, $\text{SS}_{\text{res}} = \sum_{i=1}^{n} (y_i - \hat{y}_i)^2$ is the sum of squared residuals, and $\text{SS}_{\text{tot}} = \sum_{i=1}^{n} (y_i - \bar{y})^2$ is the total sum of squares, where $\bar{y}$ is the mean of the actual data points.

- **When to use**: When you need to explain your model's accuracy to non-technical audience using a simple scale. A score of 1.0 is perfect prediction, 0.0 is no better than guessing the average, and negative scores mean the model is worse than randomly guessing.

To compute $R^2$ score, we can either use the formula above or use the `r2_score` function from the `sklearn.metrics` module, as follows:

```python
from sklearn.metrics import r2_score
r2 = r2_score(y_test, y_pred)
```