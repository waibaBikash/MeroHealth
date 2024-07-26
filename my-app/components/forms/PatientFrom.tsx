"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
import { UserFormValidation } from "@/lib/validation"
import { useRouter } from "next/navigation";
import { createUser } from "@/lib/actions/patient.actions"

export enum FormFieldTye {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton'
}

const PatientFrom = () => {
  const router = useRouter();
  // 1. Define your form.
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  })
 
  // 2. Define a submit handler.
   async function onSubmit({name, email, phone}: z.infer<typeof UserFormValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setIsLoading(true);
     try {
       const userData = { name, email, phone };
       
       const user = await createUser(userData);

       if(user) router.push(`/patients/${user.$id}/register`)
     } catch (error) {
      console.log(error);
     }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
         <section className="mb-12 space-y-4">
            <h1 className="header">Hi there 👋</h1>
            <p className="text-dark-700">Schedule your first appointment.</p>
         </section>

         <CustomFormField 
         fieldType = {FormFieldTye.INPUT}
          control={form.control}
          name='name'
          label='Full Name'
          placeholder='Arya Waiba'
          iconSrc='/assets/icons/user.svg'
          iconAlt='user'
         />

       <CustomFormField 
         fieldType = {FormFieldTye.INPUT}
          control={form.control}
          name='email'
          label='Email'
          placeholder='aaryanta@gmail.com'
          iconSrc='/assets/icons/email.svg'
          iconAlt='email'
         />

         <CustomFormField 
         fieldType = {FormFieldTye.PHONE_INPUT}
          control={form.control}
          name='phone'
          label='Phone Number'
          placeholder='(555) 123-4567'
         />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  )
}

export default PatientFrom;