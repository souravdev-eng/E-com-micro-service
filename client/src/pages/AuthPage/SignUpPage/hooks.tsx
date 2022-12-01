import { useAppDispatch, useAppSelector } from '../../../hooks/useAppRedux';
import { userSignUpAction } from '../../../store/actions/user.action';
import { useNavigate } from 'react-router-dom';

export const useSignUpPageHook = () => {
  const navigate = useNavigate();
  const { error, loading, user } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();

  interface Props {
    name: string;
    email: string;
    password: string;
    passwordConform: string;
  }

  const handleSignUp = (data: Props) => {
    const { name, email, password, passwordConform } = data;
    dispatch(userSignUpAction({ name, email, password, passwordConform }));
  };

  return { handleSignUp, error, loading, user, navigate };
};
