import { useState } from "react";
import { AlertCircle } from "lucide-react";
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { SignupValidation } from "@/lib/validation";
import formLogo from "@/assets/_auth_img/form_logo.jpg";
import Loader from "@/components/shared/Loader";
import { SignUpModel } from "@/types";
import { SignUp } from "@/services/user.service";

const SignUpForm = () => {
  const navigate = useNavigate();
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const isLoadingHandler = () => {
    setIsLoading(true);
  };

  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      nickname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof SignupValidation>) {
    const { nickname, username, email, password } = values;
    const x: SignUpModel = { nickname, username, email, password };

    SignUp(x);
  }

  return (
    <Form {...form}>
      <div className="sm:w-420 sm:px-0 px-2 flex justify-center items-center flex-col">
        <Link to="/">
          <img src={formLogo} alt="formLogo" />
        </Link>
        <h2 className="text-2xl font-bold tracking-tighter md:text-3xl pt-2 sm:pt-4">
          註冊一個新帳號
        </h2>
        <p className="text-sm font-medium md:text-base">
          輸入詳細資料以建立Mumu帳號
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
          className="flex flex-col gap-5 w-full mt-2"
        >
          <FormField
            control={form.control}
            name="nickname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>暱稱</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="shad-input"
                    autoComplete="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
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
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" className="shad-input" {...field} />
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
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>確認密碼</FormLabel>
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
              "Sign up"
            )}
          </Button>
          <p className="text-lg">
            已經擁有Mumu帳號?
            <Link to="/sign-in" className="">
              <Button className="ml-4 font-semibold">登入</Button>
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

export default SignUpForm;
