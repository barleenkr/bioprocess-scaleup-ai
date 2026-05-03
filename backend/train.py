import numpy as np
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
import joblib

np.random.seed(42)
n_samples = 5000  

# Generate inputs
reactor_volume = np.random.uniform(5, 500, n_samples)
agitation_speed = np.random.uniform(100, 800, n_samples)
aeration_rate = np.random.uniform(0.5, 5, n_samples)
temperature = np.random.uniform(25, 40, n_samples)
pH = np.random.uniform(5.5, 8, n_samples)
substrate = np.random.uniform(10, 50, n_samples)

kLa = (
    0.4 * agitation_speed +
    25 * aeration_rate +
    0.01 * agitation_speed * aeration_rate +     # interaction
    -0.0002 * (reactor_volume ** 1.3) +          # nonlinear volume effect
    1.5 * temperature +
    -6 * (abs(pH - 7) ** 1.2) +                  # nonlinear pH penalty
    0.02 * substrate +
    np.random.normal(0, 15, n_samples)           # noise
)

# Create dataframe
df = pd.DataFrame({
    "reactor_volume": reactor_volume,
    "agitation_speed": agitation_speed,
    "aeration_rate": aeration_rate,
    "temperature": temperature,
    "pH": pH,
    "substrate_concentration": substrate,
    "kLa": kLa
})

# Features and target
X = df.drop("kLa", axis=1)
y = df["kLa"]

# Train model
model = RandomForestRegressor(
    n_estimators=50,
    max_depth=10,
    random_state=42
)
model.fit(X, y)

# Save model
joblib.dump(model, "trained_model/model.pkl")
print("Improved model trained")