import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'forgot.password.page.title': {
    id: 'forgot.password.page.title',
    defaultMessage: 'Esqueci-me da Password | {siteName}',
    description: 'forgot password page title',
  },
  'forgot.password.page.heading': {
    id: 'forgot.password.page.heading',
    defaultMessage: 'Redefinir password',
    description: 'The page heading for the forgot password page.',
  },
  'forgot.password.page.instructions': {
    id: 'forgot.password.page.instructions',
    defaultMessage: 'Por favor introduza o seu endereço de email abaixo e enviaremos um email com instruções sobre como redefinir a sua password.',
    description: 'Instructions message for forgot password page.',
  },
  'forgot.password.page.invalid.email.message': {
    id: 'forgot.password.page.invalid.email.message',
    defaultMessage: 'Introduza um endereço de email válido',
    description: 'Invalid email address message for input field.',
  },
  'forgot.password.page.email.field.label': {
    id: 'forgot.password.page.email.field.label',
    defaultMessage: 'Email',
    description: 'Email field label for the forgot password page.',
  },
  'forgot.password.page.submit.button': {
    id: 'forgot.password.page.submit.button',
    defaultMessage: 'Submeter',
    description: 'Submit button text for the forgot password page.',
  },
  'forgot.password.error.alert.title': {
    id: 'forgot.password.error.alert.title.',
    defaultMessage: 'Não foi possível contactá-lo.',
    description: 'Failed to send password recovery email.',
  },
  'forgot.password.error.message.title': {
    id: 'forgot.password.error.message.title',
    defaultMessage: 'Ocorreu um erro.',
    description: 'Title for message that appears when error occurs for password assistance page',
  },
  'forgot.password.request.in.progress.message': {
    id: 'forgot.password.request.in.progress.message',
    defaultMessage: 'O seu pedido anterior está em processamento, por favor tente novamente dentro de alguns momentos.',
    description: 'Message displayed when previous password reset request is still in progress.',
  },
  'forgot.password.empty.email.field.error': {
    id: 'forgot.password.empty.email.field.error',
    defaultMessage: 'Introduza o seu email',
    description: 'Error message that appears when user tries to submit empty email field',
  },
  'forgot.password.email.help.text': {
    id: 'forgot.password.email.help.text',
    defaultMessage: 'O endereço de email que utilizou para se registar na {platformName}',
    description: 'text help for the email',
  },
  // Confirmation Alert Message
  'confirmation.message.title': {
    id: 'confirmation.message.title',
    defaultMessage: 'Verifique o seu email',
    description: 'Forgot password confirmation message title',
  },
  'confirmation.support.link': {
    id: 'confirmation.support.link',
    defaultMessage: 'contacte o suporte técnico',
    description: 'Technical support link text',
  },
  'need.help.sign.in.text': {
    id: 'need.help.sign.in.text',
    defaultMessage: 'Precisa de ajuda para iniciar sessão?',
    description: 'Sign in help link on forgot password page',
  },
  'additional.help.text': {
    id: 'additional.help.text',
    defaultMessage: 'Para ajuda adicional, contacte o suporte da {platformName} em ',
    description: 'additional help text on forgot password page',
  },
  'sign.in.text': {
    id: 'sign.in.text',
    defaultMessage: 'Iniciar sessão',
    description: 'login page link on password page',
  },
  'extend.field.errors': {
    id: 'extend.field.errors',
    defaultMessage: '{emailError} abaixo.',
    description: 'extends the field error for alert message',
  },
  // Reset password token validation failure
  'invalid.token.heading': {
    id: 'invalid.token.heading',
    defaultMessage: 'Link de redefinição de password inválido',
    description: 'Alert heading when reset password link is invalid',
  },
  'invalid.token.error.message': {
    id: 'invalid.token.error.message',
    defaultMessage: 'Este link de redefinição de password é inválido. Poderá já ter sido utilizado. Introduza o seu email abaixo para receber um novo link.',
    description: 'Alert message when reset password link has expired or is invalid',
  },
  'token.validation.rate.limit.error.heading': {
    id: 'token.validation.rate.limit.error.heading',
    defaultMessage: 'Demasiados pedidos',
    description: 'Too many request at server end point',
  },
  'token.validation.rate.limit.error': {
    id: 'token.validation.rate.limit.error',
    defaultMessage: 'Ocorreu um erro devido a demasiados pedidos. Por favor tente novamente mais tarde.',
    description: 'Error message that appears when server responds with 429 error code',
  },
  'token.validation.internal.sever.error.heading': {
    id: 'token.validation.internal.sever.error.heading',
    defaultMessage: 'Falha na validação do token',
    description: 'Failed to validate reset password token error message.',
  },
  'token.validation.internal.sever.error': {
    id: 'token.validation.internal.sever.error',
    defaultMessage: 'Ocorreu um erro. Tente atualizar a página ou verifique a sua ligação à internet.',
    description: 'Error message that appears when server responds with 500 error code',
  },
  // Error messages
  'internal.server.error': {
    id: 'internal.server.error',
    defaultMessage: 'Ocorreu um erro. Tente atualizar a página ou verifique a sua ligação à internet.',
    description: 'Error message that appears when server responds with 500 error code',
  },
});
export default messages;