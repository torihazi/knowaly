"use client";

import { Home, Plus, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import { useSearchItems } from "@/features/items/hooks/swr";
import useDebounce from "@/hooks/use-debounce";
import { Item } from "@/lib/items/types";

export function CommandPallette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 1000);
  const { data } = useSearchItems({
    open,
    query: debouncedQuery as string,
  });

  useHotkeys(["meta+h", "ctrl+h"], () => {
    router.push("/home");
  });

  useHotkeys(["meta+k", "ctrl+k"], () => {
    setOpen(true);
  });

  useHotkeys(["meta+ctrl+n"], () => {
    router.push("/items/new");
  });

  const handleSelect = useCallback(
    (path: string) => {
      setOpen(false);
      router.push(path);
    },
    [router]
  );

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen} shouldFilter={false}>
        <CommandInput
          placeholder="Type a command or search..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          {query === "" ? (
            <>
              <CommandGroup heading="Suggestions">
                <CommandItem onSelect={() => handleSelect("/home")}>
                  <Home />
                  <span>Home</span>
                  <CommandShortcut>⌘H</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => handleSelect("/items/new")}>
                  <Plus />
                  <span>New Item</span>
                  <CommandShortcut>⌘+ctrl+N</CommandShortcut>
                </CommandItem>
                <CommandItem onSelect={() => handleSelect("/profile")}>
                  <User />
                  <span>Profile</span>
                  <CommandShortcut>⌘+ctrl+P</CommandShortcut>
                </CommandItem>
              </CommandGroup>

              <CommandSeparator />
              <CommandGroup heading="Items">
                {data?.map((item: Item) => (
                  <CommandItem
                    key={item.id}
                    onSelect={() => handleSelect(`/items/${item.id}`)}
                  >
                    <span>{item.title}</span>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          ) : (
            <CommandGroup heading="Search">
              {data && data.length === 0 ? (
                <CommandEmpty>No results found.</CommandEmpty>
              ) : (
                <>
                  {data?.map((item: Item) => (
                    <CommandItem
                      key={item.id}
                      onSelect={() => handleSelect(`/items/${item.id}`)}
                      value={item.id}
                    >
                      <span className="truncate">{item.title}</span>
                    </CommandItem>
                  ))}
                </>
              )}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
