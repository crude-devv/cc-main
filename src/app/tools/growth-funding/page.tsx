import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function GrowthFundingCalculator() {
  return (
    <>
      <Navigation />
      <div style={{ width: '100%', minHeight: 'calc(100vh - 64px)' }}>
        <iframe
          src="/calculators/growth_funding_engine.html"
          style={{
            width: '100%',
            height: '100vh',
            border: 'none',
            display: 'block',
          }}
          title="Growth Funding Engine Calculator"
        />
      </div>
      <Footer />
    </>
  );
}
