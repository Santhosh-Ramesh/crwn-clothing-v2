import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../../utils/firebase/firebase.utils';
import SignUpForm from '../../sign-up-form/sign-up-form.component';
import Button from '../../button/button.component';
import SignInForm from './../../sign-in-form/sign-in-form.component';
import { AuthenticationContainer } from './authentication.styles';
const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
