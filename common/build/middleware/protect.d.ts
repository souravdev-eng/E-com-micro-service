import { NextFunction, Request, Response } from 'express';
type UserPayload = {
    id: string;
    email: string;
};
declare global {
    namespace Express {
        interface Request {
            user: UserPayload;
        }
    }
}
export declare const protect: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export {};