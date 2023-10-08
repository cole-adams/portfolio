import Navigation from "../common/components/Navigation";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col md:flex-row">
      {children}
      <Navigation />
    </div>
  );
}
