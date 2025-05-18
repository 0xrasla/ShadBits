import{r as h,j as e,L as s}from"./index-2eSaS3zc.js";import{c as p,a as u,B as i,L as r}from"./layers-Q399h76A.js";import{C as j,T as f,a as g,b as a,c as o}from"./index-B0-SpDtX.js";import{A as N}from"./arrow-right-HO_ENB2w.js";/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],y=p("check",b);function t({code:n,language:c="tsx",className:d}){const[m,l]=h.useState(!1),x=async()=>{await navigator.clipboard.writeText(n),l(!0),setTimeout(()=>l(!1),2e3)};return e.jsxs("div",{className:u("relative rounded-lg border bg-muted",d),children:[e.jsxs("div",{className:"flex items-center justify-between px-4 py-2 border-b",children:[e.jsx("div",{className:"text-sm text-muted-foreground",children:c}),e.jsx(i,{variant:"ghost",size:"sm",className:"h-8 gap-1",onClick:x,children:m?e.jsxs(e.Fragment,{children:[e.jsx(y,{className:"h-3.5 w-3.5"}),e.jsx("span",{children:"Copied"})]}):e.jsxs(e.Fragment,{children:[e.jsx(j,{className:"h-3.5 w-3.5"}),e.jsx("span",{children:"Copy"})]})})]}),e.jsx("pre",{className:"p-4 overflow-x-auto text-sm",children:e.jsx("code",{children:n})})]})}const S=function(){return e.jsxs("div",{className:"flex flex-col min-h-screen",children:[e.jsx("header",{className:"border-b",children:e.jsxs("div",{className:"container flex items-center justify-between h-16 px-4 md:px-6 mx-auto",children:[e.jsxs(s,{to:"/",className:"flex items-center gap-2",children:[e.jsx(r,{className:"w-6 h-6"}),e.jsx("span",{className:"text-xl font-bold",children:"Shadbits"})]}),e.jsxs("nav",{className:"hidden md:flex gap-6",children:[e.jsx(s,{to:"/",className:"text-sm font-medium hover:underline underline-offset-4",children:"Home"}),e.jsx(s,{to:"/browse",className:"text-sm font-medium hover:underline underline-offset-4",children:"Browse"}),e.jsx(s,{to:"/docs",className:"text-sm font-medium hover:underline underline-offset-4",children:"Docs"})]})]})}),e.jsx("main",{className:"flex-1 container px-4 py-8 md:px-6 md:py-12 mx-auto",children:e.jsxs("div",{className:"flex flex-col gap-8 max-w-3xl mx-auto",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h1",{className:"text-3xl font-bold tracking-tight",children:"Documentation"}),e.jsx("p",{className:"text-muted-foreground",children:"Learn how to use Shadbits components in your projects."})]}),e.jsxs(f,{defaultValue:"getting-started",className:"w-full",children:[e.jsxs(g,{className:"w-full md:w-auto grid grid-cols-3",children:[e.jsx(a,{value:"getting-started",children:"Getting Started"}),e.jsx(a,{value:"installation",children:"Installation"}),e.jsx(a,{value:"usage",children:"Usage"})]}),e.jsxs(o,{value:"getting-started",className:"space-y-6 mt-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Getting Started with Shadbits"}),e.jsx("p",{children:"Shadbits is a collection of custom styled components built on top of shadcn/ui. These components are designed to be easily integrated into your Next.js or React projects."}),e.jsx("p",{children:"All components are built using Tailwind CSS and follow the same composable pattern as shadcn/ui, making them easy to customize and extend."})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-bold",children:"Prerequisites"}),e.jsxs("ul",{className:"list-disc pl-6 space-y-2",children:[e.jsx("li",{children:"A Next.js or React project"}),e.jsx("li",{children:"shadcn/ui installed in your project"}),e.jsx("li",{children:"Tailwind CSS configured"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-bold",children:"Quick Start"}),e.jsx("p",{children:"The fastest way to get started is to browse our component library, find a component you like, and copy the code directly into your project."}),e.jsx(s,{to:"/browse",children:e.jsxs(i,{className:"gap-1",children:["Browse Components",e.jsx(N,{className:"w-4 h-4"})]})})]})]}),e.jsxs(o,{value:"installation",className:"space-y-6 mt-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Installation"}),e.jsx("p",{children:"Shadbits components are designed to be copied and pasted into your project. There's no package to install."}),e.jsx("p",{children:"However, you need to have shadcn/ui installed in your project first."})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-bold",children:"Installing shadcn/ui"}),e.jsx("p",{children:"If you haven't already installed shadcn/ui, you can do so by following these steps:"}),e.jsx(t,{code:`# For Next.js projects
npx shadcn@latest init

# Follow the prompts to configure your project`,language:"bash"}),e.jsx("p",{children:"Then, install the base components that our custom components extend:"}),e.jsx(t,{code:`# Install the button component
npx shadcn@latest add button

# Install the tabs component
npx shadcn@latest add tabs

# Install the badge component
npx shadcn@latest add badge`,language:"bash"})]})]}),e.jsxs(o,{value:"usage",className:"space-y-6 mt-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold",children:"Usage"}),e.jsx("p",{children:"Using Shadbits components is simple. Just copy the component code from our library and paste it into your project."})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-bold",children:"Example: Using a Custom Button"}),e.jsx("p",{children:"Here's how to use a custom button component from Shadbits:"}),e.jsxs("ol",{className:"list-decimal pl-6 space-y-4",children:[e.jsxs("li",{children:[e.jsx("p",{children:"First, copy the component code from our library:"}),e.jsx(t,{code:`import { cn } from "@/lib/utils"
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
GradientButton.displayName = "GradientButton"`,language:"tsx"})]}),e.jsx("li",{children:e.jsxs("p",{children:["Save this file in your project, for example at"," ",e.jsx("code",{children:"components/custom/gradient-button.tsx"})]})}),e.jsxs("li",{children:[e.jsx("p",{children:"Now you can import and use the component in your application:"}),e.jsx(t,{code:`import { GradientButton } from "@/components/custom/gradient-button"

export default function MyPage() {
  return (
    <div>
      <h1>My Page</h1>
      <GradientButton>Click Me</GradientButton>
    </div>
  )
}`,language:"tsx"})]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-xl font-bold",children:"Customizing Components"}),e.jsx("p",{children:"All Shadbits components are built with customization in mind. You can pass additional className props to override or extend the default styles:"}),e.jsx(t,{code:`<GradientButton className="rounded-full px-8">
  Custom Gradient Button
</GradientButton>`,language:"tsx"})]})]})]})]})}),e.jsx("footer",{className:"border-t",children:e.jsxs("div",{className:"container flex flex-col gap-4 py-10 md:flex-row md:items-center md:justify-between md:py-12",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(r,{className:"w-5 h-5"}),e.jsxs("p",{className:"text-sm text-muted-foreground",children:["© ",new Date().getFullYear()," Shadbits. All rights reserved."]})]}),e.jsxs("nav",{className:"flex gap-4 text-sm",children:[e.jsx(s,{to:"/",className:"text-muted-foreground hover:underline underline-offset-4",children:"Terms"}),e.jsx(s,{to:"/",className:"text-muted-foreground hover:underline underline-offset-4",children:"Privacy"}),e.jsx(s,{to:"/",className:"text-muted-foreground hover:underline underline-offset-4",children:"Contact"})]})]})})]})};export{S as component};
