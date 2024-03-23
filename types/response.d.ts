import { type GraphAPIUserField } from './request.d';

// More details on https://developers.facebook.com/docs/graph-api/reference/user/
type GraphAPIData = Record<GraphAPIUserField, any>;

// More details on https://developers.facebook.com/docs/graph-api/guides/error-handling
interface GraphAPIError {
  error: {
    message: string;
    type: string;
    code: number;
    error_subcode: number;
    error_user_title: string;
    error_user_msg: string;
    fbtrace_id: string;
  };
}

/** Response from Graph API */
export type GraphAPIResponse = GraphAPIData | GraphAPIError;

/** X-App-Usage response header from Graph API */
export interface XAppUsage {
  /** Percentage of calls made  */
  call_count: number;
  /** Percentage of total time */
  total_cputime: number;
  /** Percentage of total CPU time */
  total_time: number;
};
