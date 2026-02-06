'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import {
    Users, Mail, CheckCircle2, TrendingUp,
    MessageSquare, Calendar, BarChart3,
    Zap, Shield, Clock, ArrowRight,
    Database, Sparkles
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useRef } from 'react';

export default function HomePage() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

    const features = [
        {
            icon: Users,
            title: "Customer Management",
            description: "Track every lead from first contact to closed deal. Manage customer data, interactions, and complete history in one centralized location."
        },
        {
            icon: Mail,
            title: "Email Integration",
            description: "Connect multiple email accounts seamlessly. Send, receive, and track emails with full conversation threading and smart organization."
        },
        {
            icon: MessageSquare,
            title: "Real-time Messaging",
            description: "Instant team communication with read receipts, file sharing, and group chats. Collaborate without leaving your workflow."
        },
        {
            icon: CheckCircle2,
            title: "Task Management",
            description: "Create, assign, and track tasks effortlessly. Set priorities, due dates, and receive intelligent notifications."
        },
        {
            icon: BarChart3,
            title: "Analytics & Reports",
            description: "Visual dashboards revealing sales pipeline health, conversion rates, and team performance metrics at a glance."
        },
        {
            icon: Calendar,
            title: "Lead Scoring",
            description: "Automatically score and prioritize leads. Focus your energy on the most promising opportunities with data-driven insights."
        }
    ];

    const benefits = [
        {
            icon: TrendingUp,
            title: "Increase Sales",
            stat: "35%",
            description: "Average increase in closed deals with organized lead tracking"
        },
        {
            icon: Clock,
            title: "Save Time",
            stat: "10hrs",
            description: "Saved per week through automation and unified dashboard"
        },
        {
            icon: Shield,
            title: "Never Lose Data",
            stat: "100%",
            description: "All interactions and files stored securely and accessible"
        },
        {
            icon: Zap,
            title: "Work Faster",
            stat: "2x",
            description: "Productivity boost with quick actions and smart search"
        }
    ];

    const capabilities = [
        "Track unlimited customers and leads",
        "Multi-account email management",
        "Real-time team collaboration",
        "Custom lead stages and scoring",
        "File attachments and document storage",
        "Activity logs and audit trails",
        "Advanced search and filtering",
        "Mobile-responsive interface",
        "Facebook Lead Gen integration",
        "WhatsApp and call logging",
        "Proposal and invoice tracking",
        "Customizable workflows"
    ];

    return (
        <main ref={containerRef} className="min-h-screen bg-zinc-950 text-white overflow-x-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-red-900/20 via-zinc-950 to-zinc-950" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5" />
            </div>

            {/* Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="border-b border-zinc-800/50 bg-zinc-950/80 backdrop-blur-xl sticky top-0 z-50"
            >
                <div className="container mx-auto px-6 h-20 flex items-center justify-between">
                    <motion.div
                        className="flex items-center gap-3"
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.2 }}
                    >
                        <div className="relative">
                            <Database className="w-7 h-7 text-red-500" />
                            <motion.div
                                className="absolute inset-0 bg-red-500/20 blur-xl"
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity }}
                            />
                        </div>
                        <span className="font-bold text-2xl tracking-tight">FliphatMedia CRM</span>
                    </motion.div>
                    <Link href="/admin">
                        <Button className="bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/20 hover:shadow-red-600/40">
                            Access Dashboard <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </Link>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <section className="relative container mx-auto px-6 py-32 lg:py-48">
                <motion.div
                    style={{ opacity, scale }}
                    className="max-w-5xl mx-auto text-center"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-red-500" />
                        <span className="text-sm font-medium text-red-400">Complete Sales Management Platform</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-6xl lg:text-8xl font-black tracking-tight mb-8 leading-[1.1]"
                    >
                        Your Complete{' '}
                        <span className="relative inline-block">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500 animate-gradient">
                                Sales CRM
                            </span>
                            <motion.div
                                className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-orange-500/20 blur-2xl -z-10"
                                animate={{ opacity: [0.5, 0.8, 0.5] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            />
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-2xl lg:text-3xl text-zinc-400 mb-12 leading-relaxed font-light max-w-4xl mx-auto"
                    >
                        Manage customers, track leads, send emails, and close deals faster.
                        Everything your sales team needs in one powerful, intuitive platform.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        <Link href="/admin">
                            <Button
                                size="lg"
                                className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-lg px-10 py-7 shadow-2xl shadow-red-600/30 hover:shadow-red-600/50 transition-all duration-300"
                            >
                                Get Started <ArrowRight className="w-5 h-5 ml-2" />
                            </Button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 rounded-full border-2 border-zinc-700 flex items-start justify-center p-2"
                    >
                        <motion.div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
                    </motion.div>
                </motion.div>
            </section>

            {/* Features Grid */}
            <section className="container mx-auto px-6 py-32 border-t border-zinc-800/50">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Powerful Features</h2>
                    <p className="text-xl lg:text-2xl text-zinc-400 font-light max-w-2xl mx-auto">
                        Everything you need to manage your sales pipeline effectively
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            className="group relative bg-gradient-to-br from-zinc-900/50 to-zinc-900/30 border border-zinc-800/50 rounded-3xl p-8 hover:border-red-500/50 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-orange-500/0 group-hover:from-red-500/5 group-hover:to-orange-500/5 rounded-3xl transition-all duration-300" />

                            <div className="relative">
                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600/20 to-orange-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <feature.icon className="w-7 h-7 text-red-500" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 tracking-tight">{feature.title}</h3>
                                <p className="text-zinc-400 leading-relaxed text-lg">{feature.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Benefits Section */}
            <section className="container mx-auto px-6 py-32 border-t border-zinc-800/50">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Why Choose Our CRM?</h2>
                    <p className="text-xl lg:text-2xl text-zinc-400 font-light max-w-2xl mx-auto">
                        Built for sales teams who want to win
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="text-center group"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                                className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-red-600/30"
                            >
                                <benefit.icon className="w-10 h-10" />
                                <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 blur-xl group-hover:blur-2xl transition-all" />
                            </motion.div>
                            <div className="text-4xl font-black text-red-500 mb-2">{benefit.stat}</div>
                            <h3 className="text-xl font-bold mb-3 tracking-tight">{benefit.title}</h3>
                            <p className="text-zinc-400 leading-relaxed">{benefit.description}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Capabilities List */}
            <section className="container mx-auto px-6 py-32 border-t border-zinc-800/50">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">What You Can Do</h2>
                        <p className="text-xl lg:text-2xl text-zinc-400 font-light">
                            Complete toolkit for sales success
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {capabilities.map((capability, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.5 }}
                                whileHover={{ x: 5, transition: { duration: 0.2 } }}
                                className="flex items-start gap-4 bg-zinc-900/30 rounded-2xl p-6 border border-zinc-800/30 hover:border-red-500/30 transition-all duration-300"
                            >
                                <CheckCircle2 className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                                <span className="text-zinc-300 text-lg leading-relaxed">{capability}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-6 py-32 border-t border-zinc-800/50">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative bg-gradient-to-br from-red-600 to-orange-600 rounded-[2rem] p-16 overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                        <div className="relative z-10 text-center">
                            <h2 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Ready to Transform Your Sales?</h2>
                            <p className="text-2xl mb-10 text-red-50 font-light leading-relaxed">
                                Join sales teams who are closing more deals with our CRM
                            </p>
                            <Link href="/admin">
                                <Button
                                    size="lg"
                                    className="bg-white text-red-600 hover:bg-zinc-100 text-xl px-12 py-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                                >
                                    Access Your Dashboard <ArrowRight className="w-6 h-6 ml-3" />
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-zinc-800/50 py-16 bg-zinc-950/50">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                            <div className="flex items-center gap-3">
                                <Database className="w-6 h-6 text-red-500" />
                                <span className="font-bold text-xl">FliphatMedia CRM</span>
                            </div>

                            <div className="flex flex-col md:flex-row items-center gap-6 text-zinc-400">
                                <a
                                    href="mailto:contact@fliphatmedia.com"
                                    className="flex items-center gap-2 hover:text-red-500 transition-colors"
                                >
                                    <Mail className="w-5 h-5" />
                                    <span>contact@fliphatmedia.com</span>
                                </a>
                                <a
                                    href="tel:+919602003790"
                                    className="flex items-center gap-2 hover:text-red-500 transition-colors"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>+91 96020 03790</span>
                                </a>
                            </div>
                        </div>

                        <div className="text-center pt-8 border-t border-zinc-800/50">
                            <p className="text-zinc-500">&copy; 2026 FliphatMedia CRM. All rights reserved.</p>
                        </div>
                    </div>
                </div>
            </footer>

            <style jsx global>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
        </main>
    );
}
