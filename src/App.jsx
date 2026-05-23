import { useEffect, useRef, useState } from 'react'

// ─── Scroll Fade Hook ────────────────────────────────────────────────────────
function useFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.12 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

// ─── Data ────────────────────────────────────────────────────────────────────
const products = [
  {
    id: 1,
    name: 'Advanced Collagen plus',
    benefit: 'Unlock your natural radiance and support your body’s foundation with Advanced Collagen Plus. Formulated with a potent blend of 5 essential collagen types…',
    price: '$49.95',
    badge: 'Bestseller',
    img: 'https://i.pinimg.com/736x/db/1a/14/db1a14ec4d37bb6e14e41c20850d8f9a.jpg',
    link: 'https://www.advancedbionutritionals.com/DS24/Collagen/This-Simple-10-Second-Kitchen-Test/HD.htm#aff=aishaarainaaa3108',
    color: 'from-rose-100 to-blush-100',
  },
  {
    id: 2,
    name: 'CellUHair Rice Bran Oil Cellu Spray',
    benefit: 'Hair Growth Solution – Say Goodbye to Hair Loss and Hello to Confidence!',
    price: '$69',
    badge: 'best seller',
    img: 'https://i.pinimg.com/736x/21/48/a7/2148a7f79fc90d792a97ed17c87bc891.jpg',
    link: 'https://celluhair.org/v2/index.html?transaction_id=U3UwbWhmSG0#aff=aishaarainaaa3108',
    color: 'from-pink-50 to-rose-100',
  }
]

const features = [
  {
    icon: '✦',
    title: 'Expert Curation',
    desc: 'Every product hand-picked by beauty experts for real results.',
  },
  {
    icon: '◈',
    title: 'Trusted Reviews',
    desc: 'Honest, tested recommendations you can rely on.',
  },
  {
    icon: '⬡',
    title: 'Always Trending',
    desc: 'Fresh picks updated weekly from the hottest beauty launches.',
  },
  {
    icon: '✿',
    title: 'Clean Beauty',
    desc: 'Skin-kind formulas — no parabens, no compromise.',
  },
]

