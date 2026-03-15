---
title: Visualizing Data
description: Using matplotlib to create histograms, scatter plots, and other visualizations.
sidebar:
  order: 3
---

Visualization is crucial for understanding your data before training models. As such, we will use `matplotlib` to create various visualizations in this section.

## What is `matplotlib`?

`matplotlib` is a Python plotting library that can be used to create a wide range of visualizations. It is a popular choice for data visualization due to its flexibility and ease of use.

### Importing `matplotlib`

In your Python script, you typically import `matplotlib` with the alias `plt`:

```python
import matplotlib.pyplot as plt
```

## Creating Visualizations

`matplotlib` can be used to create a wide range of visualizations, such as histograms, scatter plots, and line plots. Using the `circles` dataset as an example, we can create a scatter plot to visualize the data:

```python
from sklearn.datasets import make_circles

# Generate circles dataset
X, y = make_circles(n_samples=100, noise=0.05, factor=0.5)

# Create scatter plot
plt.scatter(X[:, 0], X[:, 1], c=y, cmap='viridis')
plt.title('Circles Dataset')
plt.xlabel('Feature 1')
plt.ylabel('Feature 2')
plt.show()
```

Here, `plt.scatter()` takes in the x-coordinates and y-coordinates of the data points as the first two arguments. Then, the third argument `c=y` means that the color of the data points will be determined by the values in the `y` (target) array. The `cmap` argument is used to specify the colormap to use for the data points.

:::tip

The name `X` and `y` is not arbitrary: `y` represents the target feature and `X` represents the remaining feature in the dataset. We will discuss this in more details in the next chapter.

:::

Likewise, we can create a histogram to visualize the distribution of a single feature:

```python
plt.hist(X[:, 0]) # X's first column is used for hist()
plt.title('Feature 1 Distribution')
plt.xlabel('Feature 1')
plt.ylabel('Frequency')
plt.show()
```

Here, `plt.hist()` takes in the values of a single feature as the first argument. Then, the `title`, `xlabel`, and `ylabel` arguments are used to specify the title, x-axis label, and y-axis label of the histogram, respectively. The `show()` function is used to display the histogram.

Notably, `pandas` has some of `matplotlib.pyplot`'s features built into DataFrames and Series. For example, we can create the previous visualizations directly with the `df` objects:

```python
# Create DataFrame
df = pd.DataFrame(X, columns=['feature1', 'feature2'])

# Create histogram
df.plot(kind='hist', y='feature1', title='Feature 1 Distribution')

# Create scatter plot
df.plot(kind='scatter', x='feature1', y='feature2', title='Circles Dataset')
```

However, for more complex visualizations, `matplotlib` is still recommended.

## Creating Subplots

`matplotlib` can also be used to create multiple sub-visualizations (subplots) within one large visualization. This is commonly used in data exploration to compare distributions or view multiple relationships side by side.

We can create a subplot grid using the `plt.subplots()` function, which gives us a Figure object and an array of Axes objects to plot on.

```python
# Create a 1x2 grid of subplots (1 row, 2 columns)
fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(10, 4))

# Plot on the first subplot
ax1.hist(X[:, 0], color='blue', alpha=0.7)
ax1.set_title('Feature 1 Distribution')
ax1.set_xlabel('Feature 1')
ax1.set_ylabel('Frequency')

# Plot on the second subplot
ax2.hist(X[:, 1], color='red', alpha=0.7)
ax2.set_title('Feature 2 Distribution')
ax2.set_xlabel('Feature 2')

# Automatically adjust spacing between subplots
plt.tight_layout()
plt.show()
```

### Understanding Subplots

- **`fig` (Figure)**: This is the overall window or page that everything is drawn on. When you set `figsize=(10, 4)`, you are setting the dimensions of this entire window. (10, 4) means that the figure will be 10 units wide and 4 units tall.
- **`ax` (Axes)**: These are the individual plots or boxes themselves. The `plt.subplots(1, 2)` command created 1 row with 2 columns worth of Axes. We unpacked them into `ax1` and `ax2`, which lets us draw specifically on the left or the right side. If we want to create larger number of subplots, such as a 2x2 grid, we can use `plt.subplots(2, 2)` and unpack them into `ax1`, `ax2`, `ax3`, and `ax4`.
- **`plt.tight_layout()`**: This is a very useful helper function that automatically adjusts the subplots so their titles and labels don't overlap inside the Figure.

## Saving Figures

When using `plt.show()`, the figure will be displayed in a pop-up window. However, we can also save the figure to a file using the `plt.savefig()` function:

```python
plt.savefig('filename.png', dpi=300, bbox_inches='tight')
```

Here, a few optional parameters are used:

- **`dpi`**: resolution of the saved figure. Higher resolution means better quality, but also means that the file size will be higher.
- **`bbox_inches`**: This parameter is used to control the amount of whitespace around the saved figure. Setting it to 'tight' removes any extra whitespace around the figure.
