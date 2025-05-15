import { CreateItemForm } from "@/features/items/create-item-form";

export default async function CreateItemPage() {
  return (
    <>
      <div className="flex flex-col items-start mt-6">
        <CreateItemForm />
      </div>
    </>
  );
}
