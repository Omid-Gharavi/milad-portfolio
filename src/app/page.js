import Header from '@/components/header/Header';
import Hero from '@/components/hero/Hero';
import Sample from '@/components/samples/Sample';

export default function Home() {
  // useEffect(() => {
  //   window.addEventListener('beforeunload', () => {
  //     scroll(0, 0)
  //   });
  // }, []);

  return (
    <main className="min-h-screen bg-[#1f1f1f]">
      <Header />
      <Hero />
      <Sample />
    </main>
  );
}
