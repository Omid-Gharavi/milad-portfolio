import Hero from '@/components/hero/Hero';
import Sample from '@/components/samples/Sample';

export default function Home() {
  // useEffect(() => {
  //   window.addEventListener('beforeunload', () => {
  //     scroll(0, 0)
  //   });
  // }, []);

  return (
    <main className="relative min-h-screen bg-[#1f1f1f]">
      <Hero />
      <Sample />
    </main>
  );
}
