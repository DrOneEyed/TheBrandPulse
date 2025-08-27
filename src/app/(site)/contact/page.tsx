import Contact from "@/components/Contact/Contact";
import ContactForm from "@/components/Contact/ContactForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - The Brand Pulse",
  description: "Get in touch with our team to discuss your brand marketing needs and start your transformation journey.",
};

const ContactPage = () => {
  return (
    <>
      <Contact />
      <ContactForm />
    </>
  );
};

export default ContactPage;