// ─── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#products', label: 'Products' },
    { href: '#about', label: 'About' },
    { href: '#pinterest', label: 'Pinterest' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'glass shadow-sm py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white text-xs font-bold shadow-md group-hover:scale-110 transition-transform">B</span>
          <span className="font-display text-xl font-semibold tracking-wide text-rose-700">BeautyHub</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} className="font-body text-sm text-rose-900/70 hover:text-rose-600 transition-colors tracking-wide">
              {l.label}
            </a>
          ))}

        </div>

        {/* Mobile hamburger */}
        <button onClick={() => setOpen(!open)} className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px]" aria-label="Menu">
          <span className={`block w-5 h-0.5 bg-rose-700 transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-5 h-0.5 bg-rose-700 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-rose-700 transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="glass mx-4 mt-2 rounded-2xl py-4 px-5 flex flex-col gap-3">
          {navLinks.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-body text-sm text-rose-900/80 hover:text-rose-600 py-1">
              {l.label}
            </a>
          ))}
          
        </div>
      </div>
    </nav>
  )
}

// ─── Hero Section ────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-cream">
      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-anim absolute top-[-10%] right-[-8%] w-[520px] h-[520px] rounded-full bg-rose-200/50 blur-[80px]" />
        <div className="glow-anim absolute bottom-[5%] left-[-10%] w-[460px] h-[460px] rounded-full bg-pink-100/60 blur-[80px]" style={{animationDelay:'1.5s'}} />
        <div className="glow-anim absolute top-[40%] left-[30%] w-[300px] h-[300px] rounded-full bg-orange-100/40 blur-[60px]" style={{animationDelay:'3s'}} />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="float-1 absolute top-[18%] left-[7%] w-14 h-14 rounded-full glass-dark flex items-center justify-center text-2xl shadow-sm">🌸</div>
        <div className="float-2 absolute top-[25%] right-[9%] w-12 h-12 rounded-full glass-dark flex items-center justify-center text-xl shadow-sm">✨</div>
        <div className="float-3 absolute bottom-[20%] left-[12%] w-10 h-10 rounded-full glass-dark flex items-center justify-center text-lg shadow-sm">💎</div>
        <div className="float-1 absolute bottom-[30%] right-[8%] w-11 h-11 rounded-full glass-dark flex items-center justify-center text-xl shadow-sm" style={{animationDelay:'2s'}}>🌷</div>
        {/* Decorative rings */}
        <div className="spin-slow absolute top-[10%] right-[20%] w-32 h-32 rounded-full border border-rose-200/50 opacity-60" />
        <div className="spin-slow absolute bottom-[15%] left-[20%] w-24 h-24 rounded-full border border-pink-200/60 opacity-50" style={{animationDirection:'reverse'}} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-24">
        
        <h1 className="hero-text-2 font-display font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight text-rose-950 mb-6">
          Glow Naturally<br />
          <em className="text-shimmer not-italic font-normal">with BeautyHub</em>
        </h1>

        <p className="hero-text-3 font-body text-rose-900/65 text-lg sm:text-xl max-w-xl mx-auto mb-10 leading-relaxed font-light">
          Discover skincare &amp; beauty essentials curated for your glow-up journey — trusted picks, real results.
        </p>

        <div className="hero-text-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
          <a
            href="#products"
            className="btn-primary relative z-10 px-8 py-4 rounded-full font-body font-medium text-white text-base shadow-lg inline-flex items-center gap-2"
          >
            <span>Shop Beauty Essentials</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#about" className="btn-outline px-8 py-4 rounded-full font-body font-medium text-base inline-flex items-center gap-2">
            Learn More
          </a>
        </div>

      
        
      </div>

      {/* Scroll indicator */}
      <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-rose-400 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
        <span className="w-0.5 h-8 bg-gradient-to-b from-rose-300 to-transparent" />
      </a>
    </section>
  )
}

// ─── Brand Intro ─────────────────────────────────────────────────────────────
function BrandIntro() {
  const ref = useFadeIn()
  return (
    <section id="about" className="py-24 md:py-32 bg-petal relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent" />
      </div>

      <div ref={ref} className="section-fade max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
        {/* Visual side */}
        <div className="relative">
          <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=750&fit=crop&crop=center"
              alt="BeautyHub lifestyle"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {/* Floating stat card */}
          <div className="glass absolute -bottom-5 -right-5 sm:-right-8 px-5 py-4 rounded-2xl shadow-md">
            <p className="font-display text-3xl font-medium text-rose-700">10k+</p>
            <p className="font-body text-xs text-rose-900/60 mt-0.5">Glowing customers</p>
          </div>
          <div className="glass absolute -top-5 -left-4 sm:-left-7 px-4 py-3 rounded-xl shadow-md">
            <p className="font-body text-xs font-medium text-rose-700">⭐ 4.9 / 5.0</p>
            <p className="font-body text-xs text-rose-900/50">Avg. rating</p>
          </div>
        </div>

        {/* Text side */}
        <div>
          <p className="font-body text-xs tracking-[0.2em] uppercase text-rose-400 mb-4">About BeautyHub</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-rose-950 leading-tight mb-6">
            Your Beauty<br /><em className="not-italic text-gradient font-normal">Discovery Hub</em>
          </h2>
          <p className="font-body text-rose-900/65 leading-relaxed mb-5">
            BeautyHub is more than a store — it's your personal beauty editor. We scour hundreds of brands to bring you only the skincare, makeup, and self-care products that actually live up to the hype.
          </p>
          <p className="font-body text-rose-900/65 leading-relaxed mb-8">
            Whether you're building your first skincare routine or leveling up a well-loved shelf, we guide you to the right products for your skin, your lifestyle, and your glow goals.
          </p>
          <div className="flex flex-col gap-3">
            {['Rigorously tested by real beauty lovers', 'Only clean, skin-safe formulas', 'Honest reviews — no fluff, no filler'].map(item => (
              <div key={item} className="flex items-center gap-3">
                <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 5l2 2 4-4" stroke="#e11d48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </span>
                <span className="font-body text-sm text-rose-900/70">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Products Section ────────────────────────────────────────────────────────
function Products() {
  const ref = useFadeIn()
  return (
    <section id="products" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-fade text-center mb-14">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-rose-400 mb-3">Curated Picks</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-rose-950 mb-4">
            Featured <em className="not-italic text-gradient">Products</em>
          </h2>
          <p className="font-body text-rose-900/60 max-w-md mx-auto leading-relaxed">
            Handpicked by our beauty editors — each product selected for visible results and luxurious feel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} delay={i * 80} />
          ))}
        </div>

       
      </div>
    </section>
  )
}

function ProductCard({ product, delay }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.transitionDelay = `${delay}ms`; el.classList.add('visible') } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <article ref={ref} className="section-fade card-hover group bg-white rounded-3xl overflow-hidden shadow-sm border border-rose-50">
      {/* Image */}
      <div className="relative aspect-[4/4.5] overflow-hidden bg-rose-50">
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rose-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Badge */}
        <span className="absolute top-4 left-4 glass px-3 py-1 rounded-full text-xs font-body font-medium text-rose-700">
          {product.badge}
        </span>
        {/* Quick view overlay */}
        <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <a
            href={product.link}
            className="btn-primary relative z-10 w-full py-2.5 rounded-xl text-sm font-body font-medium text-white text-center flex items-center justify-center gap-2 shadow-lg"
          >
            View Product
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display text-lg font-normal text-rose-950 mb-1">{product.name}</h3>
        <p className="font-body text-sm text-rose-900/55 leading-snug mb-4">{product.benefit}</p>
        <div className="flex items-center justify-between">
          <span className="font-display text-xl font-medium text-rose-600">{product.price}</span>
          <a
            href={product.link}
            className="glass-dark px-4 py-2 rounded-full text-xs font-body font-medium text-rose-700 hover:bg-rose-50 transition-colors border border-rose-100"
          >
            Shop →
          </a>
        </div>
      </div>
    </article>
  )
}

// ─── Why Choose BeautyHub ────────────────────────────────────────────────────
function WhyChoose() {
  const ref = useFadeIn()
  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-petal to-cream relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-rose-100/30 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="section-fade text-center mb-16">
          <p className="font-body text-xs tracking-[0.2em] uppercase text-rose-400 mb-3">Why Us</p>
          <h2 className="font-display text-4xl md:text-5xl font-light text-rose-950">
            The BeautyHub <em className="not-italic text-gradient">Difference</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} delay={i * 100} />
          ))}
        </div>


      </div>
    </section>
  )
}

function FeatureCard({ feature, delay }) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.transitionDelay = `${delay}ms`; el.classList.add('visible') } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])

  return (
    <div ref={ref} className="section-fade card-hover group bg-white rounded-3xl p-7 shadow-sm border border-rose-50 text-center">
      <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center text-2xl mx-auto mb-5 group-hover:bg-rose-100 transition-colors">
        <span>{feature.icon}</span>
      </div>
      <h3 className="font-display text-lg font-medium text-rose-950 mb-2">{feature.title}</h3>
      <p className="font-body text-sm text-rose-900/55 leading-relaxed">{feature.desc}</p>
    </div>
  )
}


// ─── Pinterest CTA ───────────────────────────────────────────────────────────
function PinterestCTA() {
  const ref = useFadeIn()
  return (
    <section id="pinterest" className="py-24 md:py-32 bg-gradient-to-br from-rose-50 via-petal to-pink-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-anim absolute top-[-20%] right-[-10%] w-96 h-96 rounded-full bg-rose-200/40 blur-[80px]" />
        <div className="glow-anim absolute bottom-[-20%] left-[-5%] w-80 h-80 rounded-full bg-pink-200/40 blur-[80px]" style={{animationDelay:'2s'}} />
      </div>

      <div ref={ref} className="section-fade max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white shadow-md mb-8 mx-auto">
          <svg viewBox="0 0 24 24" width="30" height="30" fill="#e60023"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
        </div>

        <p className="font-body text-xs tracking-[0.2em] uppercase text-rose-400 mb-4">Follow &amp; Discover</p>
        <h2 className="font-display text-4xl md:text-5xl font-light text-rose-950 mb-6 leading-tight">
          Daily Beauty Inspiration<br />
          <em className="not-italic text-gradient">on Pinterest</em>
        </h2>
        <p className="font-body text-rose-900/60 max-w-md mx-auto mb-10 leading-relaxed">
          Get daily skincare routines, makeup tutorials, product reviews, and beauty tips — curated by BeautyHub on Pinterest.
        </p>

        {/* Pinterest board previews */}
        <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto mb-10">
          {[
            'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=200&h=240&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=200&h=240&fit=crop&crop=center',
            'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=200&h=240&fit=crop&crop=center',
          ].map((src, i) => (
            <div key={i} className={`rounded-2xl overflow-hidden shadow-md ${i === 1 ? 'mt-4' : ''}`}>
              <img src={src} alt="Pinterest board" className="w-full h-full object-cover aspect-[5/6]" loading="lazy" />
            </div>
          ))}
        </div>

        <a
          href="https://www.pinterest.com/UrsBeautiesHub/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary relative z-10 inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-body font-medium text-white text-base shadow-lg"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
          Explore BeautyHub Pins
        </a>
      </div>
    </section>
  )
}

// ─── Final CTA Section ───────────────────────────────────────────────────────
function FinalCTA() {
  const ref = useFadeIn()
  return (
    <section className="py-28 md:py-36 bg-rose-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow-anim absolute top-[-30%] right-[-15%] w-[500px] h-[500px] rounded-full bg-rose-700/30 blur-[100px]" />
        <div className="glow-anim absolute bottom-[-30%] left-[-10%] w-[400px] h-[400px] rounded-full bg-pink-800/30 blur-[80px]" style={{animationDelay:'2s'}} />
        <div className="float-1 absolute top-[15%] left-[8%] text-white/10 font-display text-8xl select-none">✦</div>
        <div className="float-2 absolute bottom-[15%] right-[8%] text-white/10 font-display text-6xl select-none">✿</div>
      </div>

      <div ref={ref} className="section-fade max-w-3xl mx-auto px-6 text-center relative z-10">
        <p className="font-body text-xs tracking-[0.2em] uppercase text-rose-300/70 mb-5">Begin Your Journey</p>
        <h2 className="font-display text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight mb-6">
          Start Your<br />
          <em className="not-italic" style={{background:'linear-gradient(135deg,#fda4af,#f9a8d4,#fecdd3)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>
            Glow Journey
          </em>
          <br />Today
        </h2>
        <p className="font-body text-rose-200/65 text-lg max-w-md mx-auto mb-10 leading-relaxed">
          Join thousands of beauty lovers who've already found their perfect routine with BeautyHub.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#products"
            className="group relative inline-flex items-center gap-2 px-10 py-4 rounded-full font-body font-medium text-rose-950 bg-white hover:bg-rose-50 transition-all duration-300 text-base shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <span>Shop Now</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="group-hover:translate-x-1 transition-transform"><path d="M3 8h10M9 4l4 4-4 4" stroke="#e11d48" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </a>
          <a href="#products" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-body font-medium text-white border border-white/20 hover:border-white/50 transition-all duration-300 text-base hover:-translate-y-1">
            Browse Products
          </a>
        </div>

        {/* Affiliate disclosure */}
        <p className="font-body text-xs text-rose-300/40 mt-12 max-w-lg mx-auto leading-relaxed">
          ⚠ Affiliate Disclosure: BeautyHub contains affiliate links. We earn a small commission at no extra cost to you. All recommendations are based on genuine testing and honest opinions.
        </p>
      </div>
    </section>
  )
}

// ─── Footer ──────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-rose-950 border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center text-white text-xs font-bold">B</span>
            <span className="font-display text-lg text-white/80">BeautyHub</span>
          </div>
          
          <p className="font-body text-xs text-rose-300/30">© 2026 BeautyHub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

// ─── App ─────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <BrandIntro />
        <Products />
        <WhyChoose />
      
        <PinterestCTA />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
