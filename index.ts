/** Node task runner using Facebook Graph API Explorer v19.0 */

import { type GraphAPIUserField } from './types/request';
import { type GraphAPIError } from './types/response';
import { requestUserInfo } from './utils/api';
import { requestAccessToken } from './utils/prompt';
import { checkRateLimit } from './utils/rateLimiter';

/**
 * Graph API rate limiter percent before stopping [0-100]
 * Stops requests if X-App-Usage call_count > rateLimitStop
 */
export const rateLimitStop = 10;
export const user_fields: GraphAPIUserField[] = ['id', 'name', 'last_name'];
export let access_token: string;

/**
 * Task runner to fetch and console log basic user info
 */
const scheduleRunner = async (): Promise<void> => {
  // Request and process data
  const data = await requestUserInfo();

  if ((data as GraphAPIError).error) {
    console.error((data as GraphAPIError).error);
    process.exit();
  } else {
    console.log(data);
  }

  // Rate limiter
  checkRateLimit();
};

const main = async (): Promise<any> => {
  // Request user access token
  access_token = await requestAccessToken();

  // Start task
  setInterval(scheduleRunner, 2000);
};

main().catch(console.error);
