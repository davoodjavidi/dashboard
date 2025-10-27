export default function LoggedOutLayout({ children }) {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-24">
      {children}
    </div>
  );
}
