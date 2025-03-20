import { defineMessages } from '@edx/frontend-platform/i18n';

const messages = defineMessages({
  'register.page.title': {
    id: 'register.page.title',
    defaultMessage: 'Registar | {siteName}',
    description: 'register page title',
  },
  // Field labels
  'registration.fullname.label': {
    id: 'registration.fullname.label',
    defaultMessage: 'Nome Completo',
    description: 'Label that appears above fullname field',
  },
  'registration.email.label': {
    id: 'registration.email.label',
    defaultMessage: 'Email',
    description: 'Label that appears above email field on register page',
  },
  'registration.username.label': {
    id: 'registration.username.label',
    defaultMessage: 'Utilizador Público',
    description: 'Label that appears above username field',
  },
  'registration.password.label': {
    id: 'registration.password.label',
    defaultMessage: 'Password',
    description: 'Label that appears above password field',
  },
  'registration.country.label': {
    id: 'registration.country.label',
    defaultMessage: 'País/Região',
    description: 'Placeholder for the country options dropdown.',
  },
  'registration.opt.in.label': {
    id: 'registration.opt.in.label',
    defaultMessage: 'Concordo que {siteName} me possa enviar mensagens de marketing.',
    description: 'Text for opt in option on register page.',
  },
  // Help text
  'help.text.name': {
    id: 'help.text.name',
    defaultMessage: 'Este nome será utilizado em todos os certificados que obtiver.',
    description: 'Help text for fullname field on registration page',
  },
  'help.text.username.1': {
    id: 'help.text.username.1',
    defaultMessage: 'O nome que o irá identificar nos seus cursos.',
    description: 'Part of help text for username field on registration page',
  },
  'help.text.username.2': {
    id: 'help.text.username.2',
    defaultMessage: 'Isto não poderá ser alterado mais tarde.',
    description: 'Part of help text for username field on registration page',
  },
  'help.text.email': {
    id: 'help.text.email',
    defaultMessage: 'Para ativação da conta e atualizações importantes',
    description: 'Help text for email field on registration page',
  },
  // Form buttons
  'create.account.for.free.button': {
    id: 'create.account.for.free.button',
    defaultMessage: 'Criar uma conta',
    description: 'Label text for registration form submission button',
  },
  'create.account.cta.button': {
    id: 'create.account.cta.button',
    defaultMessage: '{label}',
    description: 'Label text for registration form submission button for those users who are landing through redirections',
  },
  // Institution login
  'register.institution.login.page.title': {
    id: 'register.institution.login.page.title',
    defaultMessage: 'Registar com credenciais de instituição/campus',
    description: 'Heading of institution page',
  },
  // Validation messages
  'empty.name.field.error': {
    id: 'empty.name.field.error',
    defaultMessage: 'Introduza o Nome completo',
    description: 'Error message for empty fullname field',
  },
  'empty.email.field.error': {
    id: 'empty.email.field.error',
    defaultMessage: 'Introduza o seu email',
    description: 'Error message for empty email field',
  },
  'empty.username.field.error': {
    id: 'empty.username.field.error',
    defaultMessage: 'Nome de utilizador deverá ter entre 2 a 30 caracteres.',
    description: 'Error message for empty username field',
  },
  'empty.password.field.error': {
    id: 'empty.password.field.error',
    defaultMessage: 'Password não cumpre os critérios',
    description: 'Error message for empty password field',
  },
  'empty.country.field.error': {
    id: 'empty.country.field.error',
    defaultMessage: 'Selecione o seu país de residência',
    description: 'Error message when no country/region is selected',
  },
  'invalid.country.field.error': {
    id: 'invalid.country.field.error',
    defaultMessage: 'O país deve corresponder a uma opção disponível na lista.',
    description: 'Error message when country is invalid',
  },
  'email.do.not.match': {
    id: 'email.do.not.match',
    defaultMessage: 'Os endereços de email não coincidem.',
    description: 'Email not match to confirm email',
  },
  'email.invalid.format.error': {
    id: 'email.invalid.format.error',
    defaultMessage: 'Introduza um endereço de email válido',
    description: 'Validation error for invalid email address',
  },
  'username.validation.message': {
    id: 'username.validation.message',
    defaultMessage: 'O nome de utilizador deve ter entre 2 e 30 caracteres',
    description: 'Error message for empty username field',
  },
  'name.validation.message': {
    id: 'name.validation.message',
    defaultMessage: 'Introduza um nome válido',
    description: 'Validation message that appears when fullname contain URL',
  },
  'password.validation.message': {
    id: 'password.validation.message',
    defaultMessage: 'Os critérios da password não foram cumpridos',
    description: 'Error message for empty or invalid password',
  },
  'username.format.validation.message': {
    id: 'username.format.validation.message',
    defaultMessage: 'Os nomes de utilizador apenas podem conter letras (A-Z, a-z), números (0-9), underscores (_) e hífenes (-). Os nomes de utilizador não podem conter espaços',
    description: 'Validation message that appears when username format is invalid',
  },
  // Error messages
  'registration.request.failure.header': {
    id: 'registration.request.failure.header',
    defaultMessage: 'Não foi possível criar a sua conta.',
    description: 'error message when registration failure.',
  },
  'registration.empty.form.submission.error': {
    id: 'registration.empty.form.submission.error',
    defaultMessage: 'Por favor verifique as suas respostas e tente novamente.',
    description: 'Error message that appears on top of the form when empty form is submitted',
  },
  'registration.request.server.error': {
    id: 'registration.request.server.error',
    defaultMessage: 'Ocorreu um erro. Tente atualizar a página ou verifique a sua ligação à internet.',
    description: 'Error message for internal server error.',
  },
  'registration.rate.limit.error': {
    id: 'registration.rate.limit.error',
    defaultMessage: 'Demasiadas tentativas de registo falhadas. Tente novamente mais tarde.',
    description: 'Error message that appears when an anonymous user has made too many failed registration attempts',
  },
  'registration.tpa.session.expired': {
    id: 'registration.tpa.session.expired',
    defaultMessage: 'O registo utilizando {provider} expirou.',
    description: '',
  },
  'registration.tpa.authentication.failure': {
    id: 'registration.tpa.authentication.failure',
    defaultMessage: 'Lamentamos, mas não está autorizado a aceder a {platform_name} através deste canal. '
        + 'Por favor contacte o seu administrador de aprendizagem ou gestor para aceder a {platform_name}.'
        + '{lineBreak}{lineBreak}Detalhes do erro:{lineBreak}{errorMessage}',
    description: 'Error message third party authentication pipeline fails',
  },
  // Terms of Service and Honor Code
  'terms.of.service.and.honor.code': {
    id: 'terms.of.service.and.honor.code',
    defaultMessage: 'Termos de Serviço e Código de Honra',
    description: 'Text for the hyperlink that redirects user to terms of service and honor code',
  },
  'privacy.policy': {
    id: 'privacy.policy',
    defaultMessage: 'Política de Privacidade',
    description: 'Text for the hyperlink that redirects user to privacy policy',
  },
  'honor.code': {
    id: 'honor.code',
    defaultMessage: 'Código de Honra',
    description: 'Text for the hyperlink that redirects user to the honor code',
  },
  'terms.of.service': {
    id: 'terms.of.service',
    defaultMessage: 'Termos de Serviço',
    description: 'Text for the hyperlink that redirects user to the terms of service',
  },
  // miscellaneous strings
  'registration.username.suggestion.label': {
    id: 'registration.username.suggestion.label',
    defaultMessage: 'Sugestão de Utilizador:',
    description: 'Suggested usernames label text.',
  },
  'did.you.mean.alert.text': {
    id: 'did.you.mean.alert.text',
    defaultMessage: 'Quis dizer:',
    description: 'Did you mean alert suggestion',
  },
});

export default messages;