import React from 'react';
import { ArrowUpRight, ArrowRight, Asterisk } from 'lucide-react';
import Reveal from '@/components/Reveal';
import CountUp from '@/components/CountUp';
import { cn } from '@/lib/utils';

const EMAIL = 'vinayak0928v@gmail.com';
const PHONE = '+91 9415683046';
const PHONE_HREF = 'tel:+919415683046';
const GITHUB = 'https://github.com/Vinayak0928';
const LINKEDIN = 'https://linkedin.com/in/vinayak-singh-7451673b8';
const LEETCODE = 'https://leetcode.com/u/Viinayak/';

function CroppedWord({ word, className, textClassName }) {
    return (
        <div
            aria-hidden="true"
            className={cn(
                'pointer-events-none select-none overflow-hidden',
                className
            )}
        >
            <span
                className={cn(
                    'block whitespace-nowrap font-display font-black uppercase leading-[0.78] tracking-[-0.03em]',
                    textClassName
                )}
            >
                {word}
            </span>
        </div>
    );
}

function Header() {
    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-foreground/10 bg-background/90">
            <div className="mx-auto flex h-16 max-w-[90rem] items-center justify-between px-5 md:px-10">
                <a
                    href="#top"
                    className="flex items-center gap-2 font-display text-sm font-extrabold uppercase tracking-[0.08em]"
                >
                    <span className="inline-block h-2.5 w-2.5 bg-signal" />
                    Vinayak Singh
                </a>
                <nav className="hidden items-center gap-8 font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground/70 md:flex">
                    <a href="#work" className="transition-colors hover:text-signal">
                        Work
                    </a>
                    <a href="#skills" className="transition-colors hover:text-signal">
                        Skills
                    </a>
                    <a href="#education" className="transition-colors hover:text-signal">
                        Education
                    </a>
                    <a href="#contact" className="transition-colors hover:text-signal">
                        Contact
                    </a>
                </nav>
                <a
                    href={`mailto:${EMAIL}?subject=Project%20inquiry`}
                    className="inline-flex h-11 items-center gap-2 bg-signal px-5 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-white transition-transform active:scale-[0.98]"
                >
                    Get in touch
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
                </a>
            </div>
        </header>
    );
}

function Hero() {
    return (
        <section
            id="top"
            className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24"
        >
            <CroppedWord
                word="VINAYAK"
                className="absolute inset-x-0 bottom-[-1.5vw] z-0 opacity-[0.06]"
                textClassName="translate-x-[-4%] text-[19.5vw] text-foreground"
            />
            <div className="relative z-10 mx-auto grid w-full max-w-[90rem] grid-cols-1 items-end gap-10 px-5 md:grid-cols-12 md:px-10">
                <div className="relative z-20 md:col-span-10 lg:col-span-9">
                    <Reveal delay={0.08} y={26}>
                        <h1 className="font-display text-[13vw] font-black uppercase leading-[0.92] tracking-[-0.02em] sm:text-6xl md:text-7xl lg:text-[5.4rem]">
                            Software is a{' '}
                            <em className="font-serif-body font-light lowercase italic tracking-normal text-signal">
                                system
                            </em>
                            , not a demo.
                        </h1>
                    </Reveal>
                    <Reveal delay={0.16} y={22}>
                        <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/80 sm:text-lg md:text-xl">
                            I&apos;m Vinayak Singh, a computer science student who builds AI systems end to end. My Smart India Hackathon project, Odin, is an air-gapped agentic AI platform for refinery operations that runs LLMs entirely on-premise. I also built Nudge, a Flutter and Gemini app that turns live weather and your tastes into hobby ideas.
                        </p>
                    </Reveal>
                    <Reveal delay={0.24} y={18}>
                        <div className="mt-10 flex flex-wrap items-center gap-4">
                            <a
                                href="#work"
                                className="inline-flex h-14 items-center gap-3 bg-foreground px-8 font-display text-xs font-bold uppercase tracking-[0.2em] text-background transition-colors hover:bg-signal active:scale-[0.98]"
                            >
                                See the work
                                <ArrowRight className="h-4 w-4" strokeWidth={2.25} />
                            </a>
                            <a
                                href={GITHUB}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex h-14 items-center gap-3 border border-foreground/25 px-8 font-display text-xs font-bold uppercase tracking-[0.2em] transition-colors hover:border-signal hover:text-signal active:scale-[0.98]"
                            >
                                GitHub
                                <ArrowUpRight className="h-4 w-4" strokeWidth={2.25} />
                            </a>
                        </div>
                    </Reveal>

                </div>
            </div>
        </section>
    );
}

