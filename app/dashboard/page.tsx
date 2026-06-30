import DashboardHeader from "@/components/dashboard/DashboardHeader";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import StatsCards from "@/components/dashboard/StatsCards";
import PrayerCard from "@/components/dashboard/PrayerCard";
import QuranProgress from "@/components/dashboard/QuranProgress";
import AIChatCard from "@/components/dashboard/AIChatCard";

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex">

      <DashboardSidebar />

      <section className="flex-1 p-8">

        <DashboardHeader />

        <div className="mt-8">
          <StatsCards />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">

          <PrayerCard />

          <QuranProgress />

          <AIChatCard />

        </div>

      </section>

    </main>
  );
}