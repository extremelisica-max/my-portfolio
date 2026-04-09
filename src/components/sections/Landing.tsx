import { landing } from "@/data/content";

export default function Landing() {
  return (
    <section
      id="landing"
      aria-label="Главная страница портфолио Александра Карсунцева"
      data-testid="section-landing"
      data-ai-action="view-portfolio-home"
      className="section bg-cream pt-6 pb-6 flex flex-col gap-2 xs:h-screen"
    >
        {/* Container 1+2: Profile + Tags — combined card */}
        <div className="rounded-3xl border border-near-black/10 bg-white">
          <div className="p-6 flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full bg-near-black flex items-center justify-center flex-shrink-0"
              aria-hidden="true"
            >
              <span className="text-sm font-semibold text-cream leading-none">АК</span>
            </div>
            <div className="flex flex-col gap-0">
              <p className="text-base font-semibold text-near-black leading-tight">
                Александр Карсунцев
              </p>
              <span className="text-sm text-near-black/50">Продуктовый дизайнер</span>
            </div>
            <a
              href={landing.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="tag bg-near-black text-cream ml-auto"
              data-testid="cta-telegram"
              data-ai-action="open-telegram"
            >
              Telegram ↗
            </a>
          </div>
          <hr className="border-near-black/10 mx-6" aria-hidden="true" />
          <ul className="p-6 flex flex-wrap gap-2" aria-label="Специализация">
            {landing.tags.map((tag) => (
              <li key={tag}>
                <span className="tag bg-near-black/5 text-near-black/50">#{tag}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Container 3: Stats — grid of cards */}
        <dl className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-2">
          {landing.stats.map(({ value, label }) => (
            <div key={label} className="rounded-3xl bg-white p-6 flex flex-col justify-between xs:min-h-36">
              <dd className="text-sm text-near-black/50">{label}</dd>
              <dt className="text-6xl font-semibold tabular-nums text-near-black leading-none">
                {value}
              </dt>
            </div>
          ))}
        </dl>

        {/* Container 4: Illustration — fills remaining space */}
        <div className="flex-1 rounded-3xl border border-near-black/10 bg-white flex flex-col overflow-hidden">
          <h1 className="heading-1 text-near-black p-6">{landing.hero}</h1>
          <div
            className="flex-1 flex items-center justify-center overflow-hidden"
            aria-hidden="true"
            style={{
              backgroundColor: '#FAFAFB',
              backgroundImage:
                'linear-gradient(to right, #EDEFF3 1px, transparent 1px), linear-gradient(to bottom, #EDEFF3 1px, transparent 1px)',
              backgroundSize: '9% 11%',
            }}
          >
          <svg
            style={{ width: '100%', maxWidth: '488px', height: 'auto' }}
            viewBox="0 0 475 152"
            fill="none"
            aria-hidden="true"
          >
            <path d="m391.957 146.204-35.176-65.911a8.743 8.743 0 0 1 0-8.281l35.176-65.911c1.663-3.116 5.051-5.083 8.756-5.083h28.012c3.705 0 7.092 1.967 8.756 5.083l35.176 65.911a8.743 8.743 0 0 1 0 8.28l-35.176 65.912c-1.663 3.116-5.051 5.083-8.756 5.083h-28.012c-3.705 0-7.092-1.967-8.756-5.083Z" fill="#fff" stroke="#505967" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="m395.445 149.833 39.724-73.683-39.724-73.683m77.347 73.68h-37.625" stroke="#505967" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 4"/>
            <path d="m316.99 146.204-35.176-65.911a8.743 8.743 0 0 1 0-8.281L316.99 6.101c1.663-3.116 5.051-5.083 8.756-5.083h28.013c3.704 0 7.092 1.967 8.755 5.083l35.176 65.911a8.738 8.738 0 0 1 0 8.28l-35.176 65.912c-1.663 3.116-5.051 5.083-8.755 5.083h-28.013c-3.705 0-7.092-1.967-8.756-5.083Z" fill="#FAFAFB" stroke="#505967" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="m320.473 149.833 39.724-73.683-39.724-73.683m77.346 73.68h-37.625" stroke="#505967" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 4"/>
            <path d="m187.149 146.187-35.176-65.912a8.738 8.738 0 0 1 0-8.28l35.176-65.912C188.811 2.967 192.2 1 195.904 1h82.052c3.705 0 7.092 1.967 8.755 5.083l35.176 65.911a8.738 8.738 0 0 1 0 8.281l-35.176 65.912c-1.662 3.116-5.05 5.083-8.755 5.083h-82.052c-3.704 0-7.092-1.967-8.755-5.083Z" fill="#fff" stroke="#505967" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            <mask id="landing_mask" maskUnits="userSpaceOnUse" x="191" y="76" width="133" height="76" style={{maskType:'alpha'}}>
              <path d="m230.357 76.14-38.243 70.927c-1.078 1.998.37 4.423 2.64 4.423h81.741a13 13 0 0 0 11.52-6.976l34.988-66.916a1 1 0 0 0-.886-1.463l-91.76.004Z" fill="#967E7E"/>
            </mask>
            <g mask="url(#landing_mask)" stroke="#F3F4F6">
              <path transform="scale(-1.02975 -.96934) rotate(-45 -13.924 264.465)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -17.347 272.73)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -20.768 280.988)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -24.192 289.253)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -27.615 297.519)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -31.035 305.775)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -34.457 314.035)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -37.88 322.3)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -41.3 330.556)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -44.722 338.819)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -48.147 347.086)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -51.57 355.35)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -54.987 363.6)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -58.413 371.871)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -61.832 380.125)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -65.253 388.384)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -68.677 396.65)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -72.096 404.906)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -75.518 413.166)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -78.946 421.441)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -82.364 429.693)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -85.786 437.956)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -89.21 446.22)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -92.633 454.485)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -96.05 462.737)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -99.474 471.002)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -102.898 479.267)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -106.32 487.528)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -109.742 495.789)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -113.164 504.05)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -116.585 512.312)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -120.007 520.572)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -123.429 528.833)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -126.85 537.091)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -130.272 545.354)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -133.695 553.618)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -137.116 561.877)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -140.538 570.138)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -143.963 578.408)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -147.381 586.66)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -150.804 594.922)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -154.229 603.19)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -157.65 611.452)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -161.07 619.708)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -164.49 627.964)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -167.916 636.234)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -171.336 644.49)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -174.758 652.753)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -178.18 661.014)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -181.602 669.275)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -185.023 677.534)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -188.445 685.795)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -191.865 694.053)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -195.29 702.321)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -198.716 710.591)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -202.134 718.845)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -205.554 727.101)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -208.981 735.375)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -212.4 743.63)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -215.82 751.884)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -219.246 760.157)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -222.665 768.41)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -226.089 776.676)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -229.512 784.94)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -232.934 793.2)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -236.353 801.457)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -239.777 809.722)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -243.198 817.98)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -246.62 826.241)" d="M0-.5h497.768"/>
              <path transform="scale(-1.02975 -.96934) rotate(-45 -250.043 834.507)" d="M0-.5h497.768"/>
            </g>
            <path d="m190.631 149.822 39.724-73.684-39.724-73.683M322.76 76.134h-92.408" stroke="#505967" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 4"/>
            <path d="m187.149 146.187-35.176-65.912a8.738 8.738 0 0 1 0-8.28l35.176-65.912C188.811 2.967 192.2 1 195.904 1h82.052c3.705 0 7.092 1.967 8.755 5.083l35.176 65.911a8.738 8.738 0 0 1 0 8.281l-35.176 65.912c-1.662 3.116-5.05 5.083-8.755 5.083h-82.052c-3.704 0-7.092-1.967-8.755-5.083Z" stroke="#505967" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M112.184 146.204 77.008 80.293a8.74 8.74 0 0 1 0-8.281l35.176-65.911c1.662-3.116 5.051-5.083 8.755-5.083h28.013c3.704 0 7.092 1.967 8.755 5.083l35.177 65.911a8.743 8.743 0 0 1 0 8.28l-35.177 65.912c-1.662 3.116-5.051 5.083-8.755 5.083h-28.013c-3.704 0-7.092-1.967-8.755-5.083Z" fill="#FAFAFB" stroke="#505967" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M115.666 149.833 155.39 76.15 115.666 2.467m77.346 73.68h-37.625" stroke="#505967" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 4"/>
            <path d="M37.219 146.204 2.043 80.293a8.74 8.74 0 0 1 0-8.281L37.219 6.101c1.663-3.116 5.051-5.083 8.755-5.083h28.013c3.705 0 7.092 1.967 8.756 5.083l35.176 65.911a8.743 8.743 0 0 1 0 8.28l-35.176 65.912c-1.663 3.116-5.051 5.083-8.756 5.083H45.975c-3.705 0-7.093-1.967-8.756-5.083Z" fill="#fff" stroke="#505967" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="m40.707 149.829 39.724-73.683L40.707 2.463m77.346 73.68H80.428" stroke="#505967" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="3 4"/>
          </svg>
          </div>
        </div>


    </section>
  );
}
