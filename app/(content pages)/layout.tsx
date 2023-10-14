import Navigation from "../common/components/Navigation/Navigation";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col-reverse md:flex-row">
      <Navigation />
      <main className="h-full md:p-20 p-4 pt-20 overflow-x-auto">
        {children}
      </main>
    </div>
  );
}
