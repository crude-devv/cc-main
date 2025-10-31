import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function GrowthFundingCalculator() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navigation />
      <div style={{ flex: '1', width: '100%', position: 'relative' }}>
        <iframe
          src="/calculators/growth_funding_engine.html"
          style={{
            width: '100%',
            height: '100%',
            minHeight: '800px',
            border: 'none',
            display: 'block',
          }}
          title="Growth Funding Engine Calculator"
        />
      </div>
      <Footer />
    </div>
  );
}
