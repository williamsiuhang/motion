import { type XAppUsage, type GraphAPIResponse } from '../types/response';
import { user_fields, access_token } from '..';

/** Track API X-App-Usage header */
export let appUsage: XAppUsage;

/** Requests user data using fb graph API */
export const requestUserInfo = async (): Promise<GraphAPIResponse> => {
  const params = new URLSearchParams({
    access_token,
    fields: user_fields.join(','),
  });

  const url = `https://graph.facebook.com/v19.0/me?${params.toString()}`;
  const data = await fetch(url);
  const result: GraphAPIResponse = await data.json();

  setAppUsage(data);
  return result;
};

/**
 * Update Graph API app usage
 * based on response headers ['X-App-Usage']
 */
const setAppUsage = (response: Response): void => {
  const usageHeaders = response.headers.get('X-App-Usage');
  if (usageHeaders) appUsage = JSON.parse(usageHeaders);
};
