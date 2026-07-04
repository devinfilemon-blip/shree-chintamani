import { annualReports, videos } from "../data/homeContent";
import AnimateOnScroll from "./AnimateOnScroll";

export default function AnnualReportVideos() {
  return (
    <section id="videos" className="py-14 lg:py-20 bg-orange-pale">
      <div className="max-w-[1320px] mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <AnimateOnScroll>
              <h2 className="section-heading mb-8">Annual Report</h2>
            </AnimateOnScroll>
            <div className="space-y-5">
              {annualReports.map((report, i) => (
                <AnimateOnScroll key={report.year} delay={i * 80} animation="fade-left">
                  <a href="/contact" className="block group">
                    <div className="relative aspect-[16/10] max-h-[260px] overflow-hidden shadow-md">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                        style={{ backgroundImage: `url(${report.image})` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy/85 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <p className="text-3xl font-bold text-white uppercase tracking-widest">SCLE</p>
                        <p className="text-white/80 text-xs mt-2 max-w-sm leading-relaxed">{report.tagline}</p>
                      </div>
                    </div>
                    <p className="text-sm font-bold text-navy mt-3 group-hover:text-orange transition-colors">
                      {report.label}
                    </p>
                  </a>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          <div className="relative lg:pl-4">
            <div className="absolute left-0 top-14 bottom-0 w-[3px] bg-orange hidden lg:block" />
            <AnimateOnScroll animation="fade-right">
              <h2 className="section-heading mb-8">Videos</h2>
            </AnimateOnScroll>
            <ul className="space-y-5 lg:pl-6">
              {videos.map((video, i) => (
                <AnimateOnScroll key={video.title} delay={i * 50} animation="fade-right">
                  <button type="button" className="flex items-center gap-4 w-full text-left group">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 shadow">
                      <div
                        className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500"
                        style={{ backgroundImage: `url(${video.thumbnail})` }}
                      />
                      <div className="absolute inset-0 bg-navy/40 flex items-center justify-center">
                        <span className="w-7 h-7 rounded-full bg-white text-orange text-xs flex items-center justify-center">▶</span>
                      </div>
                    </div>
                    <span className="text-[13px] font-semibold text-navy group-hover:text-orange transition-colors leading-snug">
                      {video.title}
                    </span>
                  </button>
                </AnimateOnScroll>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
