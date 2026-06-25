# 🏠 GharDekho - Bangalore House Price Prediction

A Machine Learning-powered web application that predicts house prices in Bangalore based on location, square footage, number of bedrooms (BHK), and bathrooms.

## 🚀 Live Demo

**Frontend:** https://pes2ug24cs388.github.io/Bengaluru_House_Price_prediction/

**Backend API:** https://ghardheko.onrender.com

---

## 📌 Features

- Predict Bangalore house prices instantly
- Dynamic location dropdown loaded from backend
- Responsive and modern user interface
- Machine Learning model trained using Bangalore housing dataset
- REST API built with Flask
- Fully deployed online

---

## 🛠️ Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- jQuery

### Backend
- Python
- Flask
- Flask-CORS

### Machine Learning
- NumPy
- Pandas
- Scikit-Learn
- Pickle

### Deployment
- GitHub Pages
- Render

---

## 📂 Project Structure

```text
house-price-prediction
│
├── index.html
├── app.css
├── app.js
│
└── server
    ├── server.py
    ├── util.py
    ├── requirements.txt
    ├── Procfile
    └── artifacts
        ├── columns.json
        └── banglore_home_prices_model.pickle
```

---

## ⚙️ How It Works

1. User enters:
   - Area (Square Feet)
   - Number of Bedrooms (BHK)
   - Number of Bathrooms
   - Location

2. Frontend sends data to Flask API.

3. Flask loads the trained Machine Learning model.

4. The model predicts the house price.

5. The predicted price is displayed on the website.

---

## 🔗 API Endpoints

### Get Available Locations

```http
GET /get_location_names
```

Example Response:

```json
{
  "locations": [
    "1st phase jp nagar",
    "electronic city",
    "whitefield"
  ]
}
```

### Predict House Price

```http
POST /predict_home_price
```

Parameters:

```json
{
  "total_sqft": 1000,
  "bhk": 3,
  "bath": 3,
  "location": "1st phase jp nagar"
}
```

Example Response:

```json
{
  "estimated_price": 85.62
}
```

---

## 🧠 Machine Learning Model

The model was trained using the Bangalore House Price Dataset.

### Data Preprocessing

- Removed outliers
- Handled missing values
- Feature engineering
- One-hot encoding for location features

### Model Used

- Linear Regression

### Evaluation Techniques

- Cross Validation
- Grid Search CV

---

## 📸 Screenshots

### Home Page

<img width="2654" height="1602" alt="image" src="https://github.com/user-attachments/assets/7ae56480-70a5-4113-8e10-a41f6fe57f74" />


### Prediction Result

<img width="2622" height="1602" alt="image" src="https://github.com/user-attachments/assets/8d7bd3c0-fb50-4daf-833a-4e15950db60f" />


---

## 🎯 Future Improvements

- Property Recommendation System
- Interactive Data Visualizations
- Mobile Responsive Enhancements
- Support for Multiple Cities
- AI-powered Real Estate Assistant

---

## 👨‍💻 Author

**Pooja R**

Computer Science Engineering Student

GitHub: [https://github.com/YOUR_USERNAME](https://github.com/PES2UG24CS388)

LinkedIn: [https://linkedin.com/in/YOUR_PROFILE](https://www.linkedin.com/in/pooja-r-a1985a313/)

---

## ⭐ Support

If you found this project useful, please give it a star ⭐ on GitHub.

---

## 📜 License

This project is developed for educational and learning purposes.
