import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div className="rounded-tl-md rounded-bl-md overflow-hidden border-y-2 border-l-2 shadow-2xl">
          <Image
            src="/icons/auth-image.png"
            alt="auth-image"
            width={600}
            height={600}
          />
        </div>
      </div>
    </main>
  );
}
