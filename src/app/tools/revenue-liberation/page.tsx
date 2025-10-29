export default function RevenueLiberationCalculator() {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="/calculators/revenue_liberation.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          display: 'block',
        }}
        title="Revenue Liberation Calculator"
      />
    </div>
  );
}
