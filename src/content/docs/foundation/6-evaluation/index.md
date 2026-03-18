---
title: Evaluation and Metrics
description: Why evaluation is critical and how to choose the right metrics.
sidebar:
  order: 1
---

Accuracy alone rarely tells the whole story. In fact, relying on it too heavily can trick you into thinking an ill-performing model is actually performing well.

For example, suppose you have a spam email detection model. Out of 100 emails you receive, 95 are regular messages from friends and colleagues, and 5 are spam. If your model is completely useless and just labels every single email as "Not Spam", it will correctly classify the 95 regular emails and miss the 5 spam ones. Your model failed its primary job of catching spam, yet it achieved a 95% accuracy.

To truly evaluate your models, you need a larger, more diverse set of evaluation metrics, which this section will cover. 

## What's in this chapter?

- **Overfitting vs Underfitting** - Learning curves and generalization
- **Performance Metrics** - Accuracy, precision, recall, F1-score, confusion matrix
- **Activity - Evaluating a Model** - Applying what you've learned to evaluate a model

Let's get started!