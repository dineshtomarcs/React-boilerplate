'use client'
import { Container, Row, Card, Button, Accordion, Stack } from "react-bootstrap";

export default function Detail() {
    return (
        <Container style={{ margin: 16 }}>
            <Stack direction="horizontal" gap={3}>
                <div className="p-2">Detail Page</div>
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
            <Container style={{ marginTop: 16 }}>
                <Row>
                    <Card className="sml-card" style={{ width: '18rem', backgroundColor: 'gray', borderRadius: 4, padding: 16 }}>
                        <Card.Body>
                            <Card.Title>Detail page Card</Card.Title>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </Container>

    );
}
