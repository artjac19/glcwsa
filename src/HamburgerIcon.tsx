export function HamburgerIcon({ open, size = 32 }: { open: boolean; size?: number }) {
  return open ? (
    // X icon
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="8" y1="8" x2="24" y2="24" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <line x1="8" y1="24" x2="24" y2="8" stroke="white" strokeWidth="3" strokeLinecap="round" />
    </svg>
  ) : (
    // Hamburger icon
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="6" y="9" width="20" height="3" rx="1.5" fill="white" />
      <rect x="6" y="15" width="20" height="3" rx="1.5" fill="white" />
      <rect x="6" y="21" width="20" height="3" rx="1.5" fill="white" />
    </svg>
  );
}
