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
  name: string,
  label?: string,
  placeholder?: string,
  iconSrc?: string,
  iconAlt?: string
  disabled?: boolean,
  dateFormat?: string,
  showTimeSelect?: boolean,
  children?: React.ReactNode,
  renderSkeleton?: (field: any)=> React.ReactNode
}
const RenderInput = () => {
  return(
    <Input 
    type="text"
    placeholder="Arya Waiba"
    />
  )
}

const CustomFormField = ({control, fieldType, name, label}: CustomProps) => {
  return (
    <FormField
    control={control}
    name="name"
    render={({ field }) => (
      <FormItem className="flex-1">
        {fieldType !== FormFieldTye.CHECKBOX && label && (
          <FormLabel>{label}</FormLabel>
        )}

      </FormItem>
    )}
  />
)}

export default CustomFormField;