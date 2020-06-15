import jwt from 'jsonwebtoken';
import config from 'config';

const expiresIn: number = config.get('session.duration');
const jwtSecret: string = config.get('auth.jwtSecret');

interface IParams {
  login: string;
}

interface IPayloadUser {
  login: string;
}

interface IJWTPayload {
  login: string;
  user: IPayloadUser;
}

interface IJWTObject {
  payload: IJWTPayload;
  token: string;
}

// TODO: extend payload with some data
export const getJsonWebToken = ({ login }: IParams): IJWTObject => {
  /** generate jwt token */
  const payload: IJWTPayload = {
    login,
    user: { login },
  };

  /** generate a signed json web token and return it in the response */
  const token = jwt.sign(payload, jwtSecret, { expiresIn });

  return { payload, token };
};
