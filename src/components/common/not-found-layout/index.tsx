import { Button, Container } from "@mantine/core";
import { IconError404 } from "@tabler/icons-react";
import Link from "next/link";

export default function NotFoundLayout() {
  return (
    <Container fluid className="flex h-full w-full flex-col items-center justify-center gap-4">
      <IconError404 size={100} color="var(--mantine-color-primary-light-color)" />
      <h2>Page Not-Found</h2>
      <Button component={Link} variant="outline" href="/">
        Return To Home
      </Button>
    </Container>
  );
}
