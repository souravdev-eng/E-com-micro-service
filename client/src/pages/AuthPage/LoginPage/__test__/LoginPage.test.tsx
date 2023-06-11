import { render, screen, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginPage from '..';
import TestWrapper from './../../../../../tests/TestWrapper';

const typeIntoFrom = async ({ email, password }: { email?: string; password?: string }) => {
  const emailInputElement = (await screen.findByPlaceholderText(
    /Enter your email/i
  )) as HTMLInputElement;
  const passwordInputElement = (await screen.findByPlaceholderText(
    /Enter your password/i
  )) as HTMLInputElement;

  if (email) {
    await waitFor(() =>
      act(async () => {
        await userEvent.type(emailInputElement, email);
      })
    );
  }

  if (password) {
    await waitFor(() =>
      act(async () => {
        await userEvent.type(passwordInputElement, password);
      })
    );
  }

  return {
    emailInputElement,
    passwordInputElement,
  };
};

beforeEach(() => {
  render(
    <TestWrapper>
      <LoginPage />
    </TestWrapper>
  );
});

describe('Login Screen', () => {
  test('Should have every text input filled initial value to be a empty string', () => {
    const emailInputElement = screen.getByRole('textbox') as HTMLInputElement;
    const passwordInputElement = screen.getByPlaceholderText(
      /Enter your password/i
    ) as HTMLInputElement;
    expect(emailInputElement.value).toBe('');
    expect(passwordInputElement.value).toBe('');
  });

  test('Should user type email address', async () => {
    const { emailInputElement } = await typeIntoFrom({ email: 'test@gmail.com' });
    await waitFor(() => expect(emailInputElement.value).toBe('test@gmail.com'));
  });

  test('Should user type password', async () => {
    const { passwordInputElement } = await typeIntoFrom({ password: '123456' });
    await waitFor(() => expect(passwordInputElement.value).toBe('123456'));
  });
});
