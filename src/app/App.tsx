import { useState, useEffect, useRef } from "react";

import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logoImg from "@/imports/logo.png";
import heroImg from "@/imports/Hero_section.jpeg";
import {
  Phone, MessageCircle, Menu, X, ChevronDown,
  Star, Award, Users, Heart, BookOpen,
  MapPin, Mail, ChevronRight, Quote,
  Globe, ExternalLink, Sparkles, Sun, Zap,
  CheckCircle,
} from "lucide-react";
import RecognitionPage from "./RecognitionPage";
import RecognitionGalleryPage from "./pages/RecognitionGalleryPage";
import DignitariesGalleryPage from "./DignitariesGalleryPage";
import DivineMomentsGalleryPage from "./DivineMomentsGalleryPage";

const PHONE = "9960227894";
const WHATSAPP_LINK = `https://wa.me/91${PHONE}`;
const TRUST_WEBSITE = "https://sarvatmakmaharudra.org";

// ─── Data ─────────────────────────────────────────────────────────────────────

const mahavidyas = [
  { name: "Kali", devanagari: "काली", meaning: "Destroyer of ego and time — the fierce Mother beyond all form", image: "/WhatsApp Unknown 2026-07-27 at 10.03.58 PM/WhatsApp Image 2026-07-27 at 10.00.31 PM (1).jpeg" },
  { name: "Tara", devanagari: "तारा", meaning: "The compassionate saviour — guide through darkness and the unknown", image: "/WhatsApp Unknown 2026-07-27 at 10.03.58 PM/WhatsApp Image 2026-07-27 at 10.00.31 PM.jpeg" },
  { name: "Tripura Sundari", devanagari: "त्रिपुरसुंदरी", meaning: "Beauty of all three worlds — grace, perfection, and cosmic love", image: "/WhatsApp Unknown 2026-07-27 at 10.03.58 PM/WhatsApp Image 2026-07-27 at 10.00.30 PM.jpeg" },
  { name: "Bhuvaneshwari", devanagari: "भुवनेश्वरी", meaning: "Queen of the universe — sovereign of infinite space and creation", image: "/WhatsApp Unknown 2026-07-27 at 10.03.58 PM/WhatsApp Image 2026-07-27 at 10.00.33 PM (2).jpeg" },
  { name: "Bhairavi", devanagari: "भैरवी", meaning: "The fierce one — dissolution, transformation, and inner fire", image: "/WhatsApp Unknown 2026-07-27 at 10.03.58 PM/WhatsApp Image 2026-07-27 at 10.00.32 PM (1).jpeg" },
  { name: "Chinnamasta", devanagari: "छिन्नमस्ता", meaning: "The self-decapitated — radical self-sacrifice and transcendence", image: "/WhatsApp Unknown 2026-07-27 at 10.03.58 PM/WhatsApp Image 2026-07-27 at 10.00.32 PM.jpeg" },
  { name: "Dhumavati", devanagari: "धूमावती", meaning: "The smoky widow — renunciation, solitude, and void-consciousness", image: "/WhatsApp Unknown 2026-07-27 at 10.03.58 PM/WhatsApp Image 2026-07-27 at 10.00.33 PM (1).jpeg" },
  { name: "Bagalamukhi", devanagari: "बगलामुखी", meaning: "The paralyser — victory over adversaries, speech, and falsehood", image: "/WhatsApp Unknown 2026-07-27 at 10.03.58 PM/WhatsApp Image 2026-07-27 at 10.00.30 PM (1).jpeg" },
  { name: "Matangi", devanagari: "मातंगी", meaning: "The outcaste goddess — divine wisdom, music, and eloquent speech", image: "/WhatsApp Unknown 2026-07-27 at 10.03.58 PM/WhatsApp Image 2026-07-27 at 10.00.33 PM.jpeg" },
  { name: "Kamalatmika", devanagari: "कमलात्मिका", meaning: "The lotus goddess — abundance, purity, and spiritual fulfilment", image: "/WhatsApp Unknown 2026-07-27 at 10.03.58 PM/WhatsApp Image 2026-07-27 at 10.00.34 PM.jpeg" },
];

const timeline = [
  { year: "2010", title: "The Divine Call Begins", desc: "Commenced intense Hanuman tapasya under the guidance of revered saints — surrendering completely to Lord Shri Hanuman in a journey of absolute devotion." },
  { year: "2012", title: "Grace of Dasha Mahavidya", desc: "Received the extraordinary divine grace of all ten Mahavidyas — a rare and supreme blessing acknowledged by saints, scholars, and spiritual masters." },
  { year: "2015", title: "Sarvatmak Maharudra Parivar Trust", desc: "Founded the registered charitable trust (Reg. E0009721(PUN)) — extending spiritual mission into education, healthcare, and humanitarian service." },
  { year: "2018", title: "Doctorate in Spiritual Education", desc: "Awarded a Doctorate in Spiritual Education — formal recognition of 14+ years of rigorous sadhana, study, and transformative guidance of thousands." },
  { year: "2020", title: "Consecrated as Mathadhipati", desc: "Accepted the sacred responsibility of Mathadhipati — head of the Math — guiding the spiritual community with wisdom, authority, and compassion." },
  { year: "Present", title: "The Mission Continues", desc: "Guiding devotees across Maharashtra and beyond through astrology, counselling, Hanuman Upasana, Dasha Mahavidya sadhana, and sustained social service." },
];

const services = [
  {
    Icon: Star,
    title: "Astrology Consultation",
    devanagari: "ज्योतिष सल्ला",
    desc: "Vedic Kundali analysis and horoscope reading — precise, compassionate guidance on marriage, career, finance, and health grounded in ancient Jyotish tradition.",
    cta: "Book Astrology Session",
  },
  {
    Icon: Heart,
    title: "Spiritual Counselling",
    devanagari: "आध्यात्मिक समुपदेशन",
    desc: "Restore mental peace, family harmony, and inner clarity through spiritually-rooted personal counselling that addresses the root of suffering, not just its symptoms.",
    cta: "Seek Guidance",
  },
  {
    Icon: Zap,
    title: "Hanuman Upasana",
    devanagari: "हनुमान उपासना",
    desc: "Authentic worship guidance, mantra initiation, and sadhana techniques drawn directly from 14 years of unbroken tapasya at the feet of Lord Shri Hanuman.",
    cta: "Begin Upasana",
  },
  {
    Icon: Sparkles,
    title: "Dasha Mahavidya Sadhana",
    devanagari: "दश महाविद्या साधना",
    desc: "Advanced tantric sadhana guidance under the living blessings of all ten Mahavidyas — offered only to sincere and committed spiritual seekers.",
    cta: "Explore Sadhana",
  },
  {
    Icon: Sun,
    title: "Personal Blessings",
    devanagari: "आशीर्वाद दर्शन",
    desc: "Receive individual Ashirwad — personal blessings, divine protection, and direct guidance in a one-on-one darshan session with Guruvarya.",
    cta: "Request Darshan",
  },
  {
    Icon: BookOpen,
    title: "Pravachan & Discourses",
    devanagari: "प्रवचन व सत्संग",
    desc: "Attend spiritual workshops, satsang gatherings, and public discourses on dharma, devotion, and conscious living — open to all sincere seekers.",
    cta: "View Upcoming Events",
  },
];

const socialWorks = [
  { Icon: BookOpen, title: "Kids Education Support", desc: "Sponsoring schoolbooks, uniforms, and fees for underprivileged children across rural Maharashtra — because every child deserves to learn." },
  { Icon: Heart, title: "Healthcare Support", desc: "Free medical camps, essential medicines, and health check-up drives — bringing medical care to those who cannot afford it." },
  { Icon: Globe, title: "Gaushala & Animal Welfare", desc: "Care, shelter, and protection of cows and abandoned animals — Gau Seva as a sacred act of divine service." },
  { Icon: Award, title: "Blood Donation Club", desc: "Organising regular blood donation camps across communities — saving hundreds of lives through voluntary, conscious giving." },
  { Icon: Users, title: "Women's Safety & Education", desc: "Awareness programs, self-defence workshops, and educational support — empowering women to live with dignity, safety, and agency." },
  { Icon: Star, title: "Humanitarian Relief", desc: "Emergency support during floods, droughts, and crises — food, clothing, and shelter drives when communities need it most." },
];

