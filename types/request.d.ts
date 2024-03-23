/**
 * Type definitions extracted from graph-api reference on March 23, 2024
 * Excludes deprecated fields and fields that return no data
 *
 * For more information,
 * visit https://developers.facebook.com/docs/graph-api/reference/user/
 */

/**
 * Available url param fields for graph API basic profile requests.
 * For demo purposes, this excludes `Edges` fields.
 */
export type GraphAPIUserField =
  /**
   * The app user's App-Scoped User ID.
   * This ID is unique to the app and cannot be used by other apps.
   */
  | 'id'
  /**
   * The age segment for this person expressed as a minimum and maximum age.
   * For example, more than 18, less than 21.
   */
  | 'age_range'
  /** The user's 2D avatar profile picture */
  | 'avatar_2d_profile_picture'
  /**
   * The person's birthday. This is a fixed format string, like MM/DD/YYYY.
   * However, people can control who can see the year they were born separately
   * from the month and day so this string can be only the year (YYYY) or the month + day (MM/DD)
   */
  | 'birthday'
  /**
   * The User's primary email address listed on their profile.
   * This field will not be returned if no valid email address is available.
   */
  | 'email'
  /** Athletes the User likes. */
  | 'favorite_athletes'
  /** Sports teams the User likes. */
  | 'favorite_teams'
  /** The person's first name */
  | 'first_name'
  /**
   * The gender selected by this person, male or female.
   * If the gender is set to a custom value, this value will be based off of the selected pronoun;
   * it will be omitted if the pronoun is neutral.
   */
  | 'gender'
  /** The person's hometown */
  | 'hometown'
  /** A profile based app scoped ID. It is used to query avatars */
  | 'id_for_avatars'
  /** The person's inspirational people */
  | 'inspirational_people'
  /** Install type */
  | 'install_type'
  /** Is the app making the request installed */
  | 'installed'
  /** if the current user is a guest user. should always return false. */
  | 'is_guest_user'
  /** Facebook Pages representing the languages this person knows */
  | 'languages'
  /** The person's last name */
  | 'last_name'
  /**
   * A link to the person's Timeline.
   * The link will only resolve if the person clicking the link is
   * logged into Facebook and is a friend of the person whose profile is being viewed.
   */
  | 'link'
  /**
   * The person's current location as entered by them on their profile.
   * This field requires the user_location permission.
   */
  | 'location'
  /** What the person is interested in meeting for */
  | 'meeting_for'
  /** The person's middle name */
  | 'middle_name'
  /** The person's full name */
  | 'name'
  /** The person's name formatted to correctly handle Chinese, Japanese, or Korean ordering */
  | 'name_format'
  /** The person's payment pricepoints */
  | 'payment_pricepoints'
  /** The profile picture URL of the Messenger user. The URL will expire. */
  | 'profile_pic'
  /** The person's favorite quotes */
  | 'quotes'
  /** The time that the shared login needs to be upgraded to Business Manager by */
  | 'shared_login_upgrade_required_by'
  /** Shortened, locale-aware name for the person */
  | 'short_name'
  /** The person's significant other */
  | 'significant_other'
  /** Sports played by the person */
  | 'sports'
  /** Whether the user can add a Donate Button to their Live Videos */
  | 'supports_donate_button_in_live_video'
  /**
   * A token that is the same across a business's apps.
   * Access to this token requires that the person be logged into your app or have a role on your app.
   * This token will change if the business owning the app changes
   */
  | 'token_for_business'
  /** Video upload limits */
  | 'video_upload_limits';
