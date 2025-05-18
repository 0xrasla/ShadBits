# Shadbits: Enhanced UI Components for shadcn/ui

![Shadbits Banner](https://img.shields.io/badge/Shadbits-Enhanced%20UI%20Components-8A2BE2)
![React 19](https://img.shields.io/badge/React-19-blue)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Latest-black)
![License MIT](https://img.shields.io/badge/License-MIT-green)

## 🚀 Overview

Shadbits extends the popular shadcn/ui component library with beautiful, customized, and additional components for modern React applications. These components are designed to be accessible, customizable, and ready to use in your next project.

## ✨ Features

- **Enhanced shadcn/ui Components**: Extended variations of the base components
- **Custom Gradient Components**: Beautiful gradient-styled buttons and badges
- **Specialized UI Elements**: Status badges, pill tabs, icon tabs, and more
- **Fully Typed**: Built with TypeScript for better developer experience
- **Responsive Design**: All components work seamlessly across devices
- **Accessibility**: Follows best practices for accessible UI components
- **TanStack Router Integration**: Ready to use with modern React routing

## 📦 Custom Components

Shadbits includes the following custom components not found in the standard shadcn/ui:

### Buttons

- `GradientButton`: Beautiful gradient-styled buttons with smooth hover effects
- `OutlinedButton`: Enhanced outlined buttons with improved styling
- `CustomButton`: Flexible button component with additional customization options

### Badges

- `GradientBadge`: Eye-catching gradient badges for highlighting important content
- `OutlineBadge`: Subtle outlined badges for secondary information
- `PillBadge`: Rounded pill-shaped badges
- `StatusBadge`: Specialized badges for showing statuses (success, error, warning)

### Tabs

- `CustomTabs`: Enhanced tab components with customizable styling
- `PillTabs`: Rounded tab navigation with pill shape
- `IconTabs`: Tab components with icon support

## 🔧 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/shadbits.git

# Navigate to the project directory
cd shadbits

# Install dependencies
bun install

# Start the development server
bun dev
```

## 📖 Usage

```tsx
import { GradientButton } from "@/components/custom/gradient-button";
import { StatusBadge } from "@/components/custom/status-badge";

function MyComponent() {
  return (
    <div>
      <GradientButton>Click Me</GradientButton>
      <StatusBadge status="success">Completed</StatusBadge>
    </div>
  );
}
```

More information on layouts can be found in the [Layouts documentation](https://tanstack.com/router/latest/docs/framework/react/guide/routing-concepts#layouts).

## Data Fetching

There are multiple ways to fetch data in your application. You can use TanStack Query to fetch data from a server. But you can also use the `loader` functionality built into TanStack Router to load the data for a route before it's rendered.

For example:

```tsx
const peopleRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/people",
  loader: async () => {
    const response = await fetch("https://swapi.dev/api/people");
    return response.json() as Promise<{
      results: {
        name: string;
      }[];
    }>;
  },
  component: () => {
    const data = peopleRoute.useLoaderData();
    return (
      <ul>
        {data.results.map((person) => (
          <li key={person.name}>{person.name}</li>
        ## 📚 Documentation

Browse all available components in our interactive documentation:

- Visit the [Component Browser](/browse) to see all components in action
- Check out the [Documentation](/docs) for detailed usage instructions

## 📐 Project Structure

```

src/
├── components/
│ ├── custom/ # Custom Shadbits components
│ │ ├── custom-button.tsx
│ │ ├── custom-tabs.tsx
│ │ ├── gradient-badge.tsx
│ │ ├── gradient-button.tsx
│ │ ├── icon-tabs.tsx
│ │ ├── outline-badge.tsx
│ │ ├── outlined-button.tsx
│ │ ├── pill-badge.tsx
│ │ ├── pill-tabs.tsx
│ │ └── status-badge.tsx
│ └── ui/ # Standard shadcn/ui components
├── routes/ # TanStack Router routes
└── lib/ # Utility functions

````

## 🛠️ Tech Stack

- **React 19**: Latest version of React
- **TypeScript**: For type safety
- **TanStack Router**: Modern routing for React
- **shadcn/ui**: Core component library
- **Tailwind CSS**: For styling
- **Vite**: Build tool for fast development
- **Bun**: JavaScript runtime and package manager

## 🧪 Testing

This project uses [Vitest](https://vitest.dev/) for testing:

```bash
bun test
````

## 🔨 Development

To run the development server:

```bash
bun dev
```

## 📦 Building For Production

To build this application for production:

```bash
bun run build
```

## 🔍 Adding New Components

To add standard shadcn/ui components:

```bash
pnpx shadcn@latest add component-name
```

For custom components, follow the pattern in the `src/components/custom` directory.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the amazing base components
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [TanStack Router](https://tanstack.com/router) for modern React routing

---

Built with ❤️ by [Your Name/Organization]
