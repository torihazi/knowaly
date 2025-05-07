// Sample data - in a real app, this would come from a database

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default async function CreateBoxPage() {
  return (
    <>
      <div className="flex flex-col items-center mt-6">
        <Card className="w-[80%] rounded-xl border border-gray-200 bg-gray-50 shadow-sm">
          <CardContent className="flex flex-col items-center justify-center p-12 text-center">
            <form>
              <div className="flex flex-col items-center justify-center p-12 text-center">
                <Input type="text" placeholder="Box Name" />
              </div>
              <Button type="submit">Create</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
