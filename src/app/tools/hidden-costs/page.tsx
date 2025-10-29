import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function HiddenCostsCalculator() {
  return (
    <>
      <Navigation />
      <div style={{ width: '100%', minHeight: 'calc(100vh - 64px)' }}>
        <iframe
          src="/calculators/Hidden Costs.html"
          style={{
            width: '100%',
            height: '100vh',
            border: 'none',
            display: 'block',
          }}
          title="Hidden Costs & TCO Calculator"
        />
      </div>
      <Footer />
    </>
  );
}
