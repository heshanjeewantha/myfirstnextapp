export default function ProfileLayout({ children }) {
  return (
    <>
    <div className="row">
      <h1>Profile header</h1>     
    </div>
    {children}
    <div>
      <h1>Profile footer</h1>
    </div>
    </>
  );
}
