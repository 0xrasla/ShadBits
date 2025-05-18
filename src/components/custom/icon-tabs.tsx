import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Home, Settings, User } from "lucide-react"

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
}
