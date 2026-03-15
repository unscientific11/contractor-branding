/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Check, 
  X, 
  MessageCircle, 
  Mail, 
  Globe,
  ShieldCheck,
  Zap,
  ArrowRight,
  Phone,
  ArrowUp
} from 'lucide-react';

// --- Translations ---
const translations = {
  en: {
    nav: {
      contact: "Contact",
      lang: "中文"
    },
    hero: {
      title: "Earn Trust<br />Before<br />They Call",
      subtitle: "Logos · Yard Signs · Uniforms · Websites",
      btnCase: "See a Real Contractor Case",
      btnStart: "Start Your Brand Upgrade",
      proof: "One complete branding system for contractors."
    },
    comparison: {
      title: "Same Work. Different Perception.",
      subtitle: "The work may be the same. What changes is how quickly people trust your company",
      before: {
        title: "Before",
        items: [
          "Messy signs, too much text",
          "Inconsistent branding everywhere",
          "Nobody remembers your name",
          "Looks like a small crew"
        ]
      },
      after: {
        title: "After",
        items: [
          "Clear professional signage",
          "Consistent branding across materials",
          "Easier to remember and recommend",
          "Looks like a real company"
        ]
      },
      footer: "Professional branding builds trust before the first conversation."
    },
    caseStudy: {
      title: "Real Contractor Example",
      desc: "A full branding upgrade changed how clients saw the company",
      quote: "After upgrading our brand, we started getting more calls from homeowners.",
      author: "Fuji Roofing",
      brandline: "Brand Upgrade: Logo redesign · Yard sign system · Uniforms · Business cards · Door hangers · Website",
      note: "A cleaner brand system made the company look more established before the first conversation.",
      results: [
        "More homeowner inquiries",
        "Less price resistance",
        "Stronger first impressions"
      ]
    },
    pricing: {
      title: "Branding Package",
      subtitle: "Simple, practical packages designed to help contractors look more established across every customer touchpoint.",
      starter: {
        name: "Starter Kit",
        for: "For small teams",
        price: "$1199",
        features: [
          "Business & brand positioning snapshot",
          "Visual style direction",
          "60 standard 18\" × 24\" yard signs",
          "Logo redesign (value: $400)",
          "18 branded T-shirts",
          "sub:1 colour, 1 print location"
        ]
      },
      growth: {
        name: "Growth Kit",
        for: "For growing teams",
        price: "$2299",
        features: [
          "Business & brand positioning snapshot",
          "Visual style direction",
          "125 standard 18\" × 24\" yard signs",
          "Logo redesign (value: $400)",
          "36 branded T-shirts",
          "sub:1 colour, 2 print locations",
          "Service highlight graphics",
          "Before / After showcase template"
        ]
      },
      btn: "Get Started"
    },
    addons: {
      title: "Add-Ons",
      disclaimer: "*Design fee waived with the purchase of a package",
      items: [
        {
          name: "Door Hanger",
          specs: "8.5\" × 3.5\", Double-sided",
          min: "Minimum Order: 500",
          price: "Starting at: $220"
        },
        {
          name: "Pull-up Banner",
          specs: "33\" × 81\" Regular: $260",
          min: "Premium: $290",
          price: "Regular: $260"
        },
        {
          name: "Heavy-Duty Yard Sign",
          specs: "Heavy-duty reusable H-stand",
          min: "Minimum Order: 10",
          price: "Starting at: $11 / each"
        }
      ]
    },
    included: {
      label: "What is Included",
      title: "Everything You Need to Look Like a Real Company",
      desc: "From signs to uniforms, websites, and print materials, every customer touchpoint works together.",
      items: [
        "Logo design / refresh",
        "Yard sign system",
        "Branded uniforms",
        "Contractor websites",
        "Door hangers",
        "Banners",
        "Print materials",
        "NCR forms"
      ]
    },
    contact: {
      title: "Let's work together",
      desc: "Tell us about your company and we’ll recommend the right package for your current stage.",
      meta: "English / 中文 · Toronto based",
      btn: "Email Us"
    }
  },
  zh: {
    nav: {
      contact: "联系我们",
      lang: "English"
    },
    hero: {
      title: "让客户先<br/>信任您",
      subtitle: "标志 · 庭院广告牌 · 制服 · 网站",
      btnCase: "真实公司案例",
      btnStart: "开始品牌升级",
      proof: "一站式品牌提升伙伴"
    },
    comparison: {
      title: "第一印象往往决定选择",
      subtitle: "一样的施工，但专业的品牌形象会让客户更快信任您",
      before: {
        title: "改造前",
        items: [
          "杂乱的广告牌，文字过多",
          "品牌形象不统一",
          "没人记得住您的名字",
          "看起来像个小作坊"
        ]
      },
      after: {
        title: "改造后",
        items: [
          "清晰专业的标识",
          "统一的品牌形象",
          "更易于记忆和推荐",
          "看起来像家正规公司"
        ]
      },
      footer: "专业的品牌在第一次交谈前就能建立信任。"
    },
    caseStudy: {
      title: "真实品牌提升案例",
      desc: "全方位的品牌升级改变了客户对公司的看法。",
      quote: "升级品牌后，我们开始接到更多房主的电话。",
      author: "Fuji Roofing屋顶公司",
      brandline: "品牌升级：标志重新设计 · 庭院广告牌系统 · 制服 · 名片 · 门把手挂牌 · 网站",
      note: "更整洁的品牌系统让公司在第一次交谈前看起来更具规模。",
      results: [
        "更多房主咨询",
        "更少的价格阻力",
        "更强的第一印象"
      ]
    },
    pricing: {
      title: "品牌套餐",
      subtitle: "简单实用一站式解决，帮助承包商在每个客户接触点看起来更专业",
      starter: {
        name: "入门套餐",
        for: "适合小团队",
        price: "$1199",
        features: [
          "业务与品牌定位",
          "视觉风格方向",
          "60个标准 18\" × 24\" 庭院广告牌",
          "Logo重新设计 (价值：$400)",
          "18件品牌T恤",
          "sub:单色，单位置印花"
        ]
      },
      growth: {
        name: "成长套餐",
        for: "适合成长中的团队",
        price: "$2299",
        features: [
          "业务与品牌定位",
          "视觉风格方向",
          "125个标准 18\" × 24\" 庭院广告牌",
          "Logo重新设计 (价值：$400)",
          "36件品牌T恤",
          "sub:单色，双位置印花",
          "服务一览表/核心服务展示图",
          "改造/工程前后展示模板"
        ]
      },
      btn: "立即开始"
    },
    addons: {
      title: "附加项目",
      disclaimer: "*购买套餐可免除设计费",
      items: [
        {
          name: "门把手挂牌",
          specs: "8.5\" × 3.5\", 双面",
          min: "最低起订量: 500",
          price: "起价: $220"
        },
        {
          name: "易拉宝",
          specs: "33\" × 81\" 标准型: $260",
          min: "高级型: $290",
          price: "标准型: $260"
        },
        {
          name: "加粗型庭院广告牌",
          specs: "可重复使用，加粗H型支架",
          min: "最低起订量: 10",
          price: "起价: $11 / 个"
        }
      ]
    },
    included: {
      label: "包含内容",
      title: "让您看起来专业所需的一切",
      desc: "广告牌、制服、印刷材料和网站，从细节处吸引客户",
      items: [
        "Logo设计 / 翻新",
        "庭院广告牌",
        "品牌制服",
        "官方网站",
        "门把手挂牌",
        "易拉宝",
        "印刷材料",
        "NCR表单"
      ]
    },
    contact: {
      title: "联系我们",
      desc: "告诉我们您的公司情况，我们将为您推荐适合当前阶段的套餐。",
      meta: "中英文服务 · 总部位于多伦多",
      btn: "发送邮件"
    }
  }
};

