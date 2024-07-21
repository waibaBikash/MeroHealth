'use client'

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from '@/components/ui/input';
import { Control } from "react-hook-form";
import { FormFieldTye } from "./forms/PatientFrom";

interface CustomProps {
  control: Control<any>,
  fieldType: FormFieldTye
}

const CustomFormField = ({control, fieldType, name}: CustomProps) => {
  return (
    <FormField
    control={control}
    name="name"
    render={({ field }) => (
      <FormItem className="flex-1">
        {fieldType !== FormFieldTye.CHECKBOX && label (
          <FormLabel>{label}</FormLabel>
        )}

      </FormItem>
    )}
  />
)}

export default CustomFormField;