"use client";
import React, { useEffect, useState } from "react";
import {
  Bell,
  Clock,
  Server,
  ArrowRight,
  Check,
  Globe,
  Shield,
  ChartBar,
  Zap,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { StatCard } from "@/components/StatCard";
import { SocialIcon } from "@/components/SocialIcon";
import { PricingCard } from "@/components/PricingCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { FeatureCard } from "@/components/Featurecard";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white dark:from-gray-950 dark:via-blue-950 dark:to-black dark:text-white transition-colors duration-300">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-cyan-400/10 blur-3xl"></div>
        <div className="absolute top-1/3 -left-40 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative container mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm border border-cyan-500/20">
              <div className="flex items-center space-x-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span>Next-Gen Monitoring</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent leading-tight tracking-tight">
              Real-time Service Intelligence
            </h1>
            <p className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-lg">
              Predictive monitoring with AI-powered insights. Stay ahead of
              outages before they impact your business.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => router.push("/dashboard")}
                className="group px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex items-center justify-center"
              >
                Launch Console
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-6 py-3.5 border-2 border-gray-300 dark:border-gray-700 rounded-xl hover:border-cyan-400 dark:hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 dark:text-white backdrop-blur-sm">
                Live Demo
              </button>
            </div>
            <div className="mt-8 flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 ring-2 ring-white dark:ring-gray-900 flex items-center justify-center text-white text-xs"
                  >
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div>
                <span className="font-semibold">10,000+</span> developers trust
                UptimeIO
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-40 animate-pulse transition"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 group transition-all duration-300 hover:shadow-cyan-500/20 hover:-translate-y-1">
              <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40 z-10"></div>
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
                alt="Dashboard"
                className="w-full h-auto scale-105 hover:scale-110 transition-transform duration-700"
                width={800}
                height={600}
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md rounded-lg p-4 z-20 border border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 bg-green-400 rounded-full"></div>
                  <div className="text-sm font-medium text-white">
                    All systems operational
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <StatCard value="99.99%" label="Uptime Guarantee" />
            <StatCard value="5ms" label="Response Time" />
            <StatCard value="10K+" label="Active Users" />
            <StatCard value="24/7" label="Global Monitoring" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 text-sm font-medium mb-4 backdrop-blur-sm border border-cyan-500/20">
              Capabilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-4">
              Intelligent Monitoring Ecosystem
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Our platform combines cutting-edge technologies to provide
              unparalleled visibility into your systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Bell className="h-8 w-8 text-cyan-500" />}
              title="Predictive Alerts"
              description="AI-powered anomaly detection predicts potential issues before they cause downtime."
            />
            <FeatureCard
              icon={<Globe className="h-8 w-8 text-cyan-500" />}
              title="Global Edge Network"
              description="Monitor from 200+ locations worldwide with millisecond precision."
            />
            <FeatureCard
              icon={<ChartBar className="h-8 w-8 text-cyan-500" />}
              title="Real-time Analytics"
              description="Interactive dashboards with ML-enhanced insights and performance metrics."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-cyan-500" />}
              title="Quantum-safe Security"
              description="Enterprise-grade encryption and advanced authentication protocols."
            />
            <FeatureCard
              icon={<Server className="h-8 w-8 text-cyan-500" />}
              title="Multi-cloud Integration"
              description="Seamless monitoring across AWS, Azure, GCP and private infrastructure."
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-cyan-500" />}
              title="Time Travel Debugging"
              description="Rewind and replay historical data to troubleshoot past incidents."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section (New) */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 text-sm font-medium mb-4 backdrop-blur-sm border border-cyan-500/20">
              Success Stories
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              See how companies are using UptimeIO to transform their monitoring
              infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              quote="UptimeIO helped us reduce our incident response time by 73%. The predictive alerts are a game-changer."
              author="Alex Morgan"
              role="CTO at TechFlow"
              avatarLetter="A"
            />
            <TestimonialCard
              quote="The global monitoring capabilities give us confidence that our services are performing well worldwide."
              author="Sarah Chen"
              role="DevOps Lead at CloudScale"
              avatarLetter="S"
            />
            <TestimonialCard
              quote="We've saved countless hours of debugging with the time travel feature. It's like having a time machine for our systems."
              author="Marcus Johnson"
              role="SRE at DataStream"
              avatarLetter="M"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-500 dark:text-cyan-400 text-sm font-medium mb-4 backdrop-blur-sm border border-cyan-500/20">
              Pricing
            </div>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent mb-4">
              Scale with your business
            </h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Flexible plans to meet your needs, from startups to enterprise
              organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Launch"
              price="39"
              features={[
                "20 monitors",
                "30-second checks",
                "Email & Slack alerts",
                "10 team members",
                "7-day data retention",
              ]}
            />
            <PricingCard
              title="Scale"
              price="99"
              featured={true}
              features={[
                "100 monitors",
                "15-second checks",
                "All notification channels",
                "Unlimited team members",
                "30-day data retention",
                "API access & webhooks",
              ]}
            />
            <PricingCard
              title="Enterprise"
              price="249"
              features={[
                "Unlimited monitors",
                "5-second checks",
                "Priority 24/7 support",
                "Custom integrations",
                "1-year data retention",
                "99.99% SLA guarantee",
              ]}
            />
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Need a custom solution?
            </p>
            <button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-xl hover:border-cyan-400 dark:hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 dark:text-white backdrop-blur-sm">
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-700"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0xMnY2aDZ2LTZoLTZ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Ready to revolutionize your monitoring?
          </h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join thousands of companies that trust UptimeIO for their critical
            infrastructure monitoring.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-white text-cyan-600 font-medium rounded-xl hover:bg-gray-100 transition hover:shadow-lg">
              Start Your Free Trial
            </button>
            <button className="px-8 py-4 bg-transparent text-white border-2 border-white/30 font-medium rounded-xl hover:bg-white/10 transition">
              Schedule a Demo
            </button>
          </div>
          <div className="mt-12 pt-12 border-t border-white/20">
            <div className="flex flex-wrap justify-center gap-8 opacity-80">
              <div className="text-white font-bold text-xl">Google</div>
              <div className="text-white font-bold text-xl">Microsoft</div>
              <div className="text-white font-bold text-xl">Amazon</div>
              <div className="text-white font-bold text-xl">Netflix</div>
              <div className="text-white font-bold text-xl">Airbnb</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2">
                <Zap className="h-6 w-6 text-cyan-500" />
                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  UptimeIO
                </span>
              </div>
              <p className="mt-4 text-gray-400">
                The future of service reliability.
              </p>
              <div className="flex space-x-4 mt-6">
                <SocialIcon icon="twitter" />
                <SocialIcon icon="github" />
                <SocialIcon icon="linkedin" />
                <SocialIcon icon="youtube" />
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-lg">Platform</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-lg">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Press
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-6 text-lg">Resources</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Compliance
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-cyan-400 transition-colors">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              &copy; 2025 UptimeIO. All rights reserved.
            </p>
            <div className="flex space-x-8 text-sm text-gray-500">
              <a href="#" className="hover:text-gray-300 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-gray-300 transition-colors">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
