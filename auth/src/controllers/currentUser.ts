import { Router, Request, Response, NextFunction } from 'express';
import { protect } from '../middleware/protect';
const router = Router();

router.get('/api/users/currentuser', protect, (req: Request, res: Response, next: NextFunction) => {
  res.send({ currentUser: req.user });
});

export { router as currentUserRoute };
