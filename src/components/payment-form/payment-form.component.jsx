import { useState } from 'react';
import {
  CardElement,
  useStripe,
  useElements,
  PaymentElement,
} from '@stripe/react-stripe-js';
import { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from './payment-form.styles';
import { useSelector } from 'react-redux';
import { selectCartTotal } from './../../store/cart/cart.selector';
import { selectCurrentUser } from './../../store/user/user.selector';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsprocessingPayment] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsprocessingPayment(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: amount * 100,
        description: 'payment',
        address: {
          city: 'Madurai',
          country: 'India',
          line1: '1/20 new add',
          postal_code: '1234567',
          state: 'tamilnadu',
        }
      }),
    }).then((res) => {
      return res.json();
    });
    console.log(response);
    console.log('nothing');
    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    });
    setIsprocessingPayment(false);
    if (paymentResult.error) {
      console.log('fail');
      alert(paymentResult.error.message);
    } else {
      console.log(
        'paymentResult.paymentIntent.status',
        paymentResult.paymentIntent.status
      );
      if (paymentResult.paymentIntent.status === 'succeeded') {
        console.log('success');
        alert('Payment successful');
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormContainer onSubmit={paymentHandler}>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <PaymentButton
          isLoading={isProcessingPayment}
          buttonType={BUTTON_TYPE_CLASSES.inverted}
        >
          pay now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
