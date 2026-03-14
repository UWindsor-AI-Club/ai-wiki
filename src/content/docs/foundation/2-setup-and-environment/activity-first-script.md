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
1. **NumPy** - Creating and computing with arrays
2. **pandas** - Creating and displaying a DataFrame
3. **scikit-learn** - Generating synthetic data and splitting it into training and testing sets
4. **matplotlib** - Creating and saving a visualization

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