import { Breadcrumb } from "@/components/refine-ui/layout/breadcrumb";
import { CreateView } from "@/components/refine-ui/views/create-view";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useBack } from "@refinedev/core";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { classSchema } from "@/lib/schema";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const ClassesCreate = () => {
  const back = useBack();
  const form = useForm({
    resolver: zodResolver(classSchema),
    refineCoreProps: {
      resource: "classes",
      action: "create",
    },
    defaultValues: {
      status: "active",
    },
  });
  const {
    handleSubmit,
    formState: { isSubmitting, control },
  } = form;

  // Teachers array
const teachers = [
  {
    id: 1,
    name: "Alice Johnson",
  },
  {
    id: 2,
    name: "Bob Smith",
  },
];

// Subjects array
const subjects = [
  {
    id: 101,
    name: "Computer Science",
    code: "CS",
  },
  {
    id: 102,
    name: "Mathematics",
    code: "MATH",
  },
];

  function onSubmit(values: z.infer<typeof classSchema>) {
    try {
      console.log(values);
    } catch (error) {
      console.log("Error creating new class", error);
    }
  }

  return (
    <CreateView className="class-view">
      <Breadcrumb />
      <h1 className="page-title">Create a Class</h1>
      <div className="intro-row">
        <p>Provide the required information below to add a class</p>
        <Button onClick={back}>Go Back</Button>
      </div>
      <Separator />
      <div className="my-4 flex items-center">
        <Card className="class-form-card">
          <CardHeader className="relative z-10">
            <CardTitle className="text-2xl pb-0 font-bold">
              Fill out the form
            </CardTitle>
          </CardHeader>
          <Separator />
          <CardContent className="mt-7">
            <Form {...form}>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div className="space-y-3">
                  <Label>
                    Banner Image <span className="text-orange-600">*</span>
                  </Label>
                  <p>Upload image widget</p>
                </div>
                <FormField
                  control={control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Class Name <span className="text-orange-600">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Introduction to Biology - Section A"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    control={control}
                    name="subjectId"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Subject <span className="text-orange-600">*</span>
                        </FormLabel>
                        
                          <Select
                            onValueChange={(value) =>
                              field.onChange(Number(value))
                            }
                            value={field?.value?.toString()}>
                                <FormControl>
                                  <SelectTrigger className="w-full">
                                    <SelectValue placeholder="select a subject"/>
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  {subjects.map((sub)=>(<SelectItem value={sub.id.toString()} key={sub.id}>
                                    {sub.name}({sub.code})
                                  </SelectItem>))}
                                </SelectContent>
                          </Select>
                       
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <Button type="submit">Submit</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </CreateView>
  );
};

export default ClassesCreate;
