import { Routes, Route } from "react-router-dom";
import AuthLayout from "./views/_auth/AuthLayout";
import { SignInForm, SignUpForm } from "./views/_auth/forms";
import RootLayout from "./views/_root/RootLayout";
import { ThemeProvider } from "@/components/shared/theme-provider";
import { Homepage, ParallaxPage } from "./views/_root/pages";
import ProtectedLayout from "./views/_protected/ProtectedLayout";
import { LogOut, SocialPage } from "./views/_protected/pages";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SignInForm />} />
          <Route path="/sign-up" element={<SignUpForm />} />
        </Route>

        <Route element={<RootLayout />}>
          <Route index element={<Homepage />} />
          <Route path="/parallax" element={<ParallaxPage />} />
        </Route>

        {/* private routes */}
        <Route element={<ProtectedLayout />}>
          <Route path="/social" element={<SocialPage />} />
          <Route path="/log-out" element={<LogOut />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
