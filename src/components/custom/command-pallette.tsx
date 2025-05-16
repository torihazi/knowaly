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
export function CommandPallette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useHotkeys(["meta+h", "ctrl+h"], () => {
    router.push("/home");
  });

  useHotkeys(["meta+k", "ctrl+k"], () => {
    setOpen(true);
  });

  useHotkeys(["meta+ctrl+n"], () => {
    router.push("/items/new");
  });

  const handleSelect = useCallback((path: string) => {
    setOpen(false);
    router.push(path);
  }, []);

  return (
    <>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
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
          <CommandGroup heading="Search">
            {/* <CommandItem>
              <Search />
              <span>Search</span>
              <CommandShortcut>⌘+ctrl+S</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <CreditCard />
              <span>Billing</span>
              <CommandShortcut>⌘B</CommandShortcut>
            </CommandItem>
            <CommandItem>
              <Settings />
              <span>Settings</span>
              <CommandShortcut>⌘S</CommandShortcut>
            </CommandItem> */}
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
}
