import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../../utils/firebase/firebase.utils';
import SignUpForm from '../../sign-up-form/sign-up-form.component';
import Button from '../../button/button.component';
import SignInForm from './../../sign-in-form/sign-in-form.component';
import { AuthenticationContainer } from './authentication.styles';

import { useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
// import { UserContext } from '../../contexts/user.context';

const Authentication = () => {
  // const { currentuser } = useContext(UserContext);
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (currentuser) {
  //     navigate('/');
  //   }
  // }, [currentuser]);

  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
