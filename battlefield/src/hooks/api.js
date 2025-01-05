import axios from "axios";
import { useState, useEffect } from "react";
const API_URL = import.meta.env.VITE_API_URL;

export const useSettings = () => {
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  console.log("API_URL is", API_URL);

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/settings`);
        const data = await response.data;
        setSettings(data);
        setLoading(false);
      } catch (error) {
        setIsError(true);
        setError(error);
      }
    };

    fetchSettings();
  }, []);

  return { settings, loading, isError, error };
};

export const useAdvancedSettings = () => {
  const [advancedSettings, setAdvancedSettings] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchAdvancedSettings = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/advanced-settings`);
        setAdvancedSettings(response.data);
        setLoading(false);
      } catch (error) {
        setIsError(true);
        setError(error);
      }
    };

    fetchAdvancedSettings();
  }, []);

  return { advancedSettings, loading, isError, error };
};

export const useRules = () => {
  const [rules, setRules] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchRules = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/rules`);
        setRules(response.data);
        setLoading(false);
      } catch (error) {
        setIsError(true);
        setError(error);
      }
    };

    fetchRules();
  }, []);

  return { rules, loading, isError, error };
};
