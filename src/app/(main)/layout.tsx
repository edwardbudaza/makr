import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      {children}
    </ClerkProvider>
  );
};
export default MainLayout;
