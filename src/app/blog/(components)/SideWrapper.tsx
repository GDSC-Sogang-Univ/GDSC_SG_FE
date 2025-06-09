import EventBanner from '@/components/EventBanner';

const SideWrapper = () => {
  return (
    <aside className='tablet_v:hidden w-1/5 max-w-[400px] border-r border-gdsc-Grey-100'>
      <EventBanner />
    </aside>
  );
};

export default SideWrapper;
