export default function GrowthFundingCalculator() {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/calculators/growth_funding_engine.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
        }}
        title="Growth Funding Engine Calculator"
      />
    </div>
  );
}
