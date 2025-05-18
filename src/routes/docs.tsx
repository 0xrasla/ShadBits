import { CodeBlock } from "@/components/code-block";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Layers } from "lucide-react";

export const Route = createFileRoute("/docs")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container flex items-center justify-between h-16 px-4 md:px-6 mx-auto">
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
              to="/docs"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Docs
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-1 container px-4 py-8 md:px-6 md:py-12 mx-auto">
        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">Documentation</h1>
            <p className="text-muted-foreground">
              Learn how to use Shadbits components in your projects.
            </p>
          </div>

          <Tabs defaultValue="getting-started" className="w-full">
            <TabsList className="w-full md:w-auto grid grid-cols-3">
              <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              <TabsTrigger value="installation">Installation</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
            </TabsList>
            <TabsContent value="getting-started" className="space-y-6 mt-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">
                  Getting Started with Shadbits
                </h2>
                <p>
                  Shadbits is a collection of custom styled components built on
                  top of shadcn/ui. These components are designed to be easily
                  integrated into your Next.js or React projects.
                </p>
                <p>
                  All components are built using Tailwind CSS and follow the
                  same composable pattern as shadcn/ui, making them easy to
                  customize and extend.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Prerequisites</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>A Next.js or React project</li>
                  <li>shadcn/ui installed in your project</li>
                  <li>Tailwind CSS configured</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Quick Start</h3>
                <p>
                  The fastest way to get started is to browse our component
                  library, find a component you like, and copy the code directly
                  into your project.
                </p>
                <Link to="/browse">
                  <Button className="gap-1">
                    Browse Components
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </TabsContent>
            <TabsContent value="installation" className="space-y-6 mt-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Installation</h2>
                <p>
                  Shadbits components are designed to be copied and pasted into
                  your project. There's no package to install.
                </p>
                <p>
                  However, you need to have shadcn/ui installed in your project
                  first.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Installing shadcn/ui</h3>
                <p>
                  If you haven't already installed shadcn/ui, you can do so by
                  following these steps:
                </p>
                <CodeBlock
                  code={`# For Next.js projects
npx shadcn@latest init

# Follow the prompts to configure your project`}
                  language="bash"
                />
                <p>
                  Then, install the base components that our custom components
                  extend:
                </p>
                <CodeBlock
                  code={`# Install the button component
npx shadcn@latest add button

# Install the tabs component
npx shadcn@latest add tabs

# Install the badge component
npx shadcn@latest add badge`}
                  language="bash"
                />
              </div>
            </TabsContent>
            <TabsContent value="usage" className="space-y-6 mt-6">
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Usage</h2>
                <p>
                  Using Shadbits components is simple. Just copy the component
                  code from our library and paste it into your project.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">
                  Example: Using a Custom Button
                </h3>
                <p>
                  Here's how to use a custom button component from Shadbits:
                </p>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    <p>First, copy the component code from our library:</p>
                    <CodeBlock
                      code={`import { cn } from "@/lib/utils"
import { Button, type ButtonProps } from "@/components/ui/button"
import { forwardRef } from "react"

export const GradientButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-none shadow-md",
          className
        )}
        {...props}
      />
    )
  }
)
GradientButton.displayName = "GradientButton"`}
                      language="tsx"
                    />
                  </li>
                  <li>
                    <p>
                      Save this file in your project, for example at{" "}
                      <code>components/custom/gradient-button.tsx</code>
                    </p>
                  </li>
                  <li>
                    <p>
                      Now you can import and use the component in your
                      application:
                    </p>
                    <CodeBlock
                      code={`import { GradientButton } from "@/components/custom/gradient-button"

export default function MyPage() {
  return (
    <div>
      <h1>My Page</h1>
      <GradientButton>Click Me</GradientButton>
    </div>
  )
}`}
                      language="tsx"
                    />
                  </li>
                </ol>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold">Customizing Components</h3>
                <p>
                  All Shadbits components are built with customization in mind.
                  You can pass additional className props to override or extend
                  the default styles:
                </p>
                <CodeBlock
                  code={`<GradientButton className="rounded-full px-8">
  Custom Gradient Button
</GradientButton>`}
                  language="tsx"
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <footer className="border-t">
        <div className="container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5" />
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Shadbits. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 text-sm">
            <Link
              to="#"
              className="text-muted-foreground hover:underline underline-offset-4"
            >
              Terms
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:underline underline-offset-4"
            >
              Privacy
            </Link>
            <Link
              to="#"
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
