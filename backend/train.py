import pandas as pd
from sklearn.ensemble import RandomForestRegressor
import joblib
import os

# dummy dataset (replace later)
data = pd.DataFrame({
    "volume": [1, 5, 10, 50, 100],
    "agitation": [100, 200, 300, 400, 500],
    "aeration": [1, 2, 3, 4, 5],
    "temperature": [30, 30, 30, 30, 30],
    "pH": [7, 7, 7, 7, 7],
    "substrate": [10, 20, 30, 40, 50],
    "kLa": [20, 50, 80, 120, 160]
})

X = data.drop("kLa", axis=1)
y = data["kLa"]

model = RandomForestRegressor()
model.fit(X, y)

os.makedirs("trained_model", exist_ok=True)
joblib.dump(model, "trained_model/model.pkl")

print("Model trained and saved!")