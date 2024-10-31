"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Bot,
  DollarSign,
  LineChart,
} from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Bot className="h-6 w-6 text-primary" />
          <span className="ml-2 text-2xl font-bold">Haggle AI</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#how-it-works"
          >
            How It Works
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#pricing"
          >
            Pricing
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Negotiate Smarter with Haggle AI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Your AI-powered negotiation assistant for optimizing vendor
                  contracts and reducing software costs.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Early Access</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Key Features
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bot className="mr-2 h-6 w-6" />
                    AI-Powered Negotiations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Advanced AI algorithms handle complex negotiations, ensuring
                  the best possible outcomes for your business.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <DollarSign className="mr-2 h-6 w-6" />
                    Cost Reduction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Optimize your software subscriptions and vendor contracts to
                  significantly reduce costs.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <LineChart className="mr-2 h-6 w-6" />
                    Data-Driven Insights
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  Gain valuable insights into your negotiation processes and
                  outcomes with detailed analytics.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              How It Works
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  1
                </div>
                <h3 className="mt-4 text-xl font-bold">Connect</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Integrate Haggle AI with your existing systems and provide
                  contract details.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  2
                </div>
                <h3 className="mt-4 text-xl font-bold">Analyze</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Our AI analyzes your contracts and market data to develop
                  optimal negotiation strategies.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                  3
                </div>
                <h3 className="mt-4 text-xl font-bold">Negotiate</h3>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Haggle AI conducts negotiations on your behalf, securing the
                  best possible terms.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              What Our Clients Say
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardContent className="mt-4">
                  <p className="text-gray-500 dark:text-gray-400">
                    "Haggle AI has revolutionized our procurement process. We've
                    seen a 30% reduction in software costs since implementing
                    it."
                  </p>
                  <p className="mt-2 font-semibold">
                    - Jane Doe, CTO at TechCorp
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="mt-4">
                  <p className="text-gray-500 dark:text-gray-400">
                    "The insights provided by Haggle AI have been invaluable.
                    It's like having a team of expert negotiators working for us
                    24/7."
                  </p>
                  <p className="mt-2 font-semibold">
                    - John Smith, Procurement Manager at InnovateCo
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
              Pricing
            </h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Starter</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$499/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Up to 10 negotiations per month
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Basic analytics
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Email support
                    </li>
                  </ul>
                  <Button className="mt-6 w-full">Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$999/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Up to 50 negotiations per month
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Advanced analytics
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Priority support
                    </li>
                  </ul>
                  <Button className="mt-6 w-full">Get Started</Button>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">Custom</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Unlimited negotiations
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Custom integrations
                    </li>
                    <li className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      Dedicated account manager
                    </li>
                  </ul>
                  <Button className="mt-6 w-full">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Haggle AI. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function Link({ href, children, ...props }) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
