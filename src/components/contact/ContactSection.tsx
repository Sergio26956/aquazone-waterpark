import ContactForm from './ContactForm';

export default function ContactSection() {
  return (
    <section className="bg-gray-50 py-10 px-4" id="contacto">
      <h2 className="text-2xl font-bold mb-6 text-center">Contáctanos</h2>
      <div className="flex justify-center">
        <ContactForm />
      </div>
    </section>
  );
}
