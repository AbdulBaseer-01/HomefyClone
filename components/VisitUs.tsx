"use client";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"] });

export default function VisitUs() {
 

  return (
    <section
      className="px-8 py-24 border-b border-[#D6D3CC]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        <div>
          <p className="text-sm uppercase tracking-widest text-black/50 mb-6">
            Visit our office
          </p>

          <h2 className={`${playfair.className} text-4xl md:text-6xl font-semibold bg-linear-to-r from-black via-[#886c46] to-black bg-clip-text text-transparent mb-4`}>
            Let’s discuss your
            <br />
            interior requirements
          </h2>

          <p className="text-black/60 max-w-md mb-10">
            Visit our office to understand our design process, material options,
            timelines, and pricing — and speak directly with our team.
          </p>

          <div className="space-y-6 text-black/80">
            <div>
              <p className="text-xs uppercase tracking-wide text-black/40 mb-1">
                Office address
              </p>
              <p className="leading-relaxed">
                Homefy Interio<br />
                Kukatpally, Hyderabad<br />
                Telangana, India
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-wide text-black/40 mb-1">
                Working hours
              </p>
              <p>
                Monday – Saturday<br />
                10:00 AM – 7:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div className="relative h-115 w-full rounded-3xl overflow-hidden border border-white/10">
          <iframe
            title="Homefy Interio Office Location"
            src="https://www.google.com/maps?q=Homefy%20Interio%20Hyderabad&output=embed"
            className="w-full h-full "
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* CLOSING LINE */}
      <div className="mt-20 text-center">
        <p className="text-sm text-black/40">
          Appointments recommended for detailed discussions.
        </p>
      </div>
    </section>
  );
}
