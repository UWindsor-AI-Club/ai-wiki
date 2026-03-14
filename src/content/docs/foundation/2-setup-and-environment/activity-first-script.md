---
title: Activity - Your First Machine Learning Script
description: Running a simple "Hello ML" setup script to verify everything works.
sidebar:
  order: 4
---

Let's verify your environment is properly set up by running a simple script that uses all the libraries you installed.

## Create Your First Script

In your project folder, create a new file named `hello_ml.py` and add the following code:

```python
import numpy as np
import pandas as pd
from sklearn.datasets import make_circles
from sklearn.model_selection import train_test_split
import matplotlib.pyplot as plt

print("=" * 50)
print("Welcome to Machine Learning!")
print("=" * 50)

# 1. Test NumPy
print("\nNumPy is working")
numbers = np.array([1, 2, 3, 4, 5])
print(f"  Numbers: {numbers}")
print(f"  Mean: {numbers.mean()}")

# 2. Test pandas
print("\npandas is working")
df = pd.DataFrame({
    'Name': ['Alice', 'Bob', 'Charlie'],
    'Score': [95, 87, 92]
})
print(df)

# 3. Test scikit-learn
print("\nscikit-learn is working")
X, y = make_circles(n_samples=100, noise=0.05, random_state=42)
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)
print(f"  Training set size: {X_train.shape[0]}")
print(f"  Test set size: {X_test.shape[0]}")

# 4. Test matplotlib
print("\nmatplotlib is working")
plt.figure(figsize=(6, 6))
plt.scatter(X[:, 0], X[:, 1], c=y, cmap='bwr', alpha=0.7)
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.title('Synthetic Circles Dataset')
plt.savefig('hello_ml_plot.png')
print("  Plot saved as 'hello_ml_plot.png'")

print("\n" + "=" * 50)
print("All systems go! You're ready to learn ML!")
print("=" * 50)
```

Make sure your virtual environment is activated, then run the script by entering the following command:

```bash
python hello_ml.py
```

## What's Happening Here?
1. **NumPy**: We use `np.array()` to create a standard numeric array, and `.mean()` to compute its mathematical average.
2. **pandas**: We use `pd.DataFrame()` to create a structured data table (similar to an Excel spreadsheet), making it easy to store and display labeled records.
3. **scikit-learn**: We use `make_circles()` from `sklearn.datasets` to generate a synthetic classification dataset of 2D coordinates representing two intersecting circles. We then use `train_test_split()` from `sklearn.model_selection` to randomly shuffle and divide this dataset into a "training" set (80%) and a "test" set (20%).
4. **matplotlib**: We use `plt.scatter()` to plot the synthetic dataset as colored coordinate dots on a chart, and `plt.savefig()` to export the final graph as a PNG image (`hello_ml_plot.png`).

## Expected Output

If you see the following output, your environment is properly configured! You can also check for the `hello_ml_plot.png` file in your project folder.

```
==================================================
Welcome to Machine Learning!
==================================================

NumPy is working
  Numbers: [1 2 3 4 5]
  Mean: 3.0

pandas is working
      Name  Score
0    Alice     95
1      Bob     87
2  Charlie     92

scikit-learn is working
  Training set size: 80
  Test set size: 20

matplotlib is working
  Plot saved as 'hello_ml_plot.png'

==================================================
All systems go! You're ready to learn ML!
==================================================
```