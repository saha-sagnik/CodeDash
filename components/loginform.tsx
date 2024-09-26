import CardWrapper from "./card-wrapper";
import Header from "./header-auth";

const LoginForm = () => {
    return ( 
        <CardWrapper
        headerLabel="Welcome Back"
        backButtonLabel="Don't have an account?"
        backButtonhref="/auth/register"
        addSocial
        >
            Login Form!
        </CardWrapper>
     );
}
 
export default LoginForm;