function Manifesto() {
    return (
        <section className="relative overflow-hidden py-28 md:py-40">
            <CroppedWord
                word="BUILD"
                className="absolute right-0 top-10 z-0 opacity-[0.07]"
                textClassName="translate-x-[18%] text-[22vw] text-foreground"
            />
            <div className="relative z-10 mx-auto max-w-3xl px-5 md:px-10">
                <Reveal>
                    <p className="font-display text-[11px] font-bold uppercase tracking-[0.28em] text-signal">
                        The short version
                    </p>
                </Reveal>
                <Reveal delay={0.1}>
                    <p className="mt-8 text-2xl leading-snug md:text-[2.6rem] md:leading-[1.25]">
                        Most student projects stop at a screenshot. I care about
                        the part that has to survive contact with a real
                        constraint —{' '}
                        <span className="marker px-1">air-gapped models</span>,
                        audit trails, offline sync, and calculation engines that
                        answer to{' '}
                        <span className="marker px-1">correctness</span>.
                    </p>
                </Reveal>
                <Reveal delay={0.2}>
                    <p className="mt-10 flex items-center gap-1.5 text-sm italic text-foreground/60">
                        <Asterisk className="h-4 w-4 text-signal" strokeWidth={2.5} />
                        Python, Java, TypeScript — allergic to demo-only code
                    </p>
                </Reveal>
            </div>
        </section>
    );
}

const METRICS = [
    { value: 250, suffix: '+', label: 'LeetCode solved', note: 'Java · arrays, trees, graphs, DP' },
    { value: 1480, suffix: '', label: 'Contest rating', note: 'LeetCode competitive programming' },
    { value: 2, suffix: '', label: 'Shipped products', note: 'Odin workbench · Nudge' },
    { value: 90, suffix: '.25%', label: 'Class XII', note: 'Holy Cross School, ICSE' },
];

function Metrics() {
    return (
        <section className="border-y border-foreground/15">
            <div className="mx-auto grid max-w-[90rem] grid-cols-2 md:grid-cols-4 md:divide-x md:divide-foreground/10">
                {METRICS.map((m, i) => (
                    <div
                        key={m.label}
                        className="border-foreground/10 p-8 odd:border-r md:p-12 [&:nth-child(-n+2)]:border-b md:[&:nth-child(-n+2)]:border-b-0"
                    >
                        <Reveal delay={i * 0.08} y={16}>
                            <p className="font-display text-5xl font-black tracking-[-0.02em] md:text-6xl">
                                <CountUp
                                    value={m.value}
                                    prefix={m.prefix || ''}
                                    suffix={m.suffix || ''}
                                />
                            </p>
                            <p className="mt-4 font-display text-[11px] font-bold uppercase tracking-[0.22em]">
                                {m.label}
                            </p>
                            <p className="mt-1 text-sm italic text-foreground/55">
                                {m.note}
                            </p>
                        </Reveal>
                    </div>
                ))}
            </div>
        </section>
    );
}

const PROJECTS = [
    {
        years: 'SIH · MRPL',
        role: 'Odin',
        company: 'Sovereign on-premise agentic AI workbench',
        stack: 'Python · FastAPI · Ollama · vLLM · Docker · SQLite',
        href: 'https://github.com/Vinayak0928/odin',
        result:
            'Air-gapped platform for refinery operations. Open-weight multimodal models (Qwen2.5-VL, DeepSeek-R1) run locally through Ollama, vLLM, and llama.cpp so inspection data never leaves the plant.',
        points: [
            'SHA-256 chained Merkle DAG audit trail for every prompt, calculation, and inspection.',
            'Scanned P&ID pipeline: 1024×1024 tiles, 200px overlap, ISA-5.1 loops, HAZOP flags.',
            'API 510/570/610, heat exchanger, and crude-blending engines plus an OISD-105 turnaround planner.',
            'RBAC across 5 departments. Docker Compose profiles for CPU, NVIDIA, and AMD GPUs.',
        ],
    },
    {
        years: 'Mobile',
        role: 'Nudge',
        company: 'AI hobby discovery & digital memory',
        stack: 'Flutter · Dart · Firebase · Gemini API',
        href: 'https://github.com/Vinayak0928/nudge',
        result:
            'Swipe-based app that recommends activities from live weather and a scoring model of what the person actually likes — then keeps the memory of what they did.',
        points: [
            'Structured JSON prompt schemas for Gemini, 99% schema compliance on multi-day itineraries.',
            'Local cache with Cloud Firestore sync and offline persistence — 35% fewer redundant API calls.',
            'Firebase Auth and reactive state across 5+ core screens with tighter render cycles.',
        ],
    },
];

