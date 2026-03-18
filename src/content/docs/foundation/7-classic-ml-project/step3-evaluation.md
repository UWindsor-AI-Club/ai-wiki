---
title: Step 3 - Evaluation & Submission
description: Thoroughly evaluating your best model and submitting to Kaggle!
sidebar:
  order: 4
---

You've trained your models and found the one that yields the highest validation score. Now it's time to thoroughly evaluate its performance, generate an official prediction file, and submit it to the Kaggle leaderboard!

Create a new section in your notebook for Evaluation & Submission.

## 1. Thorough Evaluation

Accuracy alone doesn't tell the whole story. Use the metrics you learned in the Evaluation module to analyze where your model is succeeding and failing.

For classification tasks, you should generate a confusion matrix and other metrics as needed. For regression tasks, calculate the RMSE and $R^2$ score.

## 2. Check for Overfitting

Plot a learning curve for your best model to diagnose if it is suffering from high bias (underfitting) or high variance (overfitting). Refer back to the [Overfitting vs Underfitting](../6-evaluation/overfitting-vs-underfitting/) guide for the code template to plot learning curves.

Note that for generating learning curves in regression tasks, you should use the RMSE metric instead of accuracy.

## 3. Generate Predictions & Submit!

Kaggle competitions provide a `test.csv` file. This data has *never* been seen by your model, and it does not contain the target labels. You must generate predictions for these rows and upload them to Kaggle.

1. **Load the test data:** `test_df = pd.read_csv('test.csv')`
2. **Clean the test data:** You must apply the exact same cleaning steps (imputation, encoding, scaling) to `test_df` that you applied to your training data!
3. **Generate predictions:** `test_predictions = best_model.predict(clean_test_df)`
4. **Format the submission:** Kaggle expects a very specific CSV format. Check the competition's `sample_submission.csv` to see what it looks like.

```python
# Example for Titanic:
submission = pd.DataFrame({
    'PassengerId': test_df['PassengerId'],
    'Survived': test_predictions
})

# Save to CSV
submission.to_csv('my_submission.csv', index=False)
```

5. Go to the competition webpage on Kaggle and click **Submit Predictions**.
6. Upload your `my_submission.csv` file and see your score on the leaderboard!

## Project Write-Up Checklist

Finally, write a short response (2-3 paragraphs) summarizing your project. You can include this at the very bottom of your notebook.

- What dataset did you choose and why?
- Did you discover any interesting patterns during data exploration?
- What steps did you take to clean and prepare the data?
- Which models did you test, and which one performed the best?
- Looking at your learning curve and evaluation metrics, how well did your model generalize?
- What score did you get on the Kaggle leaderboard?

Congratulations! You have completed your first classic Machine Learning project!
