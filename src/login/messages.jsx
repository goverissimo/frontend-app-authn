import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'login.page.title': {
    id: 'login.page.title',
    defaultMessage: 'Iniciar Sessão | {siteName}',
    description: 'login page title',
  },
  // Login labels
  'login.user.identity.label': {
    id: 'login.user.identity.label',
    defaultMessage: 'Utilizador ou Email',
    description: 'Label for user identity field to enter either username or email to login',
  },
  'login.password.label': {
    id: 'login.password.label',
    defaultMessage: 'Password',
    description: 'Label for password field',
  },
  'sign.in.button': {
    id: 'sign.in.button',
    defaultMessage: 'Iniciar Sessão',
    description: 'Sign in button label that appears on login page',
  },
  'forgot.password': {
    id: 'forgot.password',
    defaultMessage: 'Esqueci-me da Password',
    description: 'Button text for forgot password',
  },
  'institution.login.button': {
    id: 'institution.login.button',
    defaultMessage: 'Institution/campus credentials',
    description: 'shows institutions list',
  },
  'institution.login.page.title': {
    id: 'institution.login.page.title',
    defaultMessage: 'Credenciais instituição/campus',
    description: 'Heading of institution page',
  },
  'institution.login.page.sub.heading': {
    id: 'institution.login.page.sub.heading',
    defaultMessage: 'Iniciar sessão com credenciais instituição/campus',
    description: 'Heading of the institutions list',
  },
  'non.compliant.password.title': {
    id: 'non.compliant.password.title',
    defaultMessage: 'Alterámos recentemente os requisitos da palavra-passe',
    description: 'A title that appears in bold before error message for non-compliant password',
  },
  'non.compliant.password.message': {
    id: 'non.compliant.password.message',
    defaultMessage: 'A sua palavra-passe atual não cumpre os novos requisitos de segurança. '
                    + 'Enviamos um email para a atualizar. '
                    + 'Obrigado por nos ajudar a manter os seus dados seguros.',
    description: 'Error message for non-compliant password',
  },
  'account.locked.out.message.1': {
    id: 'account.locked.out.message.1',
    defaultMessage: 'Para proteger a sua conta, esta foi temporariamente bloqueada. Tente novamente em 30 minutos.',
    description: 'Part of message for when user account has been locked out after multiple failed login attempts',
  },
  'username.or.email.format.validation.less.chars.message': {
    id: 'username.or.email.format.validation.less.chars.message',
    defaultMessage: 'Nome de utilizador ou email têm de ter pelo menos 2 caracteres.',
    description: 'Validation message that appears when username or email address is less than 2 characters',
  },
  'email.validation.message': {
    id: 'email.validation.message',
    defaultMessage: 'Introduza o seu email',
    description: 'Validation message that appears when email is empty',
  },
  'password.validation.message': {
    id: 'password.validation.message',
    defaultMessage: 'Introduza a sua password',
    description: 'Validation message that appears when password is empty',
  },
  // Account Activation Strings
  'account.activation.success.message.title': {
    id: 'account.activation.success.message.title',
    defaultMessage: 'Sucesso! A sua conta foi ativada.',
    description: 'Account Activation success message title',
  },
  'account.activation.success.message': {
    id: 'account.activation.success.message',
    defaultMessage: 'Vai agora receber emails e alertas relacionados com os cursos em que está inscrito. Inicie sessão para continuar.',
    description: 'Message show to learners when their account has been activated successfully',
  },
  'account.activation.info.message': {
    id: 'account.activation.info.message',
    defaultMessage: 'Esta conta já foi ativada.',
    description: 'Message shown when learner account has already been activated',
  },
  'account.activation.error.message.title': {
    id: 'account.activation.error.message.title',
    defaultMessage: 'Não foi possível ativar a sua conta',
    description: 'Account Activation error message title',
  },
  'account.activation.support.link': {
    id: 'account.activation.support.link',
    defaultMessage: 'contacte o suporte',
    description: 'Link text used in account activation error message to go to learner help center',
  },
  // Email Confirmation Strings
  'account.confirmation.success.message.title': {
    id: 'account.confirmation.success.message.title',
    defaultMessage: 'Sucesso! Confirmou o seu email.',
    description: 'Account verification success message title',
  },
  'account.confirmation.success.message': {
    id: 'account.confirmation.success.message',
    defaultMessage: 'Inicie sessão para continuar.',
    description: 'Message show to learners when their account has been activated successfully',
  },
  'account.confirmation.info.message': {
    id: 'account.confirmation.info.message',
    defaultMessage: 'Este email já foi confirmado.',
    description: 'Message shown when learner account has already been verified',
  },
  'account.confirmation.error.message.title': {
    id: 'account.confirmation.error.message.title',
    defaultMessage: 'Não foi possível confirmar o seu email',
    description: 'Account verification error message title',
  },
  'tpa.account.link': {
    id: 'tpa.account.link',
    defaultMessage: 'Conta {provider}',
    description: 'Link text error message used to go to SSO when staff user try to login through password.',
  },
  'internal.server.error.message': {
    id: 'internal.server.error.message',
    defaultMessage: 'Ocorreu um erro. Tente atualizar a página ou verifique a sua ligação à internet.',
    description: 'Error message that appears when server responds with 500 error code',
  },
  'login.rate.limit.reached.message': {
    id: 'login.rate.limit.reached.message',
    defaultMessage: 'Demasiadas tentativas de início de sessão falhadas. Tente novamente mais tarde.',
    description: 'Error message that appears when an anonymous user has made too many failed login attempts',
  },
  'login.failure.header.title': {
    id: 'login.failure.header.title',
    defaultMessage: 'Não foi possível iniciar a sua sessão.',
    description: 'Login failure header message.',
  },
  'contact.support.link': {
    id: 'contact.support.link',
    defaultMessage: 'contacte o suporte da {platformName}',
    description: 'Link text used in inactive user error message to go to learner help center',
  },
  'login.incorrect.credentials.error': {
    id: 'login.incorrect.credentials.error',
    defaultMessage: 'O nome de utilizador, email ou password que introduziu está incorreto. Por favor tente novamente.',
    description: 'Error message for incorrect email or password',
  },
  'login.form.invalid.error.message': {
    id: 'login.form.invalid.error.message',
    defaultMessage: 'Por favor preencha os campos abaixo.',
    description: 'Login form empty input user message',
  },
  'login.incorrect.credentials.error.reset.link.text': {
    id: 'login.incorrect.credentials.error.reset.link.text',
    defaultMessage: 'Redefina a sua password',
    description: 'Reset password link text for incorrect email or password credentials',
  },
  'login.incorrect.credentials.error.before.account.blocked.text': {
    id: 'login.incorrect.credentials.error.before.account.blocked.text',
    defaultMessage: 'Clique aqui para a redefinir.',
    description: 'Reset password link text for incorrect email or password credentials before blocking account',
  },
  // Vulnerable password change prompt
  'password.security.nudge.title': {
    id: 'password.security.nudge.title',
    defaultMessage: 'Segurança da password',
    description: 'Title for prompt that nudges user to change their vulnerable password',
  },
  'password.security.block.title': {
    id: 'password.security.block.title',
    defaultMessage: 'Alteração de password obrigatória',
    description: 'Title for prompt that asks user to change their vulnerable password',
  },
  'password.security.nudge.body': {
    id: 'password.security.nudge.body',
    defaultMessage: 'O nosso sistema detetou que a sua password é vulnerável. '
                    + 'Recomendamos que a altere para manter a sua conta segura.',
    description: 'Message copy for prompt that nudges user to change their vulnerable password',
  },
  'password.security.block.body': {
    id: 'password.security.block.body',
    defaultMessage: 'O nosso sistema detetou que a sua password é vulnerável. '
                    + 'Altere a sua password para manter a sua conta segura.',
    description: 'Message copy for prompt that asks user to change their vulnerable password',
  },
  'password.security.close.button': {
    id: 'password.security.close.button',
    defaultMessage: 'Fechar',
    description: 'Button to close popup',
  },
  'password.security.redirect.to.reset.password.button': {
    id: 'password.security.redirect.to.reset.password.button',
    defaultMessage: 'Redefinir a sua password',
    description: 'Button to redirect users to Reset Password page',
  },
  'login.tpa.authentication.failure': {
    id: 'login.tpa.authentication.failure',
    defaultMessage: 'Lamentamos, mas não está autorizado a aceder a {platform_name} através deste canal. '
        + 'Por favor contacte o seu administrador de aprendizagem ou gestor para aceder a {platform_name}.'
        + '{lineBreak}{lineBreak}Detalhes do erro:{lineBreak}{errorMessage}',
    description: 'Error message third party authentication pipeline fails',
  },
});

export default messages;