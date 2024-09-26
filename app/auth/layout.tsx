const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    return <div
    className="h-full flex items-center justify-center bg-gradient-to-l from-gray-900 to-indigo-600 p-8r"
    >{children}
    </div>;
  };
  
  export default AuthLayout;
  