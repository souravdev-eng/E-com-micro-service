import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from '..';
import Button from '../../../../components/Button';

// const TestLoginPage = () => {
//   return (
//     <MemoryRouter>
//       <LoginPage />
//     </MemoryRouter>
//   );
// };

// test('Should have every text input filled initial value to be a empty string', () => {
//   render(<TestLoginPage />);

//   const emailInputElement = screen.getByRole('textbox') as HTMLInputElement;
//   const passwordInputElement = screen.getByPlaceholderText(
//     /Enter your password/i
//   ) as HTMLInputElement;

//   expect(emailInputElement.value).toBe('');
//   expect(passwordInputElement.value).toBe('');
// });

// test('Should show error message if user type invalid email address', async () => {
//   render(<TestLoginPage />);
//   const handleSubmit = jest.fn();

//   const emailErrorElement = screen.queryAllByText(/Oops! Email is invalid/i);
//   const passwordInputElement = screen.getByPlaceholderText(
//     /Enter your password/i
//   ) as HTMLInputElement;

//   const emailInputElement = screen.getByRole('textbox') as HTMLInputElement;
//   const submitElement = await screen.findByRole('button');
//   expect(emailErrorElement).not.toBeDefined();

//   userEvent.type(emailInputElement, 'testgmail.com');
//   userEvent.type(passwordInputElement, '123456');
//   userEvent.click(submitElement);

//   const emailAgainErrorElement = screen.queryAllByText(/Oops! Email is invalid/i);
//   expect(emailAgainErrorElement).toBeInTheDocument();
// });
