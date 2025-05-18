import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
}
