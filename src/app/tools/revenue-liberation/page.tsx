import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function RevenueLiberationCalculator() {
  return (
    <>
      <Navigation />
      <div style={{ width: '100%', minHeight: 'calc(100vh - 64px)' }}>
        <iframe
          src="/calculators/revenue_liberation.html"
          style={{
            width: '100%',
            height: '100vh',
            border: 'none',
            display: 'block',
          }}
          title="Revenue Liberation Calculator"
        />
      </div>
      <Footer />
    </>
  );
}
