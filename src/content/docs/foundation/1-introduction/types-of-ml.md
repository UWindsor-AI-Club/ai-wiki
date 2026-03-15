---
title: Types of Machine Learning
description: Supervised learning, unsupervised learning, and other ML paradigms explained.
sidebar:
  order: 3
---

Machine learning is a constantly evolving field that is extremely complex and nuanced. The following are just some of the ways that the field can be categorized:

## Supervised Learning

In supervised learning, the algorithm learns from a **labelled** dataset. In other words, the data comes with the correct answers (target label), and the model's goal is to learn the relationship between the input data and the target label so it can predict the label for new, unseen data.

Specifically, in supervised learning there are two types of problems: classification and regression.

### Classification

Classification tasks in supervised learning involve predicting a discrete, categorical label. The model assigns the input data into one of several predefined classes. For example, our previous spam detection example can be contextualized into a classification task where we sort emails into "Spam" or "Not Spam". Other examples include identifying whether a tumor is "Malignant" or "Benign", or recognizing whether an image contains a "Cat" or a "Dog".

### Regression

Regression tasks in supervised learning involve predicting a continuous label. Often times, this means that the label is a numerical value, and the model outputs a floating-point number rather than a predefined category. For example, a regression task may be predicting the price of a house based on its square footage, number of bedrooms, and location. Or, it can be forecasting the temperature for tomorrow. In both examples, the output is a numerical value that can take on any value within a range.

## Unsupervised Learning

Unsupervised learning happens when the algorithm needs to learn from unlabeled data. The model's goal is to find hidden patterns or intrinsic structures within the data itself without any explicit target label or "correct answer" to guide it. As such, unsupervised learning is useful when we are trying to find patterns that we didn't know existed.

In unsupervised learning, some common tasks include clustering and dimensionality reduction. In some cases, these tasks can be used as the prerequisite task to preprocess the data, and then use it as input for supervised learning tasks.

### Clustering

Clustering algorithms group similar data points together based on their features. The model automatically discovers distinct groupings within the dataset. For example, this may include segmenting a company's customer base into different groups based on purchasing behavior for targeted marketing, or categorizing news articles by topic without prior labels.

### Dimensionality Reduction

Dimensionality reduction techniques reduce the number of features (variables) in a dataset while retaining as much important information as possible. It simplifies the data, making it easier to visualize and faster to process. For example, this may include compressing high-resolution images or simplifying a dataset with hundreds of columns down to two or three main components (like using PCA) to plot on a 2D graph.

## Other forms of machine learning

As mentioned previously, machine learning is a constantly evolving field with many emerging subfields. The following are just some of the other forms of machine learning that have gained significant traction:

- **Deep Learning**: A specialized subfield utilizing multi-layered artificial neural networks inspired by the human brain. Deep learning is often used for processing complex, unstructured data like high-resolution images, audio, and large text corpora for various tasks.
- **Reinforcement Learning**: A subfield of machine learning where an AI "agent" learns to make sequential decisions by interacting with an environment, maximizing rewards through trial and error. It is highly effective for dynamic tasks like training an AI to master games or robotics.
- **Generative AI**: A subfield of machine learning developing models that are designed to create new, original content (text, images, code) by learning the underlying patterns of training data. This powers tools like ChatGPT, Gemini, and Claude. Although originally derived from deep learning models, it is now complex enough that it can be seen as a field of its own.