export default function App() {
  const [lang, setLang] = useState<'en' | 'zh'>('en');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showWeChatQR, setShowWeChatQR] = useState(false);
  const t = translations[lang];

  const toggleLang = () => setLang(prev => prev === 'en' ? 'zh' : 'en');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-orange selection:text-white">
      {/* --- Header --- */}
      <header className="sticky top-0 z-50 bg-brand-bg/80 backdrop-blur-md py-4">
        <div className="max-w-[1220px] mx-auto px-7 flex justify-between items-center">
          <a href="/" className="flex items-center gap-2">
            <div className="h-10 flex items-center">
              <img src="/images/logo.png" alt="Logo" className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
            </div>
          </a>
          <nav className="flex items-center gap-6 text-sm font-medium text-brand-dark/80">
            <a href="#contact" className="hover:text-brand-orange transition-colors">{t.nav.contact}</a>
            <button onClick={toggleLang} className="hover:text-brand-orange transition-colors font-bold cursor-pointer">
              {t.nav.lang}
            </button>
          </nav>
        </div>
      </header>

      <main>
        {/* --- Hero --- */}
        <section className="pt-6 pb-24 lg:pb-36">
          <div className="max-w-[1220px] mx-auto px-7 grid lg:grid-cols-[470px_1fr] gap-12 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 
                className="text-tight text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-extrabold leading-[1.1]"
                dangerouslySetInnerHTML={{ __html: t.hero.title }}
              />
              <div className="mt-4 text-xl text-brand-muted font-medium">
                {t.hero.proof}
              </div>
              <div className="mt-12 flex flex-wrap gap-3">
                <a href="#case" className="h-12 px-6 rounded-xl bg-brand-orange text-white font-bold text-sm hover:scale-105 transition-transform flex items-center justify-center">
                  {t.hero.btnCase}
                </a>
                <a href="#contact" className="h-12 px-6 rounded-xl bg-brand-dark text-white font-bold text-sm hover:scale-105 transition-transform flex items-center justify-center">
                  {t.hero.btnStart}
                </a>
              </div>
              <div className="mt-12 text-[17px] text-brand-body max-w-[350px]">
                {t.hero.subtitle}
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white border border-brand-line rounded-[22px] p-2.5 shadow-2xl"
            >
              <div className="flex gap-1.5 p-1 pb-3">
                <div className="w-2 h-2 rounded-full bg-red-300" />
                <div className="w-2 h-2 rounded-full bg-yellow-300" />
                <div className="w-2 h-2 rounded-full bg-green-300" />
              </div>
              <div className="aspect-[1.03/1] rounded-xl overflow-hidden">
                <img 
                  src="/images/fuji-hero-main.jpg" 
                  alt="Fuji Roofing Project" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- Before/After (Moved Up & Reduced Space) --- */}
        <section className="py-20 bg-white" id="before-after">
          <div className="max-w-[1220px] mx-auto px-7">
            <div className="max-w-[760px] mb-12">
              <h2 className="text-tight text-4xl sm:text-5xl md:text-6xl lg:text-[76px] font-extrabold leading-[1.1]">{t.comparison.title}</h2>
              <p className="mt-4 text-[17px] text-brand-body max-w-[560px]">{t.comparison.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Before */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-brand-bg/50 border border-brand-line rounded-[28px] p-7 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 rounded-full bg-red-50 flex items-center justify-center text-red-500 font-bold text-2xl">✕</div>
                  <h3 className="text-[26px] font-extrabold">{t.comparison.before.title}</h3>
                </div>
                <div className="aspect-[1.45/1] rounded-2xl overflow-hidden mb-5 bg-slate-100">
                  <img src="/images/fuji-comparison-before.jpg" alt="Before Branding" className="w-full h-full object-cover grayscale opacity-50" referrerPolicy="no-referrer" />
                </div>
                <ul className="space-y-3">
                  {t.comparison.before.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[17px] text-brand-body">
                      <span className="text-red-500 font-bold leading-none">✕</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* After */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white border border-brand-orange rounded-[28px] p-7 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-11 h-11 rounded-full bg-brand-orange flex items-center justify-center text-white font-bold text-2xl">✓</div>
                  <h3 className="text-[26px] font-extrabold">{t.comparison.after.title}</h3>
                </div>
                <div className="aspect-[1.45/1] rounded-2xl overflow-hidden mb-5">
                  <img src="/images/fuji-comparison-after.jpg" alt="After Branding" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <ul className="space-y-3">
                  {t.comparison.after.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-[17px] text-brand-body font-medium">
                      <span className="text-brand-orange font-bold leading-none">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
            <div className="mt-8 text-center text-brand-body max-w-[760px] mx-auto text-sm">
              {t.comparison.footer}
            </div>
          </div>
        </section>

        {/* --- Case Study --- */}
        <section className="py-32 bg-brand-bg" id="case">
          <div className="max-w-[1220px] mx-auto px-7">
            <div className="text-center mb-16">
              <div className="text-sm font-bold tracking-[0.1em] uppercase text-brand-orange mb-4">Client Example</div>
              <h2 className="text-tight text-4xl sm:text-5xl lg:text-[64px] font-extrabold mb-4 leading-[1.1]">{t.caseStudy.title}</h2>
              <p className="max-w-[600px] mx-auto text-brand-muted text-base sm:text-lg font-medium">{t.caseStudy.desc}</p>
            </div>
            
            {/* Masonry Grid - Updated with User Assets */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Column 1 */}
              <div className="flex flex-col gap-6">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-500">
                  <img src="/images/fuji-sign-truck.jpg" alt="Fuji Roofing Yard Sign and Truck" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-500">
                  <img src="/images/fuji-worker-ladder.jpg" alt="Fuji Roofing Worker on Ladder" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              {/* Column 2 */}
              <div className="flex flex-col gap-6">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-500">
                  <img src="/images/fuji-sign-lawn.jpg" alt="Fuji Roofing Yard Sign on Lawn" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-square rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-500">
                  <img src="/images/fuji-door-hangers.jpg" alt="Fuji Roofing Door Hangers" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-500">
                  <img src="/images/fuji-roof-finished.jpg" alt="Fuji Roofing Finished Project" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
              {/* Column 3 */}
              <div className="flex flex-col gap-6">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg bg-white p-2 flex items-center justify-center hover:scale-[1.02] transition-transform duration-500">
                  <img src="/images/fuji-mockup.jpg" alt="Fuji Roofing Website Mockup" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                </div>
                <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-500">
                  <img src="/images/fuji-materials.jpg" alt="Fuji Roofing Branding Materials" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              </div>
            </div>

            <div className="mt-20 bg-white border border-brand-line rounded-[32px] p-8 md:p-14 grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-12 items-center shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/5 rounded-full -mr-32 -mt-32 blur-3xl" />
              <div className="relative z-10">
                <p className="text-2xl sm:text-3xl lg:text-[32px] font-bold leading-[1.1] tracking-[-0.04em] mb-6 text-brand-dark">“{t.caseStudy.quote}”</p>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange font-bold">FR</div>
                  <div>
                    <p className="font-bold text-lg">{t.caseStudy.author}</p>
                    <p className="text-brand-muted text-sm">Fuji Roofing</p>
                  </div>
                </div>
                <div className="p-6 bg-white/50 backdrop-blur-sm rounded-2xl border border-white/20">
                  <p className="text-brand-body text-sm">
                    <span className="font-bold text-brand-dark block mb-2 uppercase tracking-wider text-xs">Brand Upgrade:</span>
                    {t.caseStudy.brandline}
                  </p>
                </div>
              </div>
              <div className="relative z-10">
                <ul className="space-y-6">
                  {t.caseStudy.results.map((res, i) => (
                    <li key={i} className="flex items-center gap-4 text-xl font-bold text-brand-dark">
                      <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-white text-sm">✓</div>
                      {res}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- Included (What we do) --- */}
        <section className="py-32 bg-white" id="included">
          <div className="max-w-[1000px] mx-auto px-7">
            <div className="text-center mb-16">
              <div className="text-xs font-bold tracking-[0.2em] uppercase text-brand-orange mb-4">{t.included.label}</div>
              <h2 className="text-tight text-4xl lg:text-5xl font-extrabold mb-6">{t.included.title}</h2>
              <p className="text-brand-body text-lg max-w-[600px] mx-auto opacity-80">{t.included.desc}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
              {t.included.items.map((item, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-6 h-6 rounded-full border border-brand-orange/30 flex items-center justify-center group-hover:bg-brand-orange group-hover:border-brand-orange transition-all duration-300">
                    <Check className="w-3.5 h-3.5 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-lg font-semibold text-brand-dark/90">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Packages --- */}
        <section className="py-32 bg-brand-dark text-[#f6f3ee]" id="packages">
          <div className="max-w-[1220px] mx-auto px-7">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-7 mb-9">
              <h2 className="text-tight text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-[#f5f2ec] leading-[1.1]">{t.pricing.title}</h2>
              <p className="max-w-[420px] text-[#bbb7b0] font-medium text-sm sm:text-base">{t.pricing.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Starter - MOST POPULAR */}
              <div className="bg-brand-dark-panel border border-brand-orange rounded-[22px] p-8 relative group">
                <div className="absolute top-[-14px] right-6 bg-brand-orange text-white px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider">
                  MOST POPULAR
                </div>
                <h3 className="text-lg font-bold text-[#f5f2ec]">{t.pricing.starter.name}</h3>
                <div className="mt-1 mb-4 text-sm text-[#b8b6b0]">{t.pricing.starter.for}</div>
                <div className="text-tight text-5xl sm:text-6xl lg:text-[64px] font-extrabold text-brand-orange mb-5">{t.pricing.starter.price}</div>
                <ul className="mb-6 space-y-2 text-[#d5d1ca] text-[15px] list-disc pl-5">
                  {t.pricing.starter.features.map((f, i) => (
                    <li key={i} className={f.startsWith('sub:') ? 'list-none ml-2 opacity-80 text-sm italic' : ''}>
                      {f.startsWith('sub:') ? `(${f.replace('sub:', '')})` : f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="w-full h-[46px] rounded-xl bg-brand-orange text-white font-bold hover:brightness-110 transition-all flex items-center justify-center">
                  {t.pricing.btn}
                </a>
              </div>

              {/* Growth */}
              <div className="bg-brand-dark-panel border border-white/10 rounded-[22px] p-8 relative group hover:border-brand-orange transition-colors">
                <h3 className="text-lg font-bold text-[#f5f2ec]">{t.pricing.growth.name}</h3>
                <div className="mt-1 mb-4 text-sm text-[#b8b6b0]">{t.pricing.growth.for}</div>
                <div className="text-tight text-5xl sm:text-6xl lg:text-[64px] font-extrabold text-brand-orange mb-5">{t.pricing.growth.price}</div>
                <ul className="mb-6 space-y-2 text-[#d5d1ca] text-[15px] list-disc pl-5">
                  {t.pricing.growth.features.map((f, i) => (
                    <li key={i} className={f.startsWith('sub:') ? 'list-none ml-2 opacity-80 text-sm italic' : ''}>
                      {f.startsWith('sub:') ? `(${f.replace('sub:', '')})` : f}
                    </li>
                  ))}
                </ul>
                <a href="#contact" className="w-full h-[46px] rounded-xl bg-[#f8f7f3] text-brand-dark font-bold hover:bg-white transition-colors flex items-center justify-center">
                  {t.pricing.btn}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* --- Add-Ons --- */}
        <section className="py-32 bg-brand-bg" id="addons">
          <div className="max-w-[1220px] mx-auto px-7">
            <h2 className="text-tight text-4xl sm:text-5xl lg:text-[54px] font-extrabold leading-[1.1]">{t.addons.title}</h2>
            <p className="mt-3 text-brand-muted font-medium">{t.addons.disclaimer}</p>
            
            <div className="mt-10 grid md:grid-cols-3 gap-9">
              {t.addons.items.map((item, i) => {
                const addonImages = [
                  "/images/fuji-addon-doorhanger.jpg",
                  "/images/fuji-addon-banner.jpg",
                  "/images/fuji-addon-yardsign.jpg"
                ];
                return (
                  <div key={i} className="bg-brand-panel border border-brand-line rounded-[20px] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-[1.28/1] bg-slate-100">
                      <img src={addonImages[i]} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </div>
                    <div className="p-5 pb-6">
                      <h4 className="text-2xl font-extrabold tracking-tight leading-[1.05] mb-2.5">{item.name}</h4>
                      <p className="text-brand-muted text-sm leading-relaxed whitespace-pre-line">
                        {item.specs}
                        {"\n"}
                        {item.min}
                        {"\n"}
                        <span className="font-bold text-brand-orange">{item.price}</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* --- Contact Section (Centered with Icons) --- */}
        <section id="contact" className="pt-32 pb-0 bg-white border-t border-brand-line">
          <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
            <h2 className="text-tight text-3xl sm:text-4xl lg:text-6xl font-extrabold mb-6 leading-[1.1]">
              {t.contact.title}
            </h2>
            <p className="text-lg text-brand-body max-w-2xl mb-12">
              {t.contact.desc}
            </p>
            <div className="flex gap-8 mb-12 items-center">
              <a href="https://wa.me/12265809045" target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-full bg-brand-bg flex items-center justify-center hover:bg-green-500 hover:text-white transition-all shadow-sm">
                <MessageCircle className="w-8 h-8" />
              </a>
              {lang === 'zh' && (
                <div className="relative">
                  <button 
                    onClick={() => setShowWeChatQR(!showWeChatQR)}
                    className="w-16 h-16 rounded-full bg-brand-bg flex items-center justify-center hover:bg-[#07C160] hover:text-white transition-all shadow-sm cursor-pointer"
                  >
                    <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.225 3.85c-4.125 0-7.475 2.925-7.475 6.525 0 2.05 1.075 3.9 2.775 5.15l-.7 2.575 2.65-1.375c.25.05.5.075.75.075 4.125 0 7.475-2.925 7.475-6.525 0-3.6-3.35-6.425-7.475-6.425zm2.525 3.95c.425 0 .75.325.75.75s-.325.75-.75.75-.75-.325-.75-.75.325-.75.75-.75zm-5.05 0c.425 0 .75.325.75.75s-.325.75-.75.75-.75-.325-.75-.75.325-.75.75-.75zm11.6 4.725c-3.45 0-6.25 2.45-6.25 5.45 0 1.725.9 3.25 2.325 4.3l-.575 2.15 2.2-1.15c.2.05.425.075.625.075 3.45 0 6.25-2.45 6.25-5.45s-2.825-5.375-6.575-5.375zm2.1 3.3c.35 0 .625.275.625.625s-.275.625-.625.625-.625-.275-.625-.625.275-.625.625-.625zm-4.2 0c.35 0 .625.275.625.625s-.275.625-.625.625-.625-.275-.625-.625.275-.625.625-.625z"/>
                    </svg>
                  </button>
                  {showWeChatQR && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9, y: 10 }}
                      animate={{ opacity: 1, scale: 1, y: 0 }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 p-4 bg-white rounded-2xl shadow-2xl border border-brand-line z-50 w-48"
                    >
                      <img src="/images/wechat-qr.jpg" alt="WeChat QR Code" className="w-full h-auto rounded-lg" referrerPolicy="no-referrer" />
                      <p className="mt-2 text-xs text-brand-muted font-bold">扫码添加微信</p>
                    </motion.div>
                  )}
                </div>
              )}
              <a href="mailto:RSDESIGN.TO@outlook.com" className="w-16 h-16 rounded-full bg-brand-bg flex items-center justify-center hover:bg-blue-500 hover:text-white transition-all shadow-sm">
                <Mail className="w-8 h-8" />
              </a>
            </div>
            <div className="w-full h-px bg-brand-line" />
          </div>
        </section>
      </main>

      <footer className="py-7 pb-12 bg-white">
        <div className="max-w-[1220px] mx-auto px-7 text-center text-brand-muted text-[13px] font-medium">
          <div>RS Design © 2026 · All rights reserved</div>
        </div>
      </footer>

      {/* --- Floating Scroll to Top Button --- */}
      <motion.button
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0.5 }}
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-brand-orange text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform cursor-pointer ${!showScrollTop && 'pointer-events-none'}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </motion.button>
    </div>
  );
}
