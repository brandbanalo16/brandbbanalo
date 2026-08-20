export default function SmoothWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">{children}</div>
    </div>
  );
}


