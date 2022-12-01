import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/useAppRedux';
import { userLoginAction } from '../../../store/actions/user.action';

export const useLoginPageHook = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { error, loading, user } = useAppSelector((state) => state.users);

  const handleLogin = (email: string, password: string) => {
    dispatch(userLoginAction({ email, password }));
  };

  return { handleLogin, error, loading, user, navigate };
};
