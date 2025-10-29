export default function HiddenCostsCalculator() {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/calculators/Hidden Costs.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
        }}
        title="Hidden Costs & TCO Calculator"
      />
    </div>
  );
}
