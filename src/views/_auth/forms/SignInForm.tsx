import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { SigninValidation } from "@/lib/validation";
import formLogo from "@/assets/_auth_img/form_logo.jpg";
import Loader from "@/components/shared/Loader";
import authService from "@/services/auth.service";
import { SignInModel } from "@/types";

const SignInForm = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const isLoadingHandler = () => {
    setIsLoading(true);
  };

  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof SigninValidation>) {
    const x: SignInModel = values;
    authService
      .signIn(x)
      .then((res) => {
        localStorage.setItem("currentUser", JSON.stringify(res.data));
        window.alert("登入成功，您將被導向至首頁...");
        navigate("/");
      })
      .catch((e) => {
        setErrorMsg(e.response.data);
      });
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 sm:px-0 px-2 flex justify-center items-center flex-col">
        <Link to="/">
          <img src={formLogo} alt="formLogo" />
        </Link>
        <h2 className="text-2xl font-bold tracking-tighter md:text-3xl pt-2 sm:pt-4">
          歡迎使用Mumu
        </h2>
        <p className="text-sm font-medium md:text-base mt-2">
          Empower Your Dreams, Build Our Future
        </p>
        {errorMsg && (
          <Alert variant="destructive" className="my-2">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>錯誤</AlertTitle>
            <AlertDescription>{errorMsg}</AlertDescription>
          </Alert>
        )}
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-4"
        >
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>帳號</FormLabel>
                <FormControl>
                  <Input type="text" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>密碼</FormLabel>
                <FormControl>
                  <Input type="password" className="shad-input" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="shad-button_primary"
            onClick={isLoadingHandler}
          >
            {isLoading ? (
              <div className="flex justify-center items-center gap-2">
                <Loader />
                Loading...
              </div>
            ) : (
              "Sign in"
            )}
          </Button>
          <p className="text-lg">
            還沒有註冊Mumu帳號?
            <Link to="/sign-up" className="">
              <Button className="ml-4 font-semibold">註冊</Button>
            </Link>
          </p>
          <p className="text-lg">
            忘記密碼?
            <Link to="/">
              <Button className="ml-4 font-semibold">找回密碼</Button>
            </Link>
          </p>
        </form>
        <div className="flex justify-between w-full mt-4">
          <Button className="flex-1 mr-2">Google</Button>
          <Button className="flex-1 mx-2">Facebook</Button>
          <Button className="flex-1 ml-2">X</Button>
        </div>
      </div>
    </Form>
  );
};

export default SignInForm;
