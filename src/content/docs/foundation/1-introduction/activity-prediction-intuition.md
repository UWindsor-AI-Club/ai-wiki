---
title: Activity - Prediction Intuition
description: A hands-on exploration of how machines learn to make predictions.
sidebar:
  order: 4
---

In this activity, you will step into the shoes of a machine learning model. Your task is to look at a small dataset, identify the underlying patterns, and make predictions based on these patterns.

## The Scenario

Imagine you are trying to predict whether a student will pass or fail a class based on two features:
- **Hours Studied**: The number of hours the student studied per week.
- **Attendance**: The student's attendance percent.

Here is your **training data** (the labeled dataset):

```txt
| Student | Hours Studied | Attendance | Outcome (Label) |
|---------|---------------|------------|-----------------|
| A       | 2             | 60%        | Fail            |
| B       | 8             | 95%        | Pass            |
| C       | 3             | 70%        | Fail            |
| D       | 10            | 90%        | Pass            |
| E       | 7             | 85%        | Pass            |
| F       | 1             | 50%        | Fail            |
| G       | 6             | 80%        | Pass            |
```

## Step 1: Find the Pattern

Take a close look at the data above. Can you identify the common pattern separating the students who passed from those who failed?

*Think about the relationship between `Hours Studied`, `Attendance`, and the final `Outcome` before moving on.*

## Step 2: Make Predictions (New Data)

Now, you have some new, **unseen data** (students whose outcomes we don't know yet). Use the pattern you just found to act as a classification model and predict their outcomes.

```txt
| Student | Hours Studied | Attendance | Your Prediction |
|---------|---------------|------------|-----------------|
| X       | 9             | 92%        | ?               |
| Y       | 4             | 65%        | ?               |
| Z       | 7             | 75%        | ?               |
```

## Step 3: Evaluate Your Performance

In this dataset, students who studied for **6 or more hours** and had an attendance of **80% or higher** passed the class. Those with lower hours and lower attendance failed. As such, in the provided unseen data from Step 2, Student X passed the class while Student Y and Student Z failed. 

You may have obtained a different answer, but that's okay. The point of this activity is to get you thinking about how machines can learn from data. As well, machine learning models do not always learn the correct patterns from their training data for a variety of reasons. The patterns they learn may not generalize to new datasets, too: if we have expanded our dataset to include more students, we may find that the pattern we identified in our previous paragraph is no longer the correct one. 

## Reflection

Congratulations! You just performed **Supervised Learning** (specifically, **Classification**). 

1. You looked at labeled **training data**.
2. You identified the relationships (patterns) between the **features** and the **labels**.
3. You applied that learned pattern to predict the labels of new, **unseen data**.

This intuitive process is exactly what machine learning models do at scale. While you can easily spot the pattern in a table of 7 students, machine learning models are designed to find incredibly complex, hidden patterns across millions of rows and thousands of different features!
