import React, { useState } from "react";
import { api } from "../services/api_service";
import { PredictionRequest } from "../types";
import LocationSelector from "./PriceDisplay";

const PricePredictionForm: React.FC = () => {
  const [locations, setLocations] = useState<string[]>([]);
  const [formData, setFormData] = useState<PredictionRequest>({
    location: "",
    total_sqft: 1000,
    bhk: 2,
    bath: 2,
  });
  const [predictedPrice, setPredictPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const [locationsLoading, setLocationsLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const fetchedLocations = await api.getLocations();
        setLocations(fetchLocations);
      } catch (err) {
        setError(
          "Failed to load locations. Please make sure the backend is running"
        );
      } finally {
        setLocationLoading(false);
      }
    };

    fetchLocations();
  }, []);

  const handleInputChange = (
    field: keyof PredictionRequest,
    value: string | number
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setError("");
  };
};
