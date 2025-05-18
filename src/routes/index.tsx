import { Button } from "@/components/ui/button";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Code2, Layers, Paintbrush } from "lucide-react";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="flex flex-col min-h-screen p-4">
      <header className="mt-3">
        <div className="container flex items-center justify-between mx-auto">
          <Link to="/" className="flex items-center gap-2">
            <Layers className="w-6 h-6" />
            <span className="text-xl font-bold">Shadbits</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link
              to="/"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              to="/browse"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Browse
            </Link>
            <Link
              to="/"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Docs
            </Link>
          </nav>
          <Link to="/browse">
            <Button>Explore Components</Button>
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Beautiful UI Components for{" "}
                  <span className="text-primary">shadcn/ui</span>
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Discover, copy, and use custom-styled components that extend
                  the shadcn/ui library.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link to="/browse">
                  <Button size="lg" className="gap-1">
                    Browse Components
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Paintbrush className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Custom Styles</h3>
                  <p className="text-muted-foreground">
                    Beautifully designed variants and styles that extend the
                    shadcn/ui library.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code2 className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Copy & Paste</h3>
                  <p className="text-muted-foreground">
                    Simply copy the code and paste it into your project. No
                    additional dependencies.
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4 text-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Layers className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Composable</h3>
                  <p className="text-muted-foreground">
                    All components follow the same composable pattern as
                    shadcn/ui.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to enhance your UI?
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Start browsing our collection of custom components and elevate
                  your project today.
                </p>
              </div>
              <Link to="/browse">
                <Button size="lg">Get Started</Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between md:py-12 mx-auto">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Shadbits. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 text-sm">
            <Link
              to="/"
              className="text-muted-foreground hover:underline underline-offset-4"
            >
              Terms
            </Link>
            <Link
              to="/"
              className="text-muted-foreground hover:underline underline-offset-4"
            >
              Privacy
            </Link>
            <Link
              to="/"
              className="text-muted-foreground hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
