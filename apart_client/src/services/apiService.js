import { get} from "./httpService";

const BACK_END_URL = 'http://localhost:3001/aparts'

export async function apiGetBackend() {
  const getBackend = await get(BACK_END_URL);
  return getBackend;
}