const impactNumbers = [
  { number: "2K+", label: "Education Support", sub: "शैक्षणिक सहाय्य" },
  { number: "5K+", label: "Health Support", sub: "आरोग्य सेवा" },
  { number: "10K+", label: "Social Support", sub: "सामाजिक सहाय्य" },
  { number: "50+", label: "Volunteers", sub: "स्वयंसेवक" },
];

const testimonials = [
  {
    name: "Suresh Patil",
    location: "Pune",
    text: "Guruvarya's Kundali analysis was remarkably accurate. His guidance helped me navigate a critical career decision with clarity and confidence. The session felt like receiving wisdom from a genuine seer, not merely a practitioner.",
    stars: 5,
  },
  {
    name: "Anjali Deshmukh",
    location: "Nashik",
    text: "After years of family discord, a single counselling session with Guruvarya brought a peace I had not known in a decade. His spiritual wisdom reaches where ordinary words cannot. We are forever grateful.",
    stars: 5,
  },
  {
    name: "Rajendra Kadam",
    location: "Mumbai",
    text: "The Hanuman Upasana guidance I received completely transformed my morning practice. The mantras he shared and the depth of his explanation opened something profound within me. Jai Shri Ram.",
    stars: 5,
  },
];

const faqs = [
  { q: "How do I book a consultation with Guruvarya?", a: "You may book through the 'Book Consultation' button on this page, call 9960227894 directly, or reach out via WhatsApp. We will confirm your appointment within 24 hours." },
  { q: "Are online consultations available?", a: "Yes. Online consultations are offered via phone or video call for devotees unable to visit in person. Both astrology and spiritual counselling sessions are available remotely." },
  { q: "What details are required for Kundali analysis?", a: "Please provide your full name, date of birth, exact time of birth, and place of birth. A copy of your birth certificate or hospital record is helpful if the birth time is uncertain." },
  { q: "How long has Guruvarya been in spiritual practice?", a: "Guruvarya has devoted over 14 years to the intense worship of Lord Shri Hanuman. He received the grace of all ten Dasha Mahavidyas and holds a Doctorate in Spiritual Education." },
  { q: "Is Sarvatmak Maharudra Parivar Trust a registered organisation?", a: "Yes. Sarvatmak Maharudra Parivar Trust is a government-registered charitable trust, Registration Number E0009721(PUN). All activities are conducted with full legal and financial transparency." },
  { q: "How can I contribute to the Trust's social work?", a: "You are welcome to volunteer, donate, or sponsor specific initiatives. Please visit sarvatmakmaharudra.org or contact the trust directly for contribution details and bank information." },
];

const achievements = [
  { Icon: Star, title: "Doctorate in Spiritual Education", desc: "Formal academic recognition of over a decade of rigorous spiritual study, sadhana, and the guidance of thousands of devotees.", year: "2018" },
  { Icon: Award, title: "Mathadhipati", desc: "Consecrated as the highest guiding authority of the Math — entrusted with the spiritual welfare and upliftment of a growing community.", year: "2020" },
  { Icon: Sparkles, title: "Dasha Mahavidya Grace", desc: "Rare and divine blessings of all ten Mahavidyas — recognised and affirmed by revered saints and spiritual leaders.", year: "2012" },
  { Icon: Users, title: "Social Reformer & Spiritual Leader", desc: "Recognised by dignitaries, community leaders, and government representatives for outstanding contribution to social welfare and spiritual guidance.", year: "Ongoing" },
];

