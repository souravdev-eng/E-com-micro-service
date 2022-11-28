import { Router, Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { signInValidation } from '../validation/newUserValidation';
import { requestValidation } from '../middleware/requestValidation';
import { BadRequestError } from '../errors/badRequestError';
import { User } from '../entity/User';

const signInToken = (id: string, email: string) => {
  return jwt.sign({ id, email }, process.env.JWT_KEY!, {
    expiresIn: process.env.JWT_EXPIRE_IN,
  });
};

const router = Router();

router.post(
  '/api/users/login',
  signInValidation,
  requestValidation,
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const user = await User.findOneBy({ email });

    if (!user) {
      return next(new BadRequestError('Invalid email or Password. Please try again.'));
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return next(new BadRequestError('Invalid email or Password. Please try again.'));
    }

    const token = signInToken(user.id, user.email);
    //* store the token in the session
    req.session = {
      jwt: token,
    };

    res.status(200).send({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  }
);

export { router as loginUser };
