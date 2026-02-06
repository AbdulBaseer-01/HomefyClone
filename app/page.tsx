import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurServices from "@/components/OurServices";
import OurProducts from "@/components/OurProducts";
import OurPortfolio from "@/components/OurPortfolio";
import CustomerReviews from "@/components/CustomerReview";
import { CardStackDemo } from "@/components/About";
import Blogs from "@/components/Blogs";
import Vlogs from "@/components/Vlogs";
import FAQSection from "@/components/FAQSection";
import VisitUs from "@/components/VisitUs";
import Link from "next/link";
import { IconBrandWhatsappFilled } from "@tabler/icons-react";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="w-full min-h-screen dark:bg-black">
      <Navbar />

      <h1 className="sr-only">
        Interior Designers in Hyderabad - Homefy Interio
      </h1>

      <Hero />

      <section className="sr-only">
        <p>
          Homefy Interio is one of the leading interior designers in Hyderabad,
          specializing in modern home interiors, modular kitchens, wardrobes,
          turnkey interior projects, and custom furniture solutions. We design
          premium interiors for apartments, villas, 2BHK and 3BHK homes across
          Hyderabad with a strong focus on quality, functionality, and elegant
          aesthetics.
        </p>

        <p>
          Our experienced interior designers in Hyderabad work closely with
          homeowners to create personalized living spaces that reflect style,
          comfort, and modern Indian lifestyles. From design consultation to
          execution, Homefy Interio delivers end-to-end interior solutions with
          transparent pricing and timely delivery.
        </p>
      </section>

      <WhyChooseUs />
      <section className="sr-only">
        <h2>Interior Design Services in Hyderabad</h2>
        <p>
          We offer complete interior design services in Hyderabad including
          modular kitchen design, bedroom interiors, living room interiors,
          wardrobe solutions, false ceiling design, lighting, and turnkey
          interior execution.
        </p>

        <Link href="/services/interior-design">
          Interior Design Services Hyderabad
        </Link>

        <Link href="/services/modular-kitchen">
          Modular Kitchen Designers in Hyderabad
        </Link>
      </section>

      <OurServices />
      <OurProducts />
      <OurPortfolio />
      <CustomerReviews />
      <CardStackDemo />

      <section className="sr-only">
        <h2>Why Choose Homefy Interio</h2>
        <p>
          Homefy Interio is trusted by homeowners across Hyderabad for delivering
          high-quality interior design solutions. Our projects are known for
          premium materials, space optimization, and long-lasting finishes. We
          maintain strict quality checks and ensure every project meets our
          design and execution standards.
        </p>
      </section>

      <Blogs />
      <Vlogs />
      <FAQSection />
      <VisitUs />
      <Link
          href="https://wa.me/919999999999"
          target="_blank"
          aria-label="Chat on WhatsApp"
          className="fixed bottom-6 right-6 z-50
                     flex items-center justify-center
                     w-14 h-14 rounded-full
                     bg-[#25D366] text-white
                     shadow-lg hover:scale-105
                     transition-transform"
        >
          <IconBrandWhatsappFilled size={26} />
        </Link>

    </main>
  );
}
