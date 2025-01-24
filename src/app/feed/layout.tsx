export default function PaymentLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Render the feed */}
      <div style={{ position: 'relative', zIndex: 0 }}>
        <h1>Feed Page</h1>
      </div>

      {/* Intercepting content */}
      <div style={{ position: 'absolute', top: 0, zIndex: 10, backgroundColor: 'white' }}>
        {children}
      </div>
    </>
  );
}
