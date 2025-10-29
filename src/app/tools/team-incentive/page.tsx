import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TeamIncentiveCalculator() {
  return (
    <>
      <Navigation />
      <div style={{ width: '100%', minHeight: 'calc(100vh - 64px)' }}>
        <iframe
          src="/calculators/hospitality - team incentive.html"
          style={{
            width: '100%',
            height: '100vh',
            border: 'none',
            display: 'block',
          }}
          title="Team Performance & Incentive Calculator"
        />
      </div>
      <Footer />
    </>
  );
}
