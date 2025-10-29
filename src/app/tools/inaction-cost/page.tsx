import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function InactionCostCalculator() {
  return (
    <>
      <Navigation />
      <div style={{ width: '100%', minHeight: 'calc(100vh - 64px)' }}>
        <iframe
          src="/calculators/inaction_cost_engine.html"
          style={{
            width: '100%',
            height: '100vh',
            border: 'none',
            display: 'block',
          }}
          title="Cost of Inaction Calculator"
        />
      </div>
      <Footer />
    </>
  );
}
