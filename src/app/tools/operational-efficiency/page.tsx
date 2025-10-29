export default function OperationalEfficiencyCalculator() {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/calculators/operational_efficiency_engine.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
        }}
        title="Operational Efficiency Calculator"
      />
    </div>
  );
}
