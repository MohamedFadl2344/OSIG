import SuperTokens from 'supertokens-auth-react';
import EmailPassword from 'supertokens-auth-react/recipe/emailpassword';
import Session from 'supertokens-auth-react/recipe/session';
import EmailVerification from 'supertokens-auth-react/recipe/emailverification';

const API_DOMAIN = import.meta.env.VITE_API_URL || 'http://localhost:5000';
const WEBSITE_DOMAIN = window.location.origin;

export function initSuperTokens() {
    SuperTokens.init({
        appInfo: {
            appName: 'OSIG',
            apiDomain: API_DOMAIN,
            websiteDomain: WEBSITE_DOMAIN,
            apiBasePath: '/api/auth',
            websiteBasePath: '/auth'
        },
        recipeList: [
            EmailPassword.init({
                signInAndUpFeature: {
                    signUpForm: {
                        formFields: [
                            {
                                id: 'email',
                                label: 'Email',
                                placeholder: 'Enter your email'
                            },
                            {
                                id: 'password',
                                label: 'Password',
                                placeholder: 'Enter your password'
                            }
                        ]
                    }
                }
            }),
            EmailVerification.init({
                mode: 'OPTIONAL'
            }),
            Session.init()
        ]
    });
}
