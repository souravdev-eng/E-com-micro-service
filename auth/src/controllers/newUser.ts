import jwt from 'jsonwebtoken';
import { Router, Request, Response, NextFunction } from 'express';
import { signUpValidation } from '../validation/newUserValidation';
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
  '/api/users/signup',
  signUpValidation,
  requestValidation,
  async (req: Request, res: Response, next: NextFunction) => {
    const existsUser = await User.findOneBy({ email: req.body.email });

    if (existsUser) {
      return next(new BadRequestError('This email is already in use! Please try another'));
    }

    const user = User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConform: req.body.passwordConform,
    });

    await user.save();

    const token = signInToken(user.id, user.email);
    // store the token in the session
    req.session = {
      jwt: token,
    };

    res.status(201).send({
      id: user.id,
      name: user.name,
      email: user.email,
    });
  }
);

export { router as newUser };
