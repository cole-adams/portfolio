import Navigation from "../common/components/Navigation/Navigation";
import PageWrapper from "../common/components/PageWrapper";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-full flex-col md:flex-row">
      <PageWrapper className=" flex-grow">{children}</PageWrapper>
      <Navigation />
    </div>
  );
}