function Work() {
    return (
        <section id="work" className="mx-auto max-w-[90rem] px-5 py-28 md:px-10 md:py-40">
            <div className="flex flex-wrap items-end justify-between gap-6">
                <Reveal>
                    <p className="font-display text-[11px] font-bold uppercase tracking-[0.28em] text-signal">
                        Selected work
                    </p>
                    <h2 className="mt-4 font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.02em] md:text-7xl">
                        The record.
                    </h2>
                </Reveal>
                <Reveal delay={0.12}>
                    <p className="max-w-xs text-sm italic leading-snug text-foreground/60">
                        two products, one throughline —{' '}
                        <span className="text-signal">*</span> software that
                        answers to a constraint
                    </p>
                </Reveal>
            </div>
            <div className="mt-16 border-t border-foreground/15">
                {PROJECTS.map((r, i) => (
                    <Reveal key={r.role} delay={i * 0.06} y={20}>
                        <article className="grid grid-cols-1 gap-4 border-b border-foreground/15 py-10 md:grid-cols-12 md:gap-6 md:py-12">
                            <p className="font-display text-xs font-bold uppercase tracking-[0.2em] text-signal md:col-span-1">
                                {String(i + 1).padStart(2, '0')}
                            </p>
                            <p className="font-display text-sm font-semibold uppercase tracking-[0.14em] text-foreground/60 md:col-span-2">
                                {r.years}
                            </p>
                            <div className="md:col-span-4">
                                <h3 className="font-display text-2xl font-extrabold uppercase tracking-[-0.01em] md:text-3xl">
                                    {r.role}
                                </h3>
                                <p className="mt-1 text-base italic text-foreground/60">
                                    {r.company}
                                </p>
                                <p className="mt-3 font-display text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/50">
                                    {r.stack}
                                </p>
                                <a
                                    href={r.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-5 inline-flex items-center gap-1.5 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-signal"
                                >
                                    View on GitHub
                                    <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
                                </a>
                            </div>
                            <div className="md:col-span-5">
                                <p className="text-base leading-relaxed text-foreground/75">
                                    {r.result}
                                </p>
                                <ul className="mt-5 space-y-3">
                                    {r.points.map((point) => (
                                        <li
                                            key={point}
                                            className="flex gap-3 text-sm leading-relaxed text-foreground/70"
                                        >
                                            <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 bg-signal" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}

const SKILL_GROUPS = [
    {
        n: '01',
        title: 'Languages',
        body: 'Python, Java, JavaScript, TypeScript, SQL. The daily set — from DSA contests to typed product code.',
    },
    {
        n: '02',
        title: 'AI & ML',
        body: 'LLM integration, prompt engineering, Gemini API, Ollama, vLLM, PyTorch. Models that run where the data is allowed to live.',
    },
    {
        n: '03',
        title: 'Backend & web',
        body: 'FastAPI, Node.js, Express.js, React.js, Flutter, RESTful APIs. Interfaces and the services behind them.',
    },
    {
        n: '04',
        title: 'Data & ops',
        body: 'PostgreSQL, SQLite, Firebase (Firestore, Auth). Docker, Git, GitHub Actions, Linux.',
    },
];

const LINKS = [
    { name: 'GitHub', href: GITHUB, note: 'github.com/Vinayak0928' },
    { name: 'LeetCode', href: LEETCODE, note: '250+ solved · rating 1480' },
    { name: 'LinkedIn', href: LINKEDIN, note: 'vinayak-singh-7451673b8' },
];

function Skills() {
    return (
        <section id="skills" className="relative overflow-hidden border-t border-foreground/15 py-28 md:py-40">
            <CroppedWord
                word="STACK"
                className="absolute left-0 top-8 z-0 opacity-[0.06]"
                textClassName="translate-x-[-18%] text-[20vw] text-foreground"
            />
            <div className="relative z-10 mx-auto max-w-[90rem] px-5 md:px-10">
                <Reveal>
                    <p className="font-display text-[11px] font-bold uppercase tracking-[0.28em] text-signal">
                        What I work in
                    </p>
                    <h2 className="mt-4 font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.02em] md:text-7xl">
                        The stack.
                    </h2>
                </Reveal>

                <div className="mt-16 grid grid-cols-1 gap-px border border-foreground/15 bg-foreground/15 md:grid-cols-2">
                    {SKILL_GROUPS.map((s, i) => (
                        <Reveal key={s.n} delay={i * 0.07} y={20} className="bg-background">
                            <div className="flex h-full flex-col p-8 md:p-12">
                                <p className="font-display text-xs font-bold tracking-[0.2em] text-signal">
                                    {s.n}
                                </p>
                                <h3 className="mt-4 font-display text-2xl font-extrabold uppercase tracking-[-0.01em] md:text-3xl">
                                    {s.title}
                                </h3>
                                <p className="mt-4 max-w-md text-base leading-relaxed text-foreground/75">
                                    {s.body}
                                </p>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="mt-16 grid grid-cols-1 border-t border-foreground/15 md:grid-cols-3">
                    {LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex items-end justify-between gap-4 border-b border-foreground/15 py-8 transition-colors hover:text-signal md:border-b-0 md:border-r md:px-8 md:last:border-r-0 md:first:pl-0"
                        >
                            <span>
                                <span className="block font-display text-xl font-extrabold uppercase tracking-[0.04em]">
                                    {link.name}
                                </span>
                                <span className="mt-1 block text-sm italic text-foreground/55 group-hover:text-signal/80">
                                    {link.note}
                                </span>
                            </span>
                            <ArrowUpRight className="mb-1 h-5 w-5 shrink-0" strokeWidth={2.25} />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Education() {
    return (
        <section id="education" className="mx-auto max-w-[90rem] px-5 py-28 md:px-10 md:py-40">
            <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12">
                <div className="md:col-span-5">
                    <Reveal>
                        <p className="font-display text-[11px] font-bold uppercase tracking-[0.28em] text-signal">
                            The person
                        </p>
                        <h2 className="mt-4 font-display text-4xl font-black uppercase leading-[0.92] tracking-[-0.02em] md:text-6xl">
                            Student now,
                            <br />
                            operator{' '}
                            <em className="font-serif-body font-light lowercase italic text-signal">
                                later
                            </em>
                            .
                        </h2>
                    </Reveal>
                    <Reveal delay={0.12}>
                        <p className="mt-8 text-lg leading-relaxed text-foreground/75">
                            B.Tech in Computer Science & Engineering at GLA
                            University, 2025 to 2029. Coursework so far: data
                            structures, object-oriented programming, DBMS,
                            operating systems, computer networks, software
                            engineering.
                        </p>
                        <p className="mt-5 text-lg leading-relaxed text-foreground/75">
                            Before that, Holy Cross School (ICSE) — Class XII
                            at 90.25%, Class X at 91.4%. The habit that stuck
                            is the same one the projects use: write it down,
                            then make it hold.
                        </p>
                    </Reveal>
                </div>
                <div className="md:col-span-6 md:col-start-7">
                    <div className="border-t border-foreground/15">
                        <Reveal y={16}>
                            <div className="grid grid-cols-1 gap-2 border-b border-foreground/15 py-8 md:grid-cols-12">
                                <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-signal md:col-span-3">
                                    2025 — 2029
                                </p>
                                <div className="md:col-span-9">
                                    <h3 className="font-display text-2xl font-extrabold uppercase">
                                        GLA University
                                    </h3>
                                    <p className="mt-1 italic text-foreground/65">
                                        B.Tech, Computer Science & Engineering · expected
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal delay={0.08} y={16}>
                            <div className="grid grid-cols-1 gap-2 border-b border-foreground/15 py-8 md:grid-cols-12">
                                <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-signal md:col-span-3">
                                    School
                                </p>
                                <div className="md:col-span-9">
                                    <h3 className="font-display text-2xl font-extrabold uppercase">
                                        Holy Cross School
                                    </h3>
                                    <p className="mt-1 italic text-foreground/65">
                                        ICSE · Class XII 90.25% · Class X 91.4%
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal delay={0.16} y={16}>
                            <div className="grid grid-cols-1 gap-2 py-8 md:grid-cols-12">
                                <p className="font-display text-xs font-bold uppercase tracking-[0.18em] text-signal md:col-span-3">
                                    Contests
                                </p>
                                <div className="md:col-span-9">
                                    <h3 className="font-display text-2xl font-extrabold uppercase">
                                        250+ problems
                                    </h3>
                                    <p className="mt-1 italic text-foreground/65">
                                        LeetCode in Java · contest rating 1480 · arrays, trees, graphs, dynamic programming
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Contact() {
    return (
        <footer id="contact" className="relative overflow-hidden bg-foreground text-background">
            <CroppedWord
                word="HELLO"
                className="relative z-0 mt-10"
                textClassName="translate-x-[-6%] text-[24vw] text-background/10"
            />
            <div className="relative z-10 mx-auto -mt-[6vw] max-w-[90rem] px-5 pb-16 md:px-10">
                <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
                    <div className="md:col-span-7">
                        <Reveal>
                            <h2 className="font-display text-5xl font-black uppercase leading-[0.9] tracking-[-0.02em] md:text-7xl">
                                Build something that has to{' '}
                                <span className="text-signal">hold</span>.
                            </h2>
                        </Reveal>
                        <Reveal delay={0.12}>
                            <p className="mt-8 max-w-md text-lg leading-relaxed text-background/70">
                                Open to internships and collaborations in AI,
                                backend, and full-stack work. If the problem
                                has a real constraint, I want it.
                            </p>
                        </Reveal>
                    </div>
                    <div className="md:col-span-4 md:col-start-9">
                        <Reveal delay={0.18}>
                            <div className="panel-dark p-8">
                                <p className="font-display text-[11px] font-bold uppercase tracking-[0.28em] text-signal">
                                    Direct line
                                </p>
                                <a
                                    href={`mailto:${EMAIL}`}
                                    className="mt-4 block break-all font-display text-lg font-extrabold uppercase tracking-[0.02em] underline decoration-signal decoration-2 underline-offset-8 transition-colors hover:text-signal"
                                >
                                    {EMAIL}
                                </a>
                                <a
                                    href={PHONE_HREF}
                                    className="mt-4 block font-display text-lg font-extrabold tracking-[0.04em] text-background/90 transition-colors hover:text-signal"
                                >
                                    {PHONE}
                                </a>
                                <div className="mt-8 space-y-3 text-base text-background/70">
                                    <p>
                                        <a
                                            href={GITHUB}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1.5 underline decoration-background/30 underline-offset-4 transition-colors hover:text-signal"
                                        >
                                            GitHub
                                            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
                                        </a>
                                    </p>
                                    <p>
                                        <a
                                            href={LINKEDIN}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1.5 underline decoration-background/30 underline-offset-4 transition-colors hover:text-signal"
                                        >
                                            LinkedIn
                                            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
                                        </a>
                                    </p>
                                    <p>
                                        <a
                                            href={LEETCODE}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1.5 underline decoration-background/30 underline-offset-4 transition-colors hover:text-signal"
                                        >
                                            LeetCode
                                            <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2.25} />
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
                <div className="mt-20 flex flex-wrap items-center justify-between gap-4 border-t border-background/15 pt-8 font-display text-[11px] font-semibold uppercase tracking-[0.22em] text-background/50">
                    <p>© 2026 Vinayak Singh</p>
                    <p>AI/ML & Full Stack</p>
                </div>
            </div>
        </footer>
    );
}

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Manifesto />
                <Metrics />
                <Work />
                <Skills />
                <Education />
            </main>
            <Contact />
        </>
    );
}
