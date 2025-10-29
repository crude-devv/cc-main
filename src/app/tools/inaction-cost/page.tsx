export default function InactionCostCalculator() {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/calculators/inaction_cost_engine.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
        }}
        title="Cost of Inaction Calculator"
      />
    </div>
  );
}
