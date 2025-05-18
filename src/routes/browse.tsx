import { CustomButton } from "@/components/custom/custom-button";
import { CustomTabs } from "@/components/custom/custom-tabs";
import { GradientBadge } from "@/components/custom/gradient-badge";
import { GradientButton } from "@/components/custom/gradient-button";
import { IconTabs } from "@/components/custom/icon-tabs";
import { OutlineBadge } from "@/components/custom/outline-badge";
import { OutlinedButton } from "@/components/custom/outlined-button";
import { PillBadge } from "@/components/custom/pill-badge";
import { PillTabs } from "@/components/custom/pill-tabs";
import { StatusBadge } from "@/components/custom/status-badge";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Code, Copy, Eye, Layers, Search } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/browse")({
  component: RouteComponent,
});

function RouteComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [viewMode, setViewMode] = useState<Record<string, "preview" | "code">>(
    {}
  );

  const categories = [
    "all",
    ...Array.from(new Set(components.map((c) => c.category))),
  ];

  const filteredComponents = components.filter((component) => {
    const matchesSearch =
      component.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "all" || component.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const toggleViewMode = (id: string) => {
    setViewMode((prev) => ({
      ...prev,
      [id]: prev[id] === "code" ? "preview" : "code",
    }));
  };

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
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tight">
              Browse Components
            </h1>
            <p className="text-muted-foreground">
              Discover custom styled components that extend the shadcn/ui
              library.
            </p>
          </div>

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="relative w-full md:w-72">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search components..."
                className="w-full pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Tabs
              value={activeCategory}
              onValueChange={setActiveCategory}
              className="w-full md:w-auto"
            >
              <TabsList className="w-full md:w-auto">
                {categories.map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    className="capitalize"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {filteredComponents.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredComponents.map((component) => (
                <Card key={component.id} className="overflow-hidden">
                  <CardHeader className="p-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">
                        {component.title}
                      </CardTitle>
                      <Badge variant="outline" className="capitalize">
                        {component.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <p className="text-sm text-muted-foreground mb-4">
                      {component.description}
                    </p>
                    <div className="flex items-center justify-center p-4 border rounded-lg bg-muted/50 min-h-[100px]">
                      {viewMode[component.id] === "code" ? (
                        <pre className="text-xs overflow-x-auto w-full">
                          <code>{component.code}</code>
                        </pre>
                      ) : (
                        component.component
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1"
                      onClick={() => toggleViewMode(component.id)}
                    >
                      {viewMode[component.id] === "code" ? (
                        <>
                          <Eye className="h-3.5 w-3.5" />
                          <span>Preview</span>
                        </>
                      ) : (
                        <>
                          <Code className="h-3.5 w-3.5" />
                          <span>Code</span>
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1"
                      onClick={() => {
                        navigator.clipboard.writeText(component.code);
                      }}
                    >
                      <Copy className="h-3.5 w-3.5" />
                      <span>Copy</span>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Code className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium">No components found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
            </div>
          )}
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

const components = [
  {
    id: "custom-button",
    title: "Custom Button",
    description: "A custom styled button with hover effects",
    category: "button",
    component: <CustomButton>Custom Button</CustomButton>,
    code: `import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"
import { forwardRef } from "react"

export const CustomButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={cn(
          "bg-gradient-to-r from-slate-900 to-slate-700 hover:from-slate-800 hover:to-slate-600 text-white border-none shadow-lg transition-all duration-300",
          className
        )}
        {...props}
      />
    )
  }
)`,
  },
  {
    id: "gradient-button",
    title: "Gradient Button",
    description: "A button with gradient background",
    category: "button",
    component: <GradientButton>Gradient Button</GradientButton>,
    code: `import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"
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
)`,
  },
  {
    id: "outlined-button",
    title: "Outlined Button",
    description: "A button with custom outline style",
    category: "button",
    component: <OutlinedButton>Outlined Button</OutlinedButton>,
    code: `import { cn } from "@/lib/utils"
import { Button, ButtonProps } from "@/components/ui/button"
import { forwardRef } from "react"

export const OutlinedButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="outline"
        className={cn(
          "border-2 border-slate-800 text-slate-800 hover:bg-slate-800 hover:text-white transition-all duration-300",
          className
        )}
        {...props}
      />
    )
  }
)`,
  },
  {
    id: "custom-tabs",
    title: "Custom Tabs",
    description: "Custom styled tabs with rounded corners",
    category: "tabs",
    component: <CustomTabs />,
    code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function CustomTabs() {
  return (
    <Tabs defaultValue="account" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-2 rounded-xl bg-slate-100 p-1">
        <TabsTrigger
          value="account"
          className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm"
        >
          Account
        </TabsTrigger>
        <TabsTrigger
          value="password"
          className="rounded-lg data-[state=active]:bg-white data-[state=active]:text-slate-900 data-[state=active]:shadow-sm"
        >
          Password
        </TabsTrigger>
      </TabsList>
      <TabsContent value="account" className="mt-4">
        <div className="rounded-lg border p-4">
          <p>Account settings content goes here.</p>
        </div>
      </TabsContent>
      <TabsContent value="password" className="mt-4">
        <div className="rounded-lg border p-4">
          <p>Password settings content goes here.</p>
        </div>
      </TabsContent>
    </Tabs>
  )
}`,
  },
  {
    id: "pill-tabs",
    title: "Pill Tabs",
    description: "Tabs styled as pills with active indicator",
    category: "tabs",
    component: <PillTabs />,
    code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PillTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full max-w-md">
      <TabsList className="flex h-9 items-center justify-start rounded-lg bg-transparent p-0 w-full gap-2">
        <TabsTrigger
          value="overview"
          className="rounded-full px-4 py-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger
          value="analytics"
          className="rounded-full px-4 py-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          Analytics
        </TabsTrigger>
        <TabsTrigger
          value="reports"
          className="rounded-full px-4 py-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
        >
          Reports
        </TabsTrigger>
      </TabsList>
      <TabsContent value="overview" className="mt-4">
        <div className="rounded-lg border p-4">
          <p>Overview content goes here.</p>
        </div>
      </TabsContent>
      <TabsContent value="analytics" className="mt-4">
        <div className="rounded-lg border p-4">
          <p>Analytics content goes here.</p>
        </div>
      </TabsContent>
      <TabsContent value="reports" className="mt-4">
        <div className="rounded-lg border p-4">
          <p>Reports content goes here.</p>
        </div>
      </TabsContent>
    </Tabs>
  )
}`,
  },
  {
    id: "icon-tabs",
    title: "Icon Tabs",
    description: "Tabs with icons and labels",
    category: "tabs",
    component: <IconTabs />,
    code: `import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Home, Settings, User } from 'lucide-react'

export function IconTabs() {
  return (
    <Tabs defaultValue="home" className="w-full max-w-md">
      <TabsList className="grid w-full grid-cols-3 bg-muted/50">
        <TabsTrigger value="home" className="flex items-center gap-2 data-[state=active]:bg-background">
          <Home className="h-4 w-4" />
          <span>Home</span>
        </TabsTrigger>
        <TabsTrigger value="profile" className="flex items-center gap-2 data-[state=active]:bg-background">
          <User className="h-4 w-4" />
          <span>Profile</span>
        </TabsTrigger>
        <TabsTrigger value="settings" className="flex items-center gap-2 data-[state=active]:bg-background">
          <Settings className="h-4 w-4" />
          <span>Settings</span>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="home" className="mt-4">
        <div className="rounded-lg border p-4">
          <p>Home content goes here.</p>
        </div>
      </TabsContent>
      <TabsContent value="profile" className="mt-4">
        <div className="rounded-lg border p-4">
          <p>Profile content goes here.</p>
        </div>
      </TabsContent>
      <TabsContent value="settings" className="mt-4">
        <div className="rounded-lg border p-4">
          <p>Settings content goes here.</p>
        </div>
      </TabsContent>
    </Tabs>
  )
}`,
  },
  {
    id: "status-badge",
    title: "Status Badge",
    description: "Badges for different status types",
    category: "badge",
    component: (
      <div className="flex gap-2 flex-wrap">
        <StatusBadge status="success">Success</StatusBadge>
        <StatusBadge status="warning">Warning</StatusBadge>
        <StatusBadge status="error">Error</StatusBadge>
        <StatusBadge status="info">Info</StatusBadge>
      </div>
    ),
    code: `import { cn } from "@/lib/utils"
import { Badge, type BadgeProps } from "@/components/ui/badge"
import { forwardRef } from "react"

export const StatusBadge = forwardRef<HTMLDivElement, BadgeProps & { status?: "success" | "warning" | "error" | "info" }>(
  ({ className, status = "info", ...props }, ref) => {
    const statusStyles = {
      success: "bg-green-100 text-green-800 hover:bg-green-200",
      warning: "bg-yellow-100 text-yellow-800 hover:bg-yellow-200",
      error: "bg-red-100 text-red-800 hover:bg-red-200",
      info: "bg-blue-100 text-blue-800 hover:bg-blue-200",
    }

    return (
      <Badge
        ref={ref}
        variant="outline"
        className={cn("border-0 font-medium", statusStyles[status], className)}
        {...props}
      />
    )
  }
)`,
  },
  {
    id: "pill-badge",
    title: "Pill Badge",
    description: "Rounded pill-shaped badge",
    category: "badge",
    component: <PillBadge>New Feature</PillBadge>,
    code: `import { cn } from "@/lib/utils"
import { Badge, type BadgeProps } from "@/components/ui/badge"
import { forwardRef } from "react"

export const PillBadge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, ...props }, ref) => {
    return (
      <Badge
        ref={ref}
        className={cn(
          "rounded-full px-3 py-0.5 font-normal bg-slate-100 text-slate-800 hover:bg-slate-200 border-0",
          className
        )}
        {...props}
      />
    )
  }
)`,
  },
  {
    id: "outline-badge",
    title: "Outline Badge",
    description: "Badge with custom outline style",
    category: "badge",
    component: <OutlineBadge>Premium</OutlineBadge>,
    code: `import { cn } from "@/lib/utils"
import { Badge, type BadgeProps } from "@/components/ui/badge"
import { forwardRef } from "react"

export const OutlineBadge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, ...props }, ref) => {
    return (
      <Badge
        ref={ref}
        variant="outline"
        className={cn(
          "border-2 bg-transparent text-slate-800 hover:bg-slate-100",
          className
        )}
        {...props}
      />
    )
  }
)`,
  },
  {
    id: "gradient-badge",
    title: "Gradient Badge",
    description: "Badge with gradient background",
    category: "badge",
    component: <GradientBadge>Featured</GradientBadge>,
    code: `import { cn } from "@/lib/utils"
import { Badge, type BadgeProps } from "@/components/ui/badge"
import { forwardRef } from "react"

export const GradientBadge = forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, ...props }, ref) => {
    return (
      <Badge
        ref={ref}
        className={cn(
          "bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white border-0",
          className
        )}
        {...props}
      />
    )
  }
)`,
  },
];
