import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
}
