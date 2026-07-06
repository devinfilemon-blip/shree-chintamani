import { companyInfo } from "../data/companyInfo";

const embedQuery = encodeURIComponent(companyInfo.mapsEmbedQuery);

export default function ContactMap() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden h-full flex flex-col">
      <div className="p-5 lg:p-6 border-b border-white/10">
        <h3 className="text-lg font-bold text-white mb-1">Find Us on Map</h3>
        <p className="text-white/50 text-sm leading-relaxed">
          {companyInfo.address.line1}, {companyInfo.address.line2} — {companyInfo.address.pincode}
        </p>
        <a
          href={companyInfo.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mt-4 text-orange text-sm font-semibold hover:underline"
        >
          Open in Google Maps
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>
      <div className="relative flex-1 min-h-[280px] lg:min-h-[320px]">
        <iframe
          title="SCLE India office location"
          src={`https://maps.google.com/maps?q=${embedQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}
