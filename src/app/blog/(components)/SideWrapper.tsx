import EventBanner from "@/components/EventBanner";

const SideWrapper = () => {
  return (
    <aside className="hidden md:flex w-1/3 min-w-[150px] max-w-sm h-full">
      <EventBanner />
    </aside>
  )
}

export default SideWrapper;