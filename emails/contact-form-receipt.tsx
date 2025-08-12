// emails/contact-form-receipt.tsx

import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactFormReceiptEmailProps {
  name: string;
}

export const ContactFormReceiptEmail = ({
  name = "Valued User",
}: ContactFormReceiptEmailProps) => (
  <Html>
    <Head />
    <Preview>Message Received | LandHacker.ai</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={content}>
          <Heading style={heading}>Thank You For Your Message</Heading>
          <Text style={paragraph}>
            Hi {name},
          </Text>
          <Text style={paragraph}>
            We've successfully received your inquiry. A member of the LandHacker.ai team will review your message and get back to you shortly. We appreciate your interest in our mission to revolutionize real estate data.
          </Text>
          <Section style={buttonContainer}>
            <Button style={button} href="https://landhacker.ai">
              Explore Our Website
            </Button>
          </Section>
        </Section>
        
        <Hr style={hr} />

        <Section style={footer}>
          <Row>
            <Column align="left">
              <Text style={footerText}>© 2025 LandHacker.ai</Text>
            </Column>
            <Column align="right">
              <Link href="#" style={footerLink}>Unsubscribe</Link>
            </Column>
          </Row>
        </Section>

      </Container>
    </Body>
  </Html>
);

export default ContactFormReceiptEmail;

// --- STYLES ---

const main = {
  backgroundColor: "#ffffff",
  fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
  border: "1px solid #e5e5e5",
  borderRadius: "5px",
  margin: "40px auto",
  maxWidth: "600px",
  backgroundColor: "hsl(220, 30%, 5%)", // --background
};

const content = {
  padding: "40px 40px 20px 40px",
};

const heading = {
  color: "hsl(180, 100%, 50%)", // --primary
  fontSize: "28px",
  fontWeight: "bold",
  textAlign: "center" as const,
};

const paragraph = {
  color: "hsl(210, 40%, 98%)", // --foreground
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const buttonContainer = {
  textAlign: "center" as const,
  marginTop: "30px",
};

const button = {
  backgroundColor: "hsl(180, 100%, 35%)",
  borderRadius: "5px",
  color: "hsl(210, 40%, 98%)",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  padding: "14px 24px",
};

const hr = {
  borderColor: "hsl(220, 30%, 20%)",
  margin: "28px 0",
};

const footer = {
  padding: "0 40px 20px 40px",
};

const footerText = {
  color: "hsl(210, 40%, 60%)",
  fontSize: "12px",
  lineHeight: "24px",
};

const footerLink = {
  color: "hsl(210, 40%, 60%)",
  textDecoration: "underline",
  fontSize: "12px",
};