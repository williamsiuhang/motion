import { rateLimitStop } from '..';
import { appUsage } from './api';

/**
 * Stops task runner if Graph API rate limit has exceeded `rateLimitStop`
 */
export const checkRateLimit = (): void => {
  if (appUsage && appUsage.call_count > rateLimitStop) {
    console.log(
      `Rate limit has exceeded ${rateLimitStop}% (${appUsage.call_count})`,
    );

    process.exit();
  }
};
