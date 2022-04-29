import { useState } from 'react';

export default useApi = (apiFunc) => {
  const [data, SetData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args) => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    if (!response.ok) return setError(true);

    setError(false);
    SetData(response.data);
  };

  return { data, error, loading, request };
};
