import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { CreateBoxForm } from "@/features/box/create-box-form";

export default async function CreateBoxPage() {
  return (
    <>
      <div className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
        Create New Box
      </div>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
        Create a new box to organize your knowledge
      </p>
      <Card className="mt-6">
        <CardHeader className="space-y-2">
          <CardTitle>Box Details</CardTitle>
          <CardDescription>
            Enter the information for your new knowledge box
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CreateBoxForm />
        </CardContent>
      </Card>
    </>
  );
}
