"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form";
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"

export enum FormFieldTye {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton'
}
 
 
const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
})
 
const PatientFrom =()=> {
  // 1. Define your form.
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
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
          placeholder='(+61) 123-4567'
         />

        <SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
      </form>
    </Form>
  )
}
export default PatientFrom;