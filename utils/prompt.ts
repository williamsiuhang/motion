import prompt from 'prompt';

const accessTokenSchema = {
  properties: {
    accessToken: {
      message: 'Please enter your FB Graph API access token',
      required: true,
    },
  },
};

/**
 * Prompt user to enter access token
 * @returns {string} user entered access token
 */
export const requestAccessToken = async (): Promise<string> => {
  prompt.start();

  const { accessToken } = await prompt.get(accessTokenSchema);
  return accessToken as string;
};
