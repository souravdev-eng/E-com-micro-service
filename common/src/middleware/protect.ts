import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { BadRequestError } from '../errors/badRequestError';

type UserPayload = {
  id: string;
  email: string;
  role?: string;
};

declare global {
  namespace Express {
    interface Request {
      user: UserPayload;
    }
  }
}

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.session?.jwt) {
      return next(new BadRequestError('You are not login! Please login first'));
    }

    const payload = jwt.verify(req.session.jwt, process.env.JWT_KEY!) as UserPayload;
    req.user = payload;
  } catch (err) {
    res.send({ currentUser: null });
  }
  next();
};