// ─── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(window.location.pathname || "/");
  const [pendingScrollTarget, setPendingScrollTarget] = useState<string | null>(null);
  const [navVariant, setNavVariant] = useState<"default" | "hidden" | "floating">("default");
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: "", phone: "", email: "", queryType: "", message: "",
  });

  const heroSectionRef = useRef<HTMLElement | null>(null);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);
  const navVariantRef = useRef<"default" | "hidden" | "floating">("default");

  useEffect(() => {
    const updateNavState = () => {
      const currentY = window.scrollY;
      const heroElement = heroSectionRef.current;
      const heroBottom = heroElement ? heroElement.offsetTop + heroElement.offsetHeight : 0;

      if (currentY + window.innerHeight < heroBottom - 24 || currentY < 24) {
        if (navVariantRef.current !== "default") {
          navVariantRef.current = "default";
          setNavVariant("default");
        }
        lastScrollYRef.current = currentY;
        return;
      }

      const delta = currentY - lastScrollYRef.current;
      if (Math.abs(delta) <= 24) {
        return;
      }

      const nextVariant = delta > 0 ? "hidden" : "floating";
      if (navVariantRef.current !== nextVariant) {
        navVariantRef.current = nextVariant;
        setNavVariant(nextVariant);
      }

      lastScrollYRef.current = currentY;
    };

    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      window.requestAnimationFrame(() => {
        updateNavState();
        tickingRef.current = false;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    const onPop = () => setCurrentPath(window.location.pathname || "/");
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    if (pendingScrollTarget && currentPath === "/") {
      document.getElementById(pendingScrollTarget)?.scrollIntoView({ behavior: "smooth" });
      setPendingScrollTarget(null);
      setIsMenuOpen(false);
    }
  }, [currentPath, pendingScrollTarget]);

  const scrollToTopSmooth = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleNavItem = (item: { label: string; id?: string; path?: string; href?: string }) => {
    if (item.path) {
      if (item.path === "/recognition" && currentPath === "/recognition") {
        scrollToTopSmooth();
        setIsMenuOpen(false);
        return;
      }
      if (item.path === "/" && currentPath === "/") {
        scrollToTopSmooth();
        setIsMenuOpen(false);
        return;
      }
      navigateTo(item.path);
      return;
    }
    if (item.id) {
      if (currentPath !== "/") {
        setPendingScrollTarget(item.id);
        navigateTo("/");
      } else {
        scrollTo(item.id);
      }
    }
  };

  const navigateTo = (path: string) => {
    if (path === window.location.pathname) {
      if (path === "/" || path === "/recognition" || path.startsWith("/recognition/")) {
        scrollToTopSmooth();
      }
      return;
    }
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    setIsMenuOpen(false);
    if (path === "/" || path === "/recognition" || path.startsWith("/recognition/")) {
      scrollToTopSmooth();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsBookingOpen(false);
      setBookingForm({ name: "", phone: "", email: "", queryType: "", message: "" });
    }, 3500);
  };

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "Who I Am", id: "who-i-am" },
    { label: "What I Think", id: "what-i-think" },
    { label: "What I Do", id: "what-i-do" },
    { label: "Recognition", path: "/recognition" },
    { label: "Philosophy", href: "/philosophy.html" },
  ];

  const isRecognitionRoute = currentPath === "/recognition" || currentPath.startsWith("/recognition/");

  return (
    <div className="min-h-screen bg-[#F7A93F] text-[#241C1A]" style={{ fontFamily: "'Poppins', sans-serif" }}>

      {/* ── Announcement Bar ── */}
      <div className="bg-[#5C1119] text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 flex-wrap text-xs sm:text-sm">
          <span className="text-[#C9A227] hidden sm:inline" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>ॐ</span>
          <span className="flex-1 text-center text-white/80">
            <span className="text-[#C9A227]"> • </span>
            14 वर्षांची श्री हनुमान उपासना
            <span className="text-[#C9A227]"> • </span>
            दश महाविद्याग्राही
            <span className="text-[#C9A227]"> • </span>
            सर्वात्मक महारुद्र परिवार ट्रस्ट
            <span className="text-[#C9A227]"> • </span>
          </span>
          <a href={`tel:${PHONE}`} className="flex items-center gap-1.5 text-[#C9A227] font-bold hover:text-white transition-colors whitespace-nowrap" style={{ fontFamily: "'Cinzel', serif" }}>
            <Phone className="w-3 h-3" /> {PHONE}
          </a>
        </div>
      </div>

      {/* ── Sticky Navigation ── */}
      <header
        className={`w-full z-50 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          navVariant === "default"
            ? "sticky top-0 bg-white/97 backdrop-blur-md shadow-sm overflow-visible"
            : navVariant === "floating"
              ? "sticky top-3 bg-transparent overflow-visible"
              : "sticky top-0 pointer-events-none opacity-0 -translate-y-6 overflow-visible"
        }`}
        style={{ height: "80px", borderBottom: navVariant === "default" ? "1px solid rgba(201,162,39,0.2)" : "1px solid transparent" }}
      >
        <nav className={`mx-auto px-4 sm:px-6 h-full flex items-center justify-between gap-4 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] transform-gpu ${
          navVariant === "floating"
            ? "max-w-5xl rounded-full border border-[#C9A227]/15 bg-white/95 shadow-[0_20px_50px_rgba(36,28,26,0.16)] backdrop-blur-xl"
            : "max-w-7xl rounded-none"
        }`}>
          {/* Logo */}
          <button onClick={() => navigateTo("/")} className="flex items-center gap-3 sm:gap-4 md:gap-5 flex-shrink-0 group mr-2 sm:mr-3 lg:mr-6 min-h-[72px]" style={{ overflow: "visible" }}>
            <div className="relative -mt-1 -mb-1 w-[56px] h-[56px] sm:w-[72px] sm:h-[72px] rounded-full overflow-hidden flex-shrink-0 transition-all duration-200 group-hover:scale-105" style={{ border: "3.25px solid #E8622C", boxShadow: "0 0 0 4px rgba(201,162,39,0.24), 0 14px 32px rgba(92,17,25,0.16)" }}>
              <ImageWithFallback src={logoImg} alt="Guruvarya Shri Prakashbhau Shinde" className="w-full h-full object-cover" />
            </div>
            <div className="flex items-center text-left leading-tight min-w-0">
              <div className="flex flex-col">
                <div className="font-black text-[#5C1119] text-[1rem] sm:text-[1.1rem] tracking-[0.16em]" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>गुरुवर्य</div>
                <div className="text-[#241C1A]/75 text-[0.72rem] sm:text-[0.78rem] md:text-[0.84rem] font-semibold uppercase tracking-[0.3em] whitespace-nowrap" style={{ fontFamily: "'Cinzel', serif" }}>Prakashbhau Shinde</div>
              </div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((item) => {
              const isActive = item.path
                ? item.path === "/"
                  ? currentPath === "/"
                  : currentPath.startsWith(item.path)
                : false;
              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-5 py-2.5 text-sm font-semibold text-[#241C1A] rounded-lg transition-all duration-200 hover:text-[#5C1119] hover:bg-[#5C1119]/5 tracking-wide"
                    style={{ fontFamily: "'Cinzel', serif", border: "1px solid transparent" }}
                  >
                    {item.label}
                  </a>
                );
              }
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavItem(item)}
                  className={`px-5 py-2.5 text-sm font-semibold rounded-lg transition-all duration-200 hover:text-[#5C1119] hover:bg-[#5C1119]/5 tracking-wide ${isActive ? "bg-[#5C1119]/6 text-[#5C1119]" : "text-[#241C1A]"}`}
                  style={{ fontFamily: "'Cinzel', serif", border: "1px solid transparent" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(201,162,39,0.3)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = "transparent"; }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button className="lg:hidden p-2 text-[#5C1119]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white px-4 py-4 space-y-1" style={{ borderTop: "1px solid rgba(201,162,39,0.2)" }}>
            {navLinks.map((item) => {
              if (item.href) {
                return (
                  <a key={item.label} href={item.href} className="block w-full text-left px-4 py-3 rounded-xl text-[#241C1A] hover:text-[#5C1119] hover:bg-[#FBF3E7] transition-colors font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
                    {item.label}
                  </a>
                );
              }
              return (
                <button key={item.label} onClick={() => handleNavItem(item)} className="w-full text-left px-4 py-3 rounded-xl text-[#241C1A] hover:text-[#5C1119] hover:bg-[#FBF3E7] transition-colors font-semibold" style={{ fontFamily: "'Cinzel', serif" }}>
                  {item.label}
                </button>
              );
            })}
            <div className="pt-3 border-t space-y-2" style={{ borderColor: "rgba(201,162,39,0.2)" }}>
              <a href={`tel:${PHONE}`} className="flex items-center gap-2 px-4 py-3 text-[#5C1119] font-medium" style={{ fontFamily: "'Cinzel', serif" }}>
                <Phone className="w-4 h-4" /> {PHONE}
              </a>
              <button onClick={() => { setIsBookingOpen(true); setIsMenuOpen(false); }} className="w-full py-3.5 text-white font-bold rounded-xl tracking-wider" style={{ fontFamily: "'Cinzel', serif", background: "linear-gradient(135deg, #E8622C, #C9422C)" }}>
                Book Consultation
              </button>
            </div>
          </div>
        )}
      </header>

      {currentPath === "/recognition/gallery" || currentPath === "/recognition/honours-gallery" ? (
        <RecognitionGalleryPage onNavigateRoute={navigateTo} onOpenBooking={() => setIsBookingOpen(true)} phone={PHONE} activePath={currentPath} />
      ) : currentPath === "/recognition/dignitaries" ? (
        <DignitariesGalleryPage onNavigateRoute={navigateTo} onOpenBooking={() => setIsBookingOpen(true)} phone={PHONE} />
      ) : currentPath === "/recognition/divine-moments" ? (
        <DivineMomentsGalleryPage onNavigateRoute={navigateTo} onOpenBooking={() => setIsBookingOpen(true)} phone={PHONE} />
      ) : isRecognitionRoute ? (
        <RecognitionPage heroRef={heroSectionRef} onNavigateRoute={navigateTo} onOpenBooking={() => setIsBookingOpen(true)} phone={PHONE} activePath={currentPath} />
      ) : null}

      {!isRecognitionRoute && (
        <>
          {/* ── Hero Section ── */}
      <section id="hero" ref={heroSectionRef} className="relative min-h-[100vh] lg:min-h-[110vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <picture>
            <source media="(max-width: 767px)" srcSet="/prakshbhau.jpeg" />
            <img
              src={heroImg}
              alt="Sarvatmak Maharudra Parivar Trust — Guruvarya Shri Prakashbhau Shinde with revered saints and dignitaries"
              className="w-full h-full object-cover"
              style={{ objectPosition: "center 20%" }}
            />
          </picture>
          <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.35) 45%, rgba(0,0,0,0.18) 100%)" }} />
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)" }} />
        </div>

        {/* Decorative Om watermark */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 select-none pointer-events-none hidden xl:block" style={{ fontFamily: "'Noto Serif Devanagari', serif", fontSize: "22rem", lineHeight: 1, color: "rgba(201,162,39,0.05)", fontWeight: 700 }}>
          ॐ
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — Content */}
            <div className="text-white space-y-7">
              <div className="flex items-center gap-3">
                <span className="w-10 h-px bg-[#C9A227]" />
                <span className="w-10 h-px bg-[#C9A227]" />
              </div>

              <div>
                <h1 className="font-bold text-white leading-tight" style={{ fontFamily: "'Noto Serif Devanagari', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
                  गुरुवर्य श्री
                  <br />
                  <span style={{ color: "#E8622C" }}>प्रकाशभाऊ शिंदे</span>
                </h1>
                <p className="text-lg mt-2 font-semibold" style={{ fontFamily: "'Noto Serif Devanagari', serif", color: "#C9A227" }}>
                  (मठाधीपती)
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Spiritual Guru", "Hanuman Upasak", "Astrologer", "Spiritual Counsellor"].map(tag => (
                  <span key={tag} className="px-3.5 py-1 text-white text-xs font-medium tracking-wider rounded-full" style={{ fontFamily: "'Cinzel', serif", border: "1px solid rgba(255,255,255,0.35)" }}>
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-white/82 leading-loose text-base" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
                १४ वर्षांची श्री हनुमान तपस्या आणि दश महाविद्या कृपेने धन्य झालेले,
                आध्यात्मिक मार्गदर्शक, ज्योतिषी आणि सामाजिक कार्यकर्ते।
              </p>

              <div className="flex flex-wrap gap-3 pt-1">
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="flex items-center gap-2 px-7 py-3.5 text-white font-bold rounded-full transition-all duration-200 text-sm tracking-[0.2em] hover:-translate-y-0.5"
                  style={{ fontFamily: "'Cinzel', serif", background: "linear-gradient(135deg, #F6A24E, #D85A24)", boxShadow: "0 18px 45px rgba(232,98,44,0.28)" }}
                >
                  <Phone className="w-4 h-4" /> Book Consultation
                </button>
                <button
                  onClick={() => scrollTo("what-i-do")}
                  className="px-7 py-3.5 font-bold rounded-full transition-all duration-200 text-sm tracking-[0.18em] hover:bg-[#C9A227] hover:text-[#5C1119]"
                  style={{ fontFamily: "'Cinzel', serif", border: "1px solid rgba(201,162,39,0.8)", color: "#F5E2B4", background: "rgba(255,255,255,0.08)" }}
                >
                  Our Services
                </button>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-7 py-3.5 font-semibold rounded-xl transition-all duration-200 text-sm hover:bg-white/10"
                  style={{ fontFamily: "'Cinzel', serif", border: "2px solid rgba(255,255,255,0.25)", color: "white" }}
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
              </div>
            </div>

            {/* Right — Portrait */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(circle, rgba(201,162,39,0.12) 0%, transparent 70%)", transform: "scale(1.3)" }} />
                <div
                  className="w-64 h-64 sm:w-80 sm:h-80 lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden shadow-2xl"
                  style={{ border: "4px solid #C9A227", boxShadow: "0 0 0 8px rgba(201,162,39,0.18), 0 30px 80px rgba(0,0,0,0.5)" }}
                >
                  <ImageWithFallback
                    src={logoImg}
                    alt="Guruvarya Shri Prakashbhau Shinde — Mathadhipati"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-5 py-2 rounded-full shadow-[0_16px_40px_rgba(0,0,0,0.22)] whitespace-nowrap text-xs font-bold tracking-[0.25em]" style={{ fontFamily: "'Cinzel', serif", background: "rgba(18, 10, 6, 0.92)", border: "1px solid rgba(255,214,130,0.2)", color: "#F8E5A4" }}>
                  MATHADHIPATI
                </div>
              </div>
            </div>
          </div>

          {/* Hero stat badges */}
          <div className="mt-12 relative z-10">
            <div className="mx-auto max-w-6xl px-4">
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
                {[
                  { Icon: Star, num: "14+", title: "Years of Tapasya", sub: "हनुमान उपासना" },
                  { Icon: Award, num: "Ph.D.", title: "Spiritual Education", sub: "आध्यात्मिक शिक्षण" },
                  { Icon: BookOpen, num: "Mathadhipati", title: "Math Leadership", sub: "मठाधीपती" },
                  { Icon: Sparkles, num: "10", title: "Dasha Mahavidyas", sub: "दश महाविद्या" },
                ].map((b, i) => (
                  <div key={i} className="flex flex-col items-center gap-2 rounded-3xl p-5" style={{ background: "rgba(46, 7, 12, 0.55)", backdropFilter: "blur(8px)", border: "1px solid rgba(201,162,39,0.75)" }}>
                    <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-white/10 text-[#C9A227]">
                      <b.Icon className="w-6 h-6" />
                    </div>
                    <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Cinzel', serif" }}>{b.num}</div>
                    <div className="text-sm font-semibold text-[#F4E7C6]" style={{ fontFamily: "'Cinzel', serif" }}>{b.title}</div>
                    <div className="text-xs text-[#D9B760]" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>{b.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Hanuman Gayatri Mantra Strip ── */}
      <div className="mantra-strip">
        <div className="mantra-track">
          <span className="mantra-item">ॐ रामदूताय विद्महे कपिरंजाय धीमही तन्नो हनुमान: प्रचोदयात् ।।</span>
          <span className="mantra-item">ॐ आंजनेयाय विद्महे महावलाय धीमही तन्नो मारुति: प्रचोदयात् ।।</span>
          <span className="mantra-item">ॐ अंजनिसुताय विद्महे वायुपुत्राय धीमही तन्नो मारुति: प्रचोदयात् ।।</span>
          <span className="mantra-item">ॐ रामदूताय विद्महे कपिरंजाय धीमही तन्नो हनुमान: प्रचोदयात् ।।</span>
          <span className="mantra-item">ॐ आंजनेयाय विद्महे महावलाय धीमही तन्नो मारुति: प्रचोदयात् ।।</span>
          <span className="mantra-item">ॐ अंजनिसुताय विद्महे वायुपुत्राय धीमही तन्नो मारुति: प्रचोदयात् ।।</span>
        </div>
      </div>

      {/* ──────────────────────────────────────────────── */}
      {/* WHO I AM                                        */}
      {/* ──────────────────────────────────────────────── */}
      <section id="who-i-am" className="py-24" style={{ background: "radial-gradient(circle at 18% 12%, rgba(255, 207, 139, 0.32), transparent 34%), linear-gradient(135deg, var(--saffron, #E8622C), #DA642B)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Section header */}
          <div className="text-center mb-20">
            <p className="text-[#2C0206] text-xs tracking-[0.4em] mb-3 font-bold" style={{ fontFamily: "'Cinzel', serif" }}>DISCOVER THE GURUVARYA</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2C0206] mb-5" style={{ fontFamily: "'Cinzel', serif" }}>Who I Am</h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-[#2C0206]/55" />
              <span className="text-[#2C0206] text-xl font-semibold" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>मी कोण आहे</span>
              <span className="w-16 h-px bg-[#2C0206]/55" />
            </div>
          </div>

          {/* Biography */}
          <div className="grid lg:grid-cols-5 gap-12 items-start mb-24">
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full overflow-hidden shadow-2xl" style={{ border: "4px solid #C9A227", boxShadow: "0 0 0 6px rgba(201,162,39,0.15)" }}>
                  <ImageWithFallback src={logoImg} alt="Guruvarya Shri Prakashbhau Shinde" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full flex items-center justify-center shadow-xl" style={{ background: "linear-gradient(135deg, #C9A227, #A87D10)" }}>
                  <span className="text-[#3A0B10] text-2xl font-bold" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>ॐ</span>
                </div>
              </div>
            </div>
            <div className="lg:col-span-3 space-y-6 rounded-3xl p-8 sm:p-10" style={{ background: "#FFFFFF", border: "1px solid rgba(44,2,6,0.08)", borderBottom: "3px solid var(--saffron, #E8622C)", boxShadow: "0 8px 28px rgba(0,0,0,0.1)" }}>
              <h3 className="text-2xl font-bold text-[#2C0206]" style={{ fontFamily: "'Cinzel', serif" }}>A Life Surrendered to the Divine</h3>
              <p className="text-[#241C1A] leading-8 text-base">
                Guruvarya Shri Prakashbhau Shinde (Mathadhipati) has dedicated over{" "}
                <span className="text-[#2C0206] font-bold">14 years</span> to the intense worship and tapasya of Lord Shri Hanuman — a journey of absolute surrender, rigorous sadhana, and unbroken devotion that has made him a spiritual beacon for thousands across Maharashtra and beyond.
              </p>
              <p className="text-[#241C1A] leading-8 text-base">
                He is regarded as blessed with the grace of the{" "}
                <span className="text-[#2C0206] font-bold">Dasha Mahavidya</span> — the ten supreme tantric manifestations of the Goddess — a distinction acknowledged by revered saints, scholars, and spiritual masters. He holds a{" "}
                <span className="text-[#2C0206] font-bold">Doctorate in Spiritual Education</span> and serves as{" "}
                <span className="text-[#2C0206] font-bold">Mathadhipati</span>, guiding his Math and devotees with wisdom, authority, and boundless compassion.
              </p>
              <p className="text-[#241C1A] leading-8 text-base">
                As the founding force behind{" "}
                <span className="text-[#2C0206] font-bold">Sarvatmak Maharudra Parivar Trust</span>{" "}
                (Reg. No. E0009721(PUN)), he has extended his mission into education, healthcare, and humanitarian service — because for him, true devotion must always translate into seva.
              </p>
              <blockquote className="mt-4 px-6 py-4 rounded-xl" style={{ border: "1px solid rgba(44,2,6,0.16)", background: "#FFF7F1" }}>
                <p className="text-[#2C0206] italic text-sm leading-relaxed font-semibold" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
                  "श्रद्धा आणि साबुरी — हीच माझ्या जीवनाची आणि उपासनेची शिकवण आहे।"
                </p>
              </blockquote>
            </div>
          </div>

          {/* Spiritual Journey Timeline */}
          <div className="mb-24">
            <h3 className="text-2xl font-bold text-center text-[#2C0206] mb-14" style={{ fontFamily: "'Cinzel', serif" }}>The Spiritual Journey</h3>
            <div className="relative space-y-6">
              <div className="absolute left-[4.5rem] top-0 bottom-0 w-px hidden md:block" style={{ background: "linear-gradient(to bottom, transparent, rgba(44,2,6,0.35), rgba(44,2,6,0.35), transparent)" }} />
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 flex flex-col items-center gap-1 w-16">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold z-10 flex-shrink-0 shadow-lg transition-all duration-200 group-hover:scale-110" style={{ fontFamily: "'Cinzel', serif", background: "linear-gradient(135deg, #C9A227, #A87D10)", color: "#3A0B10" }}>
                      {i + 1}
                    </div>
                    <span className="text-[#2C0206] text-[10px] font-bold tracking-wide text-center" style={{ fontFamily: "'Cinzel', serif" }}>{item.year}</span>
                  </div>
                  <div className="flex-1 rounded-2xl p-6 transition-all duration-200 group-hover:-translate-y-1" style={{ background: "#FFFFFF", border: "1px solid rgba(44,2,6,0.08)", borderBottom: "3px solid var(--saffron, #E8622C)", boxShadow: "0 6px 20px rgba(0,0,0,0.08)" }}>
                    <h4 className="font-bold text-[#2C0206] text-base mb-2 transition-colors" style={{ fontFamily: "'Cinzel', serif" }}>{item.title}</h4>
                    <p className="text-[#241C1A] text-sm leading-7">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dasha Mahavidya */}
          <div>
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-[#2C0206] mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Blessed by the Dasha Mahavidya</h3>
              <p className="text-[#2C0206]/85 text-lg" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>दश महाविद्या कृपा</p>
              <p className="text-[#241C1A] text-sm mt-3 max-w-2xl mx-auto leading-7">
                Guruvarya is blessed with the living grace of all ten Mahavidyas — the supreme tantric manifestations of the Divine Mother, each governing a distinct cosmic principle and force.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {mahavidyas.map((m, i) => (
                <div
                  key={i}
                  className="mahavidya-card"
                >
                  <div className="mahavidya-figure">
                    {m.image ? (
                      <div className="mahavidya-avatar">
                        <ImageWithFallback
                          src={m.image}
                          alt={`${m.name} goddess`}
                          className="mahavidya-image"
                        />
                      </div>
                    ) : (
                      <div className="mahavidya-avatar mahavidya-placeholder">
                        <span>ॐ</span>
                      </div>
                    )}
                  </div>
                  <div className="mahavidya-badge">{i + 1}</div>
                  <div className="text-[#581214] font-bold text-sm mb-1" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>{m.devanagari}</div>
                  <div className="text-[#2C0206] text-xs font-bold mb-2" style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.08em", textTransform: "uppercase" }}>{m.name}</div>
                  <p className="mahavidya-meaning">{m.meaning}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────── */}
      {/* WHAT I THINK                                    */}
      {/* ──────────────────────────────────────────────── */}
      <section id="what-i-think" className="bg-[#FBF3E7] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Section header */}
          <div className="text-center mb-20">
            <p className="text-[#E8622C]/80 text-xs tracking-[0.4em] mb-3" style={{ fontFamily: "'Cinzel', serif" }}>PHILOSOPHY & WISDOM</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#5C1119] mb-5" style={{ fontFamily: "'Cinzel', serif" }}>What I Think</h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-[#C9A227]" />
              <span className="text-[#5C1119] text-xl" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>माझे विचार</span>
              <span className="w-16 h-px bg-[#C9A227]" />
            </div>
          </div>

          {/* HERO QUOTE */}
          <div className="rounded-3xl p-10 sm:p-16 mb-16 relative overflow-hidden" style={{ background: "linear-gradient(135deg, #5C1119, #3A0B10)" }}>
            <div className="absolute top-6 left-8 select-none pointer-events-none" style={{ fontFamily: "Georgia, serif", fontSize: "10rem", lineHeight: 1, color: "rgba(201,162,39,0.08)", fontWeight: 700 }}>
              "
            </div>
            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <p className="text-white text-2xl sm:text-3xl leading-loose mb-5" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
                आत्मा परमात्म्याचे प्रतिबिंब आहे।<br />
                स्वतःला ओळखा — ईश्वराला ओळखा।
              </p>
              <p className="text-lg mb-6 italic leading-relaxed" style={{ fontFamily: "'Libre Baskerville', Georgia, serif", color: "#C9A227" }}>
                "The soul is a mirror of the Supreme.<br />Know yourself — and you shall know God."
              </p>
              <p className="text-white/50 text-sm tracking-widest" style={{ fontFamily: "'Cinzel', serif" }}>
                — Guruvarya Shri Prakashbhau Shinde (Mathadhipati)
              </p>
            </div>
          </div>

          {/* Teachings */}
          <div className="grid md:grid-cols-3 gap-7 mb-16">
            {[
              {
                devanagari: "श्रद्धा आणि साबुरी हे भक्तीचे दोन पाय आहेत।",
                english: "Faith and patience are the two sacred feet of devotion.",
                context: "On the path of bhakti — true worship demands not speed, but steadiness."
              },
              {
                devanagari: "सेवा हीच सच्ची पूजा आहे।",
                english: "Service to humanity is the truest form of worship.",
                context: "No ritual or mantra equals the merit of one sincere act of selfless service."
              },
              {
                devanagari: "दुसऱ्याच्या वेदनेत ईश्वर दिसतो — तिथेच खरी भक्ती आहे।",
                english: "God is seen in the suffering of another — therein lies true devotion.",
                context: "Compassion is not a virtue added to spirituality — it is its very heart."
              },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-200 group" style={{ border: "1px solid rgba(201,162,39,0.2)" }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 transition-colors" style={{ background: "rgba(92,17,25,0.06)" }}>
                  <Quote className="w-5 h-5 text-[#5C1119]" />
                </div>
                <p className="font-semibold text-[#5C1119] text-base mb-4 leading-8" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>{t.devanagari}</p>
                <p className="italic text-[#241C1A]/65 text-sm leading-7 mb-4" style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}>"{t.english}"</p>
                <p className="text-[#241C1A]/45 text-xs leading-6">{t.context}</p>
              </div>
            ))}
          </div>

          {/* Philosophy pillars */}
          <div className="bg-white rounded-3xl p-10 sm:p-14" style={{ border: "1px solid rgba(201,162,39,0.25)" }}>
            <h3 className="text-2xl font-bold text-[#5C1119] text-center mb-10" style={{ fontFamily: "'Cinzel', serif" }}>The Pillars of His Philosophy</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { Icon: Globe, title: "Dharma", desc: "Righteous living as the unshakeable foundation of all human flourishing — every thought, word, and action aligned with the eternal cosmic order." },
                { Icon: Sparkles, title: "Shakti", desc: "Honouring the divine feminine in all her forms — the Mahavidyas as living gateways to infinite cosmic consciousness and creative power." },
                { Icon: Heart, title: "Seva", desc: "Service to every sentient being as the highest act of worship — for to care for another is to honour the Divine that dwells within all." },
                { Icon: BookOpen, title: "Bhakti", desc: "Devotion with श्रद्धा (faith) and साबुरी (patience) — the twin virtues that open every closed door on the path to the Absolute." },
              ].map((p, i) => (
                <div key={i} className="text-center p-6 rounded-2xl transition-colors hover:bg-[#FBF3E7]">
                  <div className="flex items-center justify-center mx-auto mb-4 w-14 h-14 rounded-2xl bg-[#F6E5CB]">
                    <p.Icon className="w-8 h-8 text-[#C9A227]" />
                  </div>
                  <h4 className="font-bold text-[#5C1119] text-xs tracking-[0.2em] mb-3" style={{ fontFamily: "'Cinzel', serif" }}>{p.title}</h4>
                  <p className="text-[#241C1A]/60 text-xs leading-6">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────────── */}
      {/* WHAT I DO                                       */}
      {/* ──────────────────────────────────────────────── */}
      <section id="what-i-do" className="py-24" style={{ background: "radial-gradient(circle at 82% 14%, rgba(255, 207, 139, 0.28), transparent 32%), linear-gradient(135deg, var(--saffron, #E8622C), #DA642B)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          {/* Section header */}
          <div className="text-center mb-20">
            <p className="text-[#2C0206] text-xs tracking-[0.4em] mb-3 font-bold" style={{ fontFamily: "'Cinzel', serif" }}>SERVICES & MISSION</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-[#2C0206] mb-5" style={{ fontFamily: "'Cinzel', serif" }}>What I Do</h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-[#2C0206]/55" />
              <span className="text-[#2C0206] text-xl font-semibold" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>माझे कार्य</span>
              <span className="w-16 h-px bg-[#2C0206]/55" />
            </div>
          </div>

          {/* Services grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
            {services.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 flex flex-col transition-all duration-200 group hover:-translate-y-1.5"
                style={{ background: "#FFFFFF", border: "1px solid rgba(44,2,6,0.08)", borderBottom: "3px solid var(--saffron, #E8622C)", boxShadow: "0 6px 20px rgba(0,0,0,0.08)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 14px 32px rgba(0,0,0,0.14)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)"; }}
              >
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-all duration-200" style={{ background: "rgba(232,98,44,0.13)" }}>
                  <s.Icon className="w-6 h-6 text-[#5C1119]" />
                </div>
                <p className="text-[#581214] text-xs mb-1 font-semibold" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>{s.devanagari}</p>
                <h3 className="font-bold text-[#2C0206] text-lg mb-3" style={{ fontFamily: "'Cinzel', serif" }}>{s.title}</h3>
                <p className="text-[#333333] text-sm leading-7 flex-1 mb-6">{s.desc}</p>
                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="flex items-center gap-2 text-sm font-bold text-[#E8622C] underline-offset-4 hover:underline transition-colors"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {s.cta} <ChevronRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>

          {/* Social Works */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-[#2C0206] mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Social Works & Seva</h3>
              <p className="text-[#241C1A]" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>सामाजिक सेवा कार्य — Sarvatmak Maharudra Parivar Trust</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {socialWorks.map((w, i) => (
                <div
                  key={i}
                  className="flex gap-4 items-start rounded-2xl p-6 transition-all duration-200 hover:-translate-y-1.5"
                  style={{ background: "#FFFFFF", border: "1px solid rgba(44,2,6,0.08)", borderBottom: "3px solid var(--saffron, #E8622C)", boxShadow: "0 6px 20px rgba(0,0,0,0.08)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 14px 32px rgba(0,0,0,0.14)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 20px rgba(0,0,0,0.08)"; }}
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "rgba(232,98,44,0.13)" }}>
                    <w.Icon className="w-5 h-5 text-[#5C1119]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#2C0206] text-sm mb-1.5" style={{ fontFamily: "'Cinzel', serif" }}>{w.title}</h4>
                    <p className="text-[#333333] text-xs leading-6">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Section with Impact Numbers */}
          <div className="rounded-3xl p-8 sm:p-12" style={{ background: "#FFFFFF", border: "1px solid rgba(44,2,6,0.08)", borderBottom: "3px solid var(--saffron, #E8622C)", boxShadow: "0 8px 28px rgba(0,0,0,0.1)" }}>
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-[#2C0206] text-xs tracking-[0.35em] mb-3 font-bold" style={{ fontFamily: "'Cinzel', serif" }}>FOUNDER & GUIDING FORCE</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#2C0206] mb-2" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
                  सर्वात्मक महारुद्र परिवार ट्रस्ट
                </h3>
                <p className="font-semibold text-lg mb-1" style={{ fontFamily: "'Cinzel', serif", color: "#2C0206" }}>Sarvatmak Maharudra Parivar Trust</p>
                <p className="text-[#241C1A]/75 text-xs mb-5 tracking-wider" style={{ fontFamily: "'Cinzel', serif" }}>Reg. No. E0009721(PUN)</p>
                <p className="text-[#241C1A] text-sm leading-7 mb-4">
                  <em className="text-[#2C0206] not-italic font-bold">"Serving Humanity with Faith, Compassion & Commitment"</em>
                </p>
                <p className="text-[#241C1A] text-sm leading-7 mb-8">
                  A government-registered charitable trust engaged in education, healthcare, animal welfare, blood donation, and humanitarian relief across Maharashtra — always guided by the principle that bhakti finds its highest expression in seva.
                </p>
                <a
                  href={TRUST_WEBSITE}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 text-white font-bold rounded-xl transition-all duration-200 text-sm tracking-wider"
                  style={{ fontFamily: "'Cinzel', serif", background: "linear-gradient(135deg, #E8622C, #C9422C)", boxShadow: "0 4px 15px rgba(232,98,44,0.3)" }}
                >
                  Visit Trust Website <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {impactNumbers.map((n, i) => (
                  <div key={i} className="rounded-2xl p-7 text-center transition-all duration-200 hover:-translate-y-1" style={{ background: "#FFF7F1", border: "1px solid rgba(44,2,6,0.1)", borderBottom: "3px solid var(--saffron, #E8622C)", boxShadow: "0 6px 18px rgba(0,0,0,0.07)" }}>
                    <div className="text-4xl font-bold mb-2" style={{ fontFamily: "'Cinzel', serif", color: "#2C0206" }}>{n.number}</div>
                    <div className="text-[#241C1A] text-xs font-semibold mb-1">{n.label}</div>
                    <div className="text-[#241C1A]/75 text-xs" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>{n.sub}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Achievements ── */}
      <section className="bg-[#FBF3E7] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#E8622C]/80 text-xs tracking-[0.4em] mb-3" style={{ fontFamily: "'Cinzel', serif" }}>CREDENTIALS & HONOURS</p>
            <h2 className="text-4xl font-bold text-[#5C1119] mb-5" style={{ fontFamily: "'Cinzel', serif" }}>Achievements & Recognition</h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-[#C9A227]" />
              <span className="text-[#5C1119]" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>मान्यता व सन्मान</span>
              <span className="w-16 h-px bg-[#C9A227]" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((a, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-7 shadow-sm hover:shadow-lg transition-all duration-200 group"
                style={{ border: "1px solid rgba(201,162,39,0.2)" }}
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl mb-4 bg-[#F6E5CB]">
                  <a.Icon className="w-7 h-7 text-[#C9A227]" />
                </div>
                <div className="text-[#C9A227] text-xs font-bold tracking-widest mb-2" style={{ fontFamily: "'Cinzel', serif" }}>{a.year}</div>
                <h4 className="font-bold text-[#5C1119] text-sm mb-3 group-hover:text-[#E8622C] transition-colors leading-snug" style={{ fontFamily: "'Cinzel', serif" }}>{a.title}</h4>
                <p className="text-[#241C1A]/60 text-xs leading-6">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-24" style={{ background: "radial-gradient(circle at 18% 12%, rgba(255, 207, 139, 0.28), transparent 32%), linear-gradient(135deg, var(--saffron, #E8622C), #DA642B)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#2C0206] text-xs tracking-[0.4em] mb-3 font-bold" style={{ fontFamily: "'Cinzel', serif" }}>DEVOTEE VOICES</p>
            <h2 className="text-4xl font-bold text-[#2C0206] mb-5" style={{ fontFamily: "'Cinzel', serif" }}>What Devotees Say</h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-[#2C0206]/55" />
              <span className="text-[#2C0206] font-semibold" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>भक्तांचे अनुभव</span>
              <span className="w-16 h-px bg-[#2C0206]/55" />
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="rounded-2xl p-8 transition-all duration-200 hover:-translate-y-1.5"
                style={{ background: "#FFFFFF", border: "1px solid rgba(44,2,6,0.08)", borderBottom: "3px solid var(--saffron, #E8622C)", boxShadow: "0 6px 20px rgba(0,0,0,0.08)" }}
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.stars }).map((_, j) => (
                    <Star key={j} className="w-4 h-4" style={{ fill: "#C9A227", color: "#C9A227" }} />
                  ))}
                </div>
                <p className="text-[#333333] text-sm leading-8 mb-6 italic" style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}>
                  "{t.text}"
                </p>
                <div>
                  <div className="font-semibold text-[#2C0206] text-sm" style={{ fontFamily: "'Cinzel', serif" }}>{t.name}</div>
                  <div className="flex items-center gap-1 text-[#333333]/75 text-xs mt-1">
                    <MapPin className="w-3 h-3" /> {t.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#FBF3E7] py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#E8622C]/80 text-xs tracking-[0.4em] mb-3" style={{ fontFamily: "'Cinzel', serif" }}>FREQUENTLY ASKED</p>
            <h2 className="text-4xl font-bold text-[#5C1119] mb-5" style={{ fontFamily: "'Cinzel', serif" }}>Questions & Answers</h2>
            <div className="flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-[#C9A227]" />
              <span className="text-[#5C1119]" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>प्रश्न-उत्तरे</span>
              <span className="w-16 h-px bg-[#C9A227]" />
            </div>
          </div>
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden transition-all duration-200"
                style={{ border: `1px solid ${activeFaq === i ? "rgba(201,162,39,0.6)" : "rgba(201,162,39,0.2)"}` }}
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span className="font-semibold text-[#5C1119] text-sm" style={{ fontFamily: "'Cinzel', serif" }}>{f.q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 transition-transform duration-200 ${activeFaq === i ? "rotate-180" : ""}`} style={{ color: "#C9A227" }} />
                </button>
                {activeFaq === i && (
                  <div className="px-7 pb-6">
                    <div className="h-px mb-5" style={{ background: "rgba(201,162,39,0.2)" }} />
                    <p className="text-[#241C1A]/68 text-sm leading-7">{f.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="bg-[#5C1119] py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <p className="text-[#C9A227]/70 text-xs tracking-[0.4em] mb-3" style={{ fontFamily: "'Cinzel', serif" }}>REACH OUT</p>
            <h2 className="text-4xl font-bold text-white mb-4" style={{ fontFamily: "'Cinzel', serif" }}>Connect With Guruvarya</h2>
            <p className="text-white/60 text-sm max-w-lg mx-auto leading-7">Seek guidance, book a consultation, or simply reach out — every sincere seeker is welcome.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5 mb-12">
            {[
              { Icon: Phone, label: "Call Us", value: PHONE, href: `tel:${PHONE}` },
              { Icon: MessageCircle, label: "WhatsApp", value: "Quick Connect", href: WHATSAPP_LINK, external: true },
              { Icon: Mail, label: "Email", value: "info@sarvatmakmaharudra.org", href: "mailto:info@sarvatmakmaharudra.org" },
            ].map((c, i) => (
              <a
                key={i}
                href={c.href}
                target={c.external ? "_blank" : undefined}
                rel={c.external ? "noreferrer" : undefined}
                className="flex flex-col items-center gap-4 p-8 rounded-2xl transition-all duration-200 group"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,162,39,0.2)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(201,162,39,0.1)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,162,39,0.55)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,162,39,0.2)"; }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "rgba(201,162,39,0.18)" }}>
                  <c.Icon className="w-6 h-6 text-[#C9A227]" />
                </div>
                <div className="text-center">
                  <div className="font-semibold text-white text-sm mb-1" style={{ fontFamily: "'Cinzel', serif" }}>{c.label}</div>
                  <div className="text-[#C9A227] font-bold text-sm break-all">{c.value}</div>
                </div>
              </a>
            ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="px-12 py-4 text-white font-bold rounded-2xl shadow-2xl transition-all duration-200 text-sm tracking-[0.2em]"
              style={{ fontFamily: "'Cinzel', serif", background: "linear-gradient(135deg, #E8622C, #C9422C)", boxShadow: "0 8px 30px rgba(232,98,44,0.4)" }}
            >
              BOOK A CONSULTATION
            </button>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-[#2A060B] py-14" style={{ borderTop: "1px solid rgba(201,162,39,0.2)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0" style={{ border: "2px solid #C9A227" }}>
                  <ImageWithFallback src={logoImg} alt="Guruvarya" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="font-bold text-[#C9A227] text-sm" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>गुरुवर्य श्री प्रकाशभाऊ शिंदे</div>
                  <div className="text-white/40 text-xs" style={{ fontFamily: "'Cinzel', serif" }}>(मठाधीपती)</div>
                </div>
              </div>
              <p className="text-white/40 text-xs leading-6">
                Spiritual Guru | Hanuman Upasak | Astrologer | Spiritual Counsellor<br />
                Founder, Sarvatmak Maharudra Parivar Trust
              </p>
            </div>
            <div>
              <h4 className="text-[#C9A227] font-semibold text-xs tracking-widest mb-5" style={{ fontFamily: "'Cinzel', serif" }}>NAVIGATE</h4>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                {[
                  { label: "Who I Am", id: "who-i-am" },
                  { label: "What I Think", id: "what-i-think" },
                  { label: "What I Do", id: "what-i-do" },
                  { label: "Philosophy", href: "/philosophy.html" },
                  { label: "Book Consultation", id: null },
                ].map((item, i) => (
                  item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-left text-white/40 hover:text-[#C9A227] text-xs transition-colors"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      key={item.label}
                      onClick={() => item.id ? scrollTo(item.id) : setIsBookingOpen(true)}
                      className="text-left text-white/40 hover:text-[#C9A227] text-xs transition-colors"
                      style={{ fontFamily: "'Cinzel', serif" }}
                    >
                      {item.label}
                    </button>
                  )
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-[#C9A227] font-semibold text-xs tracking-widest mb-5" style={{ fontFamily: "'Cinzel', serif" }}>SARVATMAK MAHARUDRA PARIVAR TRUST</h4>
              <p className="text-white/35 text-xs mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Reg. No. E0009721(PUN)</p>
              <p className="text-white/35 text-xs leading-6 mb-4">Serving humanity through education, healthcare, and social welfare under Guruvarya's divine guidance.</p>
              <a href={TRUST_WEBSITE} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-[#C9A227]/70 hover:text-[#C9A227] text-xs transition-colors" style={{ fontFamily: "'Cinzel', serif" }}>
                sarvatmakmaharudra.org <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(201,162,39,0.12)" }}>
            <p className="text-white/25 text-xs" style={{ fontFamily: "'Cinzel', serif" }}>
              © 2025 Guruvarya Shri Prakashbhau Shinde. All rights reserved.
            </p>
            <p className="text-white/25 text-xs" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>
              ॐ नमः शिवाय
            </p>
          </div>
        </div>
      </footer>
        </>
      )}

      {/* ── Floating WhatsApp ── */}
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
        className="fixed bottom-4 right-4 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_55px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#25D366] sm:bottom-6 sm:right-6"
      >
        <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.672.149-.198.297-.767.966-.94 1.163-.173.198-.347.223-.644.075-1.758-.867-2.903-1.534-4.077-3.494-.306-.527.306-.49.882-1.626.099-.198.05-.372-.025-.52-.075-.149-.672-1.612-.922-2.21-.242-.579-.487-.5-.672-.51-.173-.007-.372-.009-.571-.009s-.52.075-.792.372c-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.077 4.487.71.306 1.262.489 1.693.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.007-1.413.248-.695.248-1.29.173-1.413-.075-.122-.273-.198-.57-.347m-5.41 7.138h-.001a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.01.792.804-2.945-.235-.374A9.864 9.864 0 0 1 1.69 11.38a9.876 9.876 0 0 1 9.868-9.877c2.64 0 5.12 1.03 6.989 2.899a9.863 9.863 0 0 1 2.9 6.988 9.877 9.877 0 0 1-9.884 9.879m8.413-18.29A11.815 11.815 0 0 0 12.03 0C5.39 0 .09 5.29.09 11.92c0 2.099.548 4.154 1.588 5.97L0 24l6.31-1.656a11.9 11.9 0 0 0 5.694 1.475h.005c6.63 0 11.92-5.29 11.92-11.92 0-3.181-1.24-6.167-3.481-8.422" />
        </svg>
      </a>

      {/* ── Sticky mobile call button ── */}
      <a
        href={`tel:${PHONE}`}
        aria-label="Call us"
        title="Call us"
        className="fixed bottom-4 left-4 z-50 lg:hidden flex h-14 w-14 items-center justify-center rounded-full bg-[#5C1119] border-2 border-[#C9A227] text-[#C9A227] shadow-[0_18px_55px_rgba(92,17,25,0.35)] transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#5C1119]"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* ── Booking Modal ── */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ overflowY: "auto" }}>
          <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={() => setIsBookingOpen(false)} />
          <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md my-4" style={{ maxHeight: "90vh", overflowY: "auto" }}>
            {/* Modal header */}
            <div className="rounded-t-3xl px-8 py-7 flex items-center justify-between" style={{ background: "linear-gradient(135deg, #5C1119, #3A0B10)" }}>
              <div>
                <h3 className="font-bold text-white text-lg" style={{ fontFamily: "'Cinzel', serif" }}>Book a Consultation</h3>
                <p className="text-[#C9A227] text-xs mt-1" style={{ fontFamily: "'Noto Serif Devanagari', serif" }}>सल्ला बुक करा</p>
              </div>
              <button onClick={() => setIsBookingOpen(false)} className="text-white/50 hover:text-white transition-colors p-1">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="px-8 py-7 space-y-5">
              {formSubmitted ? (
                <div className="text-center py-10">
                  <CheckCircle className="mx-auto mb-5 w-16 h-16 text-[#C9A227]" />
                  <p className="font-bold text-[#5C1119] text-xl mb-3" style={{ fontFamily: "'Cinzel', serif" }}>Namaskar!</p>
                  <p className="text-[#241C1A]/65 text-sm leading-7">Your consultation request has been received. Guruvarya's team will contact you within 24 hours to confirm your appointment.</p>
                </div>
              ) : (
                <>
                  <div>
                    <label className="block text-xs font-bold tracking-wider text-[#5C1119] mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Full Name *</label>
                    <input
                      required
                      value={bookingForm.name}
                      onChange={e => setBookingForm(f => ({ ...f, name: e.target.value }))}
                      className="w-full px-4 py-3.5 rounded-xl text-sm transition-all outline-none"
                      style={{ border: "1.5px solid rgba(92,17,25,0.15)", background: "#FAFAFA" }}
                      placeholder="Your full name"
                      onFocus={e => { e.currentTarget.style.borderColor = "#5C1119"; e.currentTarget.style.boxShadow = "0 0 0 3px rgba(92,17,25,0.08)"; }}
                      onBlur={e => { e.currentTarget.style.borderColor = "rgba(92,17,25,0.15)"; e.currentTarget.style.boxShadow = "none"; }}
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold tracking-wider text-[#5C1119] mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Phone *</label>
                      <input
                        required
                        value={bookingForm.phone}
                        onChange={e => setBookingForm(f => ({ ...f, phone: e.target.value }))}
                        className="w-full px-4 py-3.5 rounded-xl text-sm transition-all outline-none"
                        style={{ border: "1.5px solid rgba(92,17,25,0.15)", background: "#FAFAFA" }}
                        placeholder="Mobile number"
                        onFocus={e => { e.currentTarget.style.borderColor = "#5C1119"; }}
                        onBlur={e => { e.currentTarget.style.borderColor = "rgba(92,17,25,0.15)"; }}
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold tracking-wider text-[#5C1119] mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Email</label>
                      <input
                        value={bookingForm.email}
                        onChange={e => setBookingForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full px-4 py-3.5 rounded-xl text-sm transition-all outline-none"
                        style={{ border: "1.5px solid rgba(92,17,25,0.15)", background: "#FAFAFA" }}
                        placeholder="Email address"
                        onFocus={e => { e.currentTarget.style.borderColor = "#5C1119"; }}
                        onBlur={e => { e.currentTarget.style.borderColor = "rgba(92,17,25,0.15)"; }}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-wider text-[#5C1119] mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Consultation Type *</label>
                    <select
                      required
                      value={bookingForm.queryType}
                      onChange={e => setBookingForm(f => ({ ...f, queryType: e.target.value }))}
                      className="w-full px-4 py-3.5 rounded-xl text-sm outline-none bg-[#FAFAFA]"
                      style={{ border: "1.5px solid rgba(92,17,25,0.15)" }}
                    >
                      <option value="">Select type</option>
                      <option>Astrology Consultation</option>
                      <option>Spiritual Counselling</option>
                      <option>Hanuman Upasana Guidance</option>
                      <option>Dasha Mahavidya Sadhana</option>
                      <option>Personal Blessings (Ashirwad)</option>
                      <option>Trust Donation / Contribution</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold tracking-wider text-[#5C1119] mb-2" style={{ fontFamily: "'Cinzel', serif" }}>Message</label>
                    <textarea
                      value={bookingForm.message}
                      onChange={e => setBookingForm(f => ({ ...f, message: e.target.value }))}
                      rows={3}
                      className="w-full px-4 py-3.5 rounded-xl text-sm outline-none resize-none"
                      style={{ border: "1.5px solid rgba(92,17,25,0.15)", background: "#FAFAFA" }}
                      placeholder="Briefly describe your query or what you seek guidance on..."
                      onFocus={e => { e.currentTarget.style.borderColor = "#5C1119"; }}
                      onBlur={e => { e.currentTarget.style.borderColor = "rgba(92,17,25,0.15)"; }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 text-white font-bold rounded-2xl transition-all duration-200 text-sm tracking-widest shadow-xl"
                    style={{ fontFamily: "'Cinzel', serif", background: "linear-gradient(135deg, #E8622C, #C9422C)", boxShadow: "0 6px 20px rgba(232,98,44,0.35)" }}
                  >
                    SUBMIT REQUEST
                  </button>
                  <p className="text-center text-[#241C1A]/40 text-xs">We will contact you within 24 hours to confirm your appointment.</p>
                </>
              )}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
