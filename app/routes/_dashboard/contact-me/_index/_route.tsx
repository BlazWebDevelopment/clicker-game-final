import { ActionFunctionArgs, json } from "@remix-run/node";
import { useActionData, useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { getValidatedFormData, useRemixForm } from "remix-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { sendMessageEmail } from "../../sendMail";
import { ContactForm } from "~/components/ContactForm";

const formSchema = z.object({
  name: z.string().min(3, {
    message: "Error string",
  }),
  lastName: z.string().min(3, {
    message: "Error string",
  }),
  Email: z.string().email({
    message: "Please enter a valid email address",
  }),
  Message: z.string().min(5, {
    message: "Error string",
  }),
});

const resolver = zodResolver(formSchema);

export const action = async ({ request, params }: ActionFunctionArgs) => {
  const { receivedValues, data, errors } = await getValidatedFormData<
    Zod.infer<typeof formSchema>
  >(request, resolver);
  if (errors) {
    return json({ errors, receivedValues });
  }
  const { name, lastName, Email, Message } = data;

  try {
    await sendMessageEmail(name, lastName, Email, Message);
    return json({ messageSent: true });
  } catch (error) {
    console.error(error);
    return json({ messageSent: false, error: "Failed to send email." });
  }
};
function ContactMe() {
  const navigate = useNavigate();
  const actionData = useActionData();
  const messageSent = actionData?.messageSent;

  const { toast } = useToast();
  const { register, reset } = useRemixForm<Zod.infer<typeof formSchema>>({
    resolver,
    defaultValues: {
      name: "",
      lastName: "",
      Email: "",
      Message: "",
    },
  });

  useEffect(() => {
    const now = new Date();
    const description = now.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    if (messageSent) {
      toast({
        title: "Message sent!",
        description: description,
        action: (
          <ToastAction altText="Seccessfully sent a message">Okay</ToastAction>
        ),
      });
      reset();
    }
  }, [messageSent]);

  return (
    <div className="max-sm:pb-20 max-sm:pt-10 lg:p-10">
      <Toaster />
      <ContactForm register={register} />
    </div>
  );
}

export default ContactMe;
