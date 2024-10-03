import Container from "@/components/Container";

export default function TopLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="pt-36 pb-5">
      <Container size="md">{children}</Container>
    </div>
  );
}
