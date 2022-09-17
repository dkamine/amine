import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import cacheData from "memory-cache";

const CACHE_DELAY = 5;

const fetchWithCache = async (url: string) => {
  const value = cacheData.get(url);
  if (value) {
    return value;
  } else {
    const res = await axios.get(url);
    const data = res.data;
    cacheData.put(url, data, 1000 * CACHE_DELAY);
    return data;
  }
};

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const {
      ABOVE_API,
      POSOS_LAT,
      POSOS_LNG,
      POSOS_ALT,
      SEARCH_RADIUS,
      SATELLITE_CAT,
      API_KEY,
    } = process.env;

    const url = `${ABOVE_API}/${POSOS_LAT}/${POSOS_LNG}/${POSOS_ALT}/${SEARCH_RADIUS}/${SATELLITE_CAT}/&apiKey=${API_KEY}`;

    // Return the same result within 5 seconds without calling n2yo api
    const data = await fetchWithCache(url);

    res.status(200).json(data);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
};

export default handler;
