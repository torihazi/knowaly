import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      Error
      <Link href="/login">Login</Link>
      <Link href="/home">Home</Link>
    </div>
  );
}
