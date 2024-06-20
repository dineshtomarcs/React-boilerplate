'use client'
import { Container, Row, Card, Button, Stack, Accordion } from "react-bootstrap";

export default function Home() {
    return (
        <Container style={{ margin: 16 }}>
            <Stack direction="horizontal" gap={3}>
                <div className="p-2">Home Page</div>
            </Stack>
            <Accordion defaultActiveKey="0" style={{ marginTop: 16 }}>
                <Accordion.Item eventKey="0">
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Container style={{ marginTop: 16 }} >
                <Button variant="primary" size="lg" href="/details">
                    Go to details page &rarr;
                </Button>
            </Container>
        </Container>
    );